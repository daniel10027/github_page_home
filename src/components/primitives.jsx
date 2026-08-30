import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  animate,
} from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

/* ── Reveal : fondu + montée au scroll ────────────────────────── */
export function Reveal({ children, delay = 0, y = 26, as = "div", className, ...rest }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/* ── Stagger container / item ─────────────────────────────────── */
export const stagger = (gap = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ── Titre de section : eyebrow + h2 + lead ───────────────────── */
export function SectionHead({ n, kicker, title, lead }) {
  return (
    <div className="section-head">
      <Reveal>
        <div className="eyebrow">
          {n}  {kicker}
        </div>
        <h2>{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.08} as="p" className="lead">
          {lead}
        </Reveal>
      )}
    </div>
  );
}

/* ── Texte de titre révélé ligne par ligne (masque + montée) ──── */
export function LinesReveal({ lines, className, start = false }) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className}>
      {lines.map((ln, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            initial={{ y: reduce ? 0 : "110%" }}
            animate={start ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.11 }}
          >
            {ln}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ── Compteur animé (ressort) ─────────────────────────────────── */
export function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix && <span className="plus">{suffix}</span>}
    </span>
  );
}

/* ── Bouton / lien magnétique ─────────────────────────────────── */
export function Magnetic({ children, strength = 0.35, className, as = "a", ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });
  const Tag = motion[as] || motion.a;

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor="lg"
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ── Carte à inclinaison 3D suivant la souris + parallaxe img ── */
export function TiltCard({ children, className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6.5);
    rx.set(-py * 6.5);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* helper : re-export utils Motion */
export { useTransform, useReducedMotion };
