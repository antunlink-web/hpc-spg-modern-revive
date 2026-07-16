// Web3Forms submission helper.
// Docs: https://docs.web3forms.com/

export type Web3FormType = "offer" | "user_access" | "contact" | "survey";

const ENDPOINT = "https://api.web3forms.com/submit";

const KEY_MAP: Record<Web3FormType, string | undefined> = {
  offer: import.meta.env.WEB3FORMS_OFFER_KEY as string | undefined,
  user_access: import.meta.env.WEB3FORMS_USER_ACCESS_KEY as string | undefined,
  contact: import.meta.env.WEB3FORMS_CONTACT_KEY as string | undefined,
  // survey shares the contact inbox (info@hpc-spg.hr) but uses a distinct subject
  survey: import.meta.env.WEB3FORMS_CONTACT_KEY as string | undefined,
};

const SUBJECT_MAP: Record<Web3FormType, string> = {
  offer: "Novi zahtjev za ponudu - HPC-SPG web stranica",
  user_access: "Novi zahtjev za korisničke podatke - HPC-SPG",
  contact: "Nova poruka putem web stranice - HPC-SPG",
  survey: "Nova ispunjena anketa - HPC-SPG",
};

export function getFormSubject(type: Web3FormType) {
  return SUBJECT_MAP[type];
}

export function getFormKey(type: Web3FormType) {
  return KEY_MAP[type];
}

export interface SubmitOptions {
  type: Web3FormType;
  data: Record<string, FormDataEntryValue | string | number | boolean>;
  /** Optional label describing which form on the site sent this. */
  source?: string;
}

export async function submitWeb3Form({ type, data, source }: SubmitOptions) {
  const access_key = KEY_MAP[type];

  if (!access_key) {
    // eslint-disable-next-line no-console
    console.warn(
      `[web3forms] Missing access key for "${type}". ` +
        `Set the corresponding WEB3FORMS_*_KEY env variable.`,
    );
    throw new Error("MISSING_ACCESS_KEY");
  }

  // Strip the botcheck field: if it's checked, silently succeed without sending.
  if (data.botcheck) {
    return { success: true, spam: true } as const;
  }

  const payload: Record<string, unknown> = {
    ...data,
    access_key,
    subject: SUBJECT_MAP[type],
    from_name: "HPC-SPG web stranica",
    page_url: typeof window !== "undefined" ? window.location.href : "",
    form_source: source ?? type,
    submitted_at: new Date().toISOString(),
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let json: { success?: boolean; message?: string } = {};
  try {
    json = await res.json();
  } catch {
    // ignore JSON parse errors — treated as failure below
  }

  if (!res.ok || !json.success) {
    throw new Error(json.message || `Web3Forms request failed (${res.status})`);
  }

  return { success: true } as const;
}

export const CONSENT_LABEL =
  "Slažem se da se uneseni podaci koriste isključivo radi odgovora na moj upit.";
export const PRIVACY_URL =
  "https://hpc-spg.hr/wp-content/uploads/2019/04/web1-Izjava-o-za%C5%A1titi-osobnih-podataka-internet-stranica-klijenti-i-dobavlja%C4%8Di-HPC-SPG-1.pdf";

export const SUCCESS_MESSAGES: Record<Web3FormType, string> = {
  offer: "Hvala! Vaš je zahtjev uspješno poslan.",
  contact: "Hvala! Vaš je zahtjev uspješno poslan.",
  user_access: "Hvala! Vaš zahtjev za korisničke podatke uspješno je poslan.",
  survey: "Hvala! Vaša anketa uspješno je poslana.",
};

export const ERROR_MESSAGE =
  "Došlo je do pogreške pri slanju. Molimo pokušajte ponovno ili nas kontaktirajte putem e-pošte.";
