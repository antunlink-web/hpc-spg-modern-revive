import sanitizeHtml from "sanitize-html";

export function sanitizeNewsHtml(value: unknown) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  return sanitizeHtml(value, {
    allowedTags: [
      "p",
      "br",
      "strong",
      "b",
      "em",
      "i",
      "u",
      "s",
      "h2",
      "h3",
      "h4",
      "h5",
      "ul",
      "ol",
      "li",
      "blockquote",
      "a",
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "hr",
      "span",
      "div",
      "sup",
      "sub",
      "code",
      "pre",
    ],

    allowedAttributes: {
      a: [
        "href",
        "target",
        "rel",
        "title",
      ],
      img: [
        "src",
        "alt",
        "title",
        "width",
        "height",
        "loading",
      ],
      th: [
        "colspan",
        "rowspan",
        "scope",
      ],
      td: [
        "colspan",
        "rowspan",
      ],
      "*": [
        "class",
      ],
    },

    allowedSchemes: [
      "http",
      "https",
      "mailto",
      "tel",
    ],

    allowedSchemesByTag: {
      img: [
        "http",
        "https",
      ],
    },

    allowProtocolRelative: false,

    transformTags: {
      a: (
        tagName,
        attribs,
      ) => {
        const external =
          typeof attribs.href === "string" &&
          /^https?:\/\//i.test(attribs.href);

        return {
          tagName,
          attribs: {
            ...attribs,
            ...(external
              ? {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {}),
          },
        };
      },

      img: (
        tagName,
        attribs,
      ) => ({
        tagName,
        attribs: {
          ...attribs,
          loading:
            attribs.loading || "lazy",
        },
      }),
    },

    disallowedTagsMode: "discard",
  });
}
