import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { identity, heroStats } from "../data/content.js";
import { EASE, Counter, Magnetic } from "./primitives.jsx";

const TITLE_LINES = [
  "Des fondations",
  "logicielles solides",
  "pour les ambitions",
  "numériques de l'Afrique.",
];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.09]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -55]);

  // délai de base : laisse le preloader glisser d'abord
  const base = reduce ? 0 : 1.9;

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="wrap hero-grid">
        <motion.div style={{ y: textY }}>
          <motion.div
            className="status-pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base, ease: EASE }}
          >
            <span className="status-dot" />
            {identity.status}
          </motion.div>

          <h1 className="hero-title">
            {TITLE_LINES.map((ln, i) => (
              <span className="line-mask" key={i}>
                <motion.span
                  initial={{ y: reduce ? 0 : "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: base + 0.1 + i * 0.11 }}
                >
                  {ln}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.6, ease: EASE }}
          >
            Je suis <strong>{identity.name}</strong>  {identity.role} basé à Abidjan. Depuis
            plus de six ans, je conçois des architectures backend Python / Django, des APIs critiques
            et des applications Flutter pour des plateformes fintech, des ERP et des produits SaaS
            aujourd'hui en production.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: base + 0.72, ease: EASE }}
          >
            <Magnetic href="#travaux" className="btn btn-primary">
              Consulter les études de cas
            </Magnetic>
            <Magnetic href={identity.cv} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Télécharger le CV
            </Magnetic>
            <Magnetic href="#contact" className="btn btn-line" strength={0.2}>
              Démarrer un projet →
            </Magnetic>
          </motion.div>

          <motion.div
            className="ledger-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: base + 0.9, duration: 0.8 }}
          >
            {heroStats.map((s) => (
              <div className="ledger-item" key={s.label}>
                <div className="ledger-num">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="ledger-label">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="hero-scroll">
            <span className="rail" />
            Défiler
          </div>
        </motion.div>

        <motion.div
          className="hero-photo"
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 1.2, duration: 1, ease: EASE }}
        >
          <span className="frame-tag">FULL&nbsp;STACK&nbsp;·&nbsp;ABIDJAN</span>
          <motion.img
            src={identity.photo}
            alt="Portrait de Daniel Guedegbe"
            style={{ scale: photoScale }}
            loading="eager"
          />
          <span className="badge">
            <span className="status-dot" />
            Ouvert aux missions
          </span>
        </motion.div>
      </div>
    </section>
  );
}
