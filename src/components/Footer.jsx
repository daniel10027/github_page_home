import { identity } from "../data/content.js";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <a href="#top" className="brand">
          {identity.name}
          <span className="dot">.</span>
        </a>
        <ul className="footer-links">
          <li>
            <a href={identity.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={identity.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={identity.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`mailto:${identity.email}`}>Email</a>
          </li>
        </ul>
        <div className="footer-copy">© {new Date().getFullYear()} {identity.name}  Abidjan, Côte d'Ivoire</div>
      </div>
    </footer>
  );
}
