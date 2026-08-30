import { useEffect } from "react";
import { identity, calLink } from "../data/content.js";
import { SectionHead, Reveal } from "./primitives.jsx";

const contactRows = [
  { label: "WhatsApp", value: identity.phone, href: identity.whatsapp },
  { label: "Email", value: identity.email, href: `mailto:${identity.email}` },
  { label: "LinkedIn", value: identity.linkedinHandle, href: identity.linkedin },
  { label: "GitHub", value: identity.githubHandle, href: identity.github },
  { label: "Localisation", value: `${identity.location} ${identity.locationFlag}` },
  { label: "Disponibilité", value: "● Disponible remote / hybride / relocalisation", tag: true },
];

export function Contact() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (!window.Cal) return;
    window.Cal("init", "30min", { origin: "https://app.cal.com" });
    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#cal-inline",
      config: { layout: "month_view", theme: "dark" },
      calLink,
    });
    window.Cal.ns["30min"]("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#d8b06a" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="contact" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="10"
          kicker="Contact"
          title="Discutons de votre projet"
          lead="Toutes les coordonnées utiles, et un calendrier pour réserver un créneau directement."
        />
        <div className="contact-grid">
          <Reveal>
            <ul className="contact-list">
              {contactRows.map((r) => (
                <li key={r.label}>
                  <span className="cl-label">{r.label}</span>
                  <span className={`cl-value ${r.tag ? "tag-ok" : ""}`}>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noreferrer">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="hero-ctas" style={{ marginTop: "2.5rem" }}>
              <a href={identity.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor="lg">
                Écrire sur WhatsApp
              </a>
              <a href={`mailto:${identity.email}`} className="btn btn-ghost" data-cursor="lg">
                Envoyer un email
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="cal-card">
            <h4>Planifier un rendez-vous</h4>
            <div className="cal-embed" id="cal-inline" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
