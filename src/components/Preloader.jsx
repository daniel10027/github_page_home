import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./primitives.jsx";

const WORDS = ["DANIEL", "GUEDEGBE"];

export function Preloader({ onDone }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const begin = () => {
      if (fired.current) return;
      fired.current = true;
      setCount(100);
      onDone(); // le contenu peut démarrer son intro
      setLeaving(true); // le rideau glisse (transition CSS)
      setTimeout(() => setGone(true), 900); // puis on démonte
    };

    if (reduce) {
      begin();
      return;
    }

    const total = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min((now - start) / total, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const t = setTimeout(begin, total + 220);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  if (gone) return null;

  return (
    <div className={`preloader ${leaving ? "is-leaving" : ""}`} aria-hidden={leaving}>
      <div className="preloader__name" aria-label="Daniel Guedegbe">
        {WORDS.map((w, wi) => (
          <span className="word-mask" key={wi}>
            <motion.span
              initial={{ y: reduce ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 + wi * 0.12 }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </div>
      <div className="preloader__bar">
        <i style={{ transform: `scaleX(${count / 100})` }} />
      </div>
      <div className="preloader__count">{String(count).padStart(3, "0")}</div>
    </div>
  );
}
