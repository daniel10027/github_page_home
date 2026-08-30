import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Grain + vignette + aurora animée lentement */
export function Atmosphere() {
  const reduce = useReducedMotion();
  return (
    <>
      <div className="fx-grain" aria-hidden />
      <div className="fx-vignette" aria-hidden />
      {!reduce && (
        <motion.div
          className="aurora"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        >
          <motion.span
            className="a1"
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="a2"
            animate={{ x: [0, -50, 20, 0], y: [0, 20, 40, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="a3"
            animate={{ x: [0, 30, -40, 0], y: [0, -20, 20, 0], scale: [1, 1.12, 0.95, 1] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </>
  );
}

/* Curseur custom : point + anneau avec inertie, grossit au survol des cibles */
export function Cursor() {
  const reduce = useReducedMotion();
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    document.body.classList.add("has-cursor");

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    let raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const over = (e) => {
      const t = e.target.closest("a, button, [data-cursor], input, .browser, .other-card");
      if (ring.current) ring.current.style.scale = t ? "1.7" : "1";
      if (ring.current) ring.current.style.opacity = t ? "0.5" : "1";
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, [reduce]);

  if (reduce) return null;
  return (
    <>
      <div className="cursor-ring" ref={ring} aria-hidden />
      <div className="cursor-dot" ref={dot} aria-hidden />
    </>
  );
}
