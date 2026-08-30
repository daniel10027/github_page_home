import { motion } from "framer-motion";
import {
  about,
  expertise,
  experience,
  skills,
  otherWork,
  awards,
  education,
  testimonials,
  identity,
} from "../data/content.js";
import { EASE, SectionHead, Reveal, stagger, fadeUp } from "./primitives.jsx";

/* ═══ PROFIL ═══ */
export function About() {
  return (
    <section id="profil" className="section divider-top">
      <div className="wrap">
        <SectionHead n="01" kicker="Profil" title={about.heading} lead={about.lead} />
        <div className="profil-grid">
          <Reveal>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="facts">
            <h4>Fiche d'identité</h4>
            {about.facts.map((f) => (
              <div className="fact-row" key={f.k}>
                <span>{f.k}</span>
                <span className={f.tag ? "tag-ok" : ""}>
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noreferrer">
                      {f.v}
                    </a>
                  ) : (
                    <>
                      {f.tag && "● "}
                      {f.v}
                    </>
                  )}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
        <motion.div
          className="principles"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {about.principles.map((pr) => (
            <motion.div className="principle" key={pr.n} variants={fadeUp}>
              <div className="pn">PRINCIPE {pr.n}</div>
              <h3>{pr.title}</h3>
              <p>{pr.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ EXPERTISE ═══ */
export function Expertise() {
  return (
    <section id="expertise" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="02"
          kicker="Expertise"
          title="Domaines d'intervention"
          lead="Six pôles de compétences, mobilisés indépendamment ou combinés, selon la nature et la maturité de votre projet."
        />
        <motion.div
          className="practice-grid"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {expertise.map((e) => (
            <motion.div className="practice-card" key={e.num} variants={fadeUp}>
              <div className="pc-num">{e.num} / 06</div>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <div className="chips">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ PARCOURS ═══ */
export function Experience() {
  return (
    <section id="parcours" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="03"
          kicker="Parcours"
          title="Expériences professionnelles"
          lead="Six engagements, du leadership technique pour l'impact social au conseil pour de grands groupes télécoms."
        />
        <div className="timeline">
          {experience.map((x) => (
            <Reveal className="tl-row" key={x.company + x.period}>
              <div className="tl-meta">
                <div className="tl-period">{x.period}</div>
                <div className="tl-company">{x.company}</div>
                <div className="tl-loc">{x.loc}</div>
              </div>
              <div>
                <div className="tl-role">{x.role}</div>
                <ul>
                  {x.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="chips">
                  {x.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ COMPÉTENCES ═══ */
export function Skills() {
  return (
    <section id="competences" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="04"
          kicker="Compétences"
          title="Le bilan technique"
          lead="Un inventaire structuré des langages, frameworks et outils mobilisés au quotidien  classés comme les postes d'un bilan."
        />
        <motion.div
          className="assets-grid"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skills.map((s) => (
            <motion.div className={`asset-row ${s.wide ? "wide" : ""}`} key={s.n} variants={fadeUp}>
              <div className="asset-head">
                <span className="an">ACTIF {s.n}</span>
                <h3>{s.title}</h3>
              </div>
              <div className="chips">
                {s.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ AUTRES RÉALISATIONS ═══ */
export function OtherWork() {
  return (
    <section id="autres" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="06"
          kicker="Portefeuille"
          title="Autres réalisations"
          lead="Une sélection de projets complémentaires, livrés pour des clients en Côte d'Ivoire et à l'international."
        />
        <motion.div
          className="grid-others"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {otherWork.map((o) => (
            <motion.article className="other-card" key={o.title} variants={fadeUp} data-cursor>
              <div className={`oc-shot ${o.image ? "" : "empty"}`}>
                {o.image ? <img src={o.image} alt={o.title} loading="lazy" /> : <span>{o.title}</span>}
              </div>
              <div className="oc-body">
                <div className="oc-tag">{o.tag}</div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <div className="mini-chips">
                  {o.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ DISTINCTIONS ═══ */
export function Awards() {
  return (
    <section id="distinctions" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="07"
          kicker="Distinctions"
          title="Reconnaissance & récompenses"
          lead="Trois compétitions, trois finalités différentes  éducation, espace & agriculture, finance mobile."
        />
        <div className="awards">
          {awards.map((a) => (
            <Reveal className="award-row" key={a.title}>
              <div className="ar-date">{a.date}</div>
              <div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
              <div className="ar-rank">{a.rank}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FORMATION ═══ */
export function Education() {
  return (
    <section id="formation" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="08"
          kicker="Formation"
          title="Formation & certifications"
          lead="Un socle académique en génie logiciel et big data, complété par des certifications professionnelles ciblées."
        />
        <div className="edu-grid">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Diplômes
            </div>
            <ul className="edu-list">
              {education.degrees.map((d) => (
                <li key={d.title}>
                  <div>
                    <span className="e-title">{d.title}</span>
                    <span className="e-sub">{d.sub}</span>
                  </div>
                  <span className="e-year">{d.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
              Certifications
            </div>
            <ul className="edu-list">
              {education.certifications.map((c) => (
                <li key={c.title}>
                  <div>
                    <span className="e-title">{c.title}</span>
                    <span className="e-sub">{c.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ TÉMOIGNAGES ═══ */
export function Testimonials() {
  return (
    <section id="temoignages" className="section divider-top">
      <div className="wrap">
        <SectionHead
          n="09"
          kicker="Témoignages"
          title="Ce qu'en disent les clients"
          lead="Quelques retours de directions techniques et de chefs de projet ayant collaboré sur ces réalisations."
        />
        <motion.div
          className="testi-grid"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t) => (
            <motion.figure className="testi-card" key={t.name} variants={fadeUp}>
              <span className="tq">“</span>
              <p>{t.quote}</p>
              <figcaption className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
export function CTA() {
  return (
    <section className="section cta divider-top">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Prochaine étape
          </div>
          <h2>Prêt à construire la prochaine étape de votre produit numérique ?</h2>
          <p>
            Que vous ayez besoin d'une architecture backend solide, d'une application mobile ou d'un
            audit technique, je vous réponds généralement sous 24 heures.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary" data-cursor="lg">
              Planifier un appel
            </a>
            <a
              href={identity.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              data-cursor="lg"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
