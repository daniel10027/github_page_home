import { motion, useReducedMotion } from "framer-motion";
import { partners } from "../data/content.js";

export function Marquee() {
  const reduce = useReducedMotion();
  const row = [...partners, ...partners];
  return (
    <div className="marquee">
      <div className="marquee__label">Ils m'ont fait confiance</div>
      <div className="marquee__fade l" />
      <div className="marquee__fade r" />
      <motion.div
        className="marquee__track"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        style={reduce ? { flexWrap: "wrap", justifyContent: "center", width: "100%" } : {}}
      >
        {row.map((p, i) => (
          <img key={i} src={p.logo} alt={p.name} loading="lazy" />
        ))}
      </motion.div>
    </div>
  );
}
