import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { nav, identity } from "../data/content.js";
import { EASE, Magnetic } from "./primitives.jsx";

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 240 && !open);
      last = y;
      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (y >= s.offsetTop - 220) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} aria-hidden />
      <header className={`header ${hidden ? "is-hidden" : ""} ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="wrap nav">
          <a href="#top" className="brand" data-cursor>
            {identity.name}
            <span className="dot">.</span>
          </a>
          <ul className="nav-links">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={active === n.id ? "active" : ""}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <Magnetic href={identity.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost">
              WhatsApp
            </Magnetic>
            <Magnetic href="#contact" className="btn btn-primary">
              Planifier un échange
            </Magnetic>
            <button
              className={`menu-toggle ${open ? "open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {nav.map((n, i) => (
              <motion.a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + i * 0.05, ease: EASE }}
              >
                <span>0{i + 1}</span>
                {n.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
