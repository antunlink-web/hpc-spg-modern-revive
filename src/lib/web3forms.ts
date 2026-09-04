// Web3Forms submission helper.
// Docs: https://docs.web3forms.com/

export type Web3FormType = "offer" | "user_access" | "contact" | "survey" | "e_uplatnice" | "web_stranica";

const ENDPOINT = "https://api.web3forms.com/submit";

const env = import.meta.env as Record<string, string | undefined>;
const OFFER_KEY = env.WEB3FORMS_OFFER_KEY ?? env.VITE_WEB3FORMS_OFFER_KEY;
const USER_ACCESS_KEY = env.WEB3FORMS_USER_ACCESS_KEY ?? env.VITE_WEB3FORMS_USER_ACCESS_KEY;
const CONTACT_KEY = env.WEB3FORMS_CONTACT_KEY ?? env.VITE_WEB3FORMS_CONTACT_KEY;

const KEY_MAP: Record<Web3FormType, string | undefined> = {
  offer: OFFER_KEY,
  user_access: USER_ACCESS_KEY,
  contact: CONTACT_KEY,
  survey: CONTACT_KEY,
  e_uplatnice: OFFER_KEY,
  web_stranica: OFFER_KEY,
};

const SUBJECT_MAP: Record<Web3FormType, string> = {
  offer: "Novi zahtjev za ponudu - HPC-SPG web stranica",
  user_access: "Novi zahtjev za korisničke podatke - HPC-SPG",
  contact: "Nova poruka putem web stranice - HPC-SPG",
  survey: "Nova ispunjena anketa - HPC-SPG",
  e_uplatnice: "Novi zahtjev za e-uplatnice - HPC-SPG",
  web_stranica: "Novi zahtjev za izradu web stranice zgrade - HPC-SPG",
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
  "/documents/zastita-osobnih-podataka.pdf";

export const SUCCESS_MESSAGES: Record<Web3FormType, string> = {
  offer: "Hvala! Vaš je zahtjev uspješno poslan.",
  contact: "Hvala! Vaš je zahtjev uspješno poslan.",
  user_access: "Hvala! Vaš zahtjev za korisničke podatke uspješno je poslan.",
  survey: "Hvala! Vaša anketa uspješno je poslana.",
  e_uplatnice: "Hvala! Vaš zahtjev za dostavu uplatnica e-mailom uspješno je poslan.",
  web_stranica: "Hvala! Vaš zahtjev za izradu web stranice zgrade uspješno je poslan. Javit ćemo Vam se s individualnom ponudom.",
};

export const ERROR_MESSAGE =
  "Došlo je do pogreške pri slanju. Molimo pokušajte ponovno ili nas kontaktirajte putem e-pošte.";
