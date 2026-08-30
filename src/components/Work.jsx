import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { projects } from "../data/content.js";
import { EASE, SectionHead, Reveal, TiltCard } from "./primitives.jsx";

function shortUrl(href) {
  try {
    return new URL(href).host.replace(/^www\./, "") + new URL(href).pathname.replace(/\/$/, "");
  } catch {
    return href;
  }
}

function CaseMedia({ p }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-9%", "9%"]);

  return (
    <div className={`case-media ${p.image ? "" : "case-media--empty"}`} ref={ref}>
      <TiltCard className="browser">
        <div className="browser__bar">
          <i />
          <i />
          <i />
          <span className="url">{shortUrl(p.href)}</span>
        </div>
        <div className="browser__shot">
          {p.image ? (
            <motion.img src={p.image} alt={p.title} loading="lazy" style={{ y: imgY }} />
          ) : (
            <span>{p.title.split("")[0].trim()}</span>
          )}
          <div className="browser__glow" />
        </div>
      </TiltCard>
    </div>
  );
}

export function Work() {
  return (
    <section id="travaux" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="05"
          kicker="Études de cas"
          title="Réalisations sélectionnées"
          lead="Huit projets représentatifs  fintech, e-gouvernement, cartographie, mobilité et e-commerce  du cadrage à la mise en production."
        />

        {projects.map((p) => (
          <article className="case" key={p.index}>
            <div>
              <Reveal>
                <div className="case-ix">{p.index}</div>
                <span className="case-kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                {p.award && <div className="award-badge">🏆 {p.award}</div>}
                <div className="chips" style={{ marginBottom: "1.6rem" }}>
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="case-link"
                  data-cursor="lg"
                >
                  {p.linkLabel} →
                </a>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <CaseMedia p={p} />
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}
