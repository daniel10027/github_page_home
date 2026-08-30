// ─────────────────────────────────────────────────────────────
//  Contenu du portfolio  Daniel Guedegbe
//  (une seule source de vérité, consommée par les composants)
// ─────────────────────────────────────────────────────────────

export const identity = {
  name: "Daniel Guedegbe",
  fullName: "Jean Marie Daniel Vianney Guedegbe",
  role: "Ingénieur Logiciel Full Stack Senior",
  location: "Abidjan, Côte d'Ivoire",
  locationFlag: "🇨🇮",
  status: "Disponible  Remote / Hybride / Relocalisation",
  email: "danielguedegbe10027@gmail.com",
  phone: "+225 07 48 73 33 65",
  whatsapp: "https://wa.me/2250748733365",
  github: "https://github.com/daniel10027",
  githubHandle: "daniel10027",
  linkedin: "https://www.linkedin.com/in/daniel-guedegbe/",
  linkedinHandle: "daniel-guedegbe",
  cv: "https://drive.google.com/file/d/1wmdBI65t16h6F3Z9gx1WjW9Bhe41qCjS/view?usp=sharing",
  portfolio: "me.myoctogone.com",
  languages: "Français (natif) · Anglais (professionnel)",
  photo: "/assets/profile.jpg",
};

export const nav = [
  { id: "profil", label: "Profil" },
  { id: "expertise", label: "Expertise" },
  { id: "parcours", label: "Parcours" },
  { id: "travaux", label: "Études de cas" },
  { id: "distinctions", label: "Distinctions" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: 6, suffix: "+", label: "Années d'expérience" },
  { value: 14, suffix: "+", label: "Projets livrés" },
  { value: 8, suffix: "+", label: "Partenaires & clients" },
  { value: 3, suffix: "", label: "Distinctions / hackathons" },
];

export const partners = [
  { name: "Illigo", logo: "/assets/partner_illigo.png" },
  { name: "IIPEA", logo: "/assets/partner_iipea.png" },
  { name: "MINADER", logo: "/assets/partner_minader.png" },
  { name: "CEPICI", logo: "/assets/partner_cepici.png" },
  { name: "OACI", logo: "/assets/partner_oaci.png" },
  { name: "Saas Group", logo: "/assets/partner_saas.png" },
  { name: "Akacias", logo: "/assets/partner_akacias.png" },
  { name: "Innov", logo: "/assets/partner_innov.png" },
];

export const about = {
  heading: "Six années de rigueur, une discipline.",
  lead:
    "Un parcours construit autour d'une conviction simple : la valeur d'un logiciel se mesure à sa capacité à durer, à évoluer et à servir, longtemps après sa livraison.",
  paragraphs: [
    "Depuis plus de six ans, je conçois et je livre des plateformes logicielles qui tiennent leurs promesses en production  pas seulement en démonstration. Basé à Abidjan, au cœur de l'écosystème technologique ouest-africain, j'interviens aujourd'hui comme consultant backend pour Orange Liberia et comme développeur full stack pour Illigo, une plateforme de mobilité intelligente reposant sur une infrastructure IoT complexe.",
    "Mon terrain de jeu, c'est l'architecture : Python, Django et FastAPI côté serveur, Flutter côté mobile, et une attention particulière portée à la Clean Architecture, au Domain-Driven Design et aux principes SOLID. J'aime les systèmes qui survivent à leur créateur  un code lisible, testé, documenté, pensé pour être repris et compris par d'autres équipes.",
    "Avant cela, j'ai dirigé pendant cinq ans le département IT de l'IIPEA, où j'ai piloté plusieurs applications web institutionnelles et encadré une équipe de développeurs. J'ai également construit des systèmes de présence biométrique pour Saas Group, des plateformes de paiement mobile s'appuyant sur l'API MTN Mobile Money, et des outils de cartographie nationale du patrimoine végétal pour le CNRA. En parallèle, j'ai conçu Edone, un ERP scolaire complet primé au Moov Africa CI StartUp Challenge 2025.",
    "Ce qui me motive : transformer des besoins métiers complexes  paiements, logistique, conformité fiscale, e-commerce, gestion d'actifs  en produits numériques fiables, élégants et faciles à maintenir. Je travaille aussi bien en autonomie complète qu'au sein d'équipes pluridisciplinaires, en français comme en anglais.",
  ],
  facts: [
    { k: "Nom complet", v: "Jean Marie Daniel Vianney Guedegbe" },
    { k: "Localisation", v: "Abidjan, Côte d'Ivoire 🇨🇮" },
    { k: "Disponibilité", v: "Disponible remote / hybride", tag: true },
    { k: "Langues", v: "Français (natif) · Anglais (pro.)" },
    { k: "Email", v: "danielguedegbe10027@gmail.com", href: "mailto:danielguedegbe10027@gmail.com" },
    { k: "Téléphone", v: "+225 07 48 73 33 65", href: "https://wa.me/2250748733365" },
    { k: "GitHub", v: "daniel10027", href: "https://github.com/daniel10027" },
    { k: "LinkedIn", v: "daniel-guedegbe", href: "https://www.linkedin.com/in/daniel-guedegbe/" },
  ],
  principles: [
    {
      n: "01",
      title: "Clean Architecture par défaut",
      body:
        "Séparer les règles métier de l'infrastructure dès le premier commit, pour que chaque évolution future coûte le minimum en temps, en risque, en argent.",
    },
    {
      n: "02",
      title: "Le test avant la promesse",
      body:
        "Une fonctionnalité n'est terminée que lorsqu'elle est testée, documentée et reproductible. La rigueur n'est pas une option, c'est la base du métier.",
    },
    {
      n: "03",
      title: "Conçu pour l'Afrique, prêt pour le monde",
      body:
        "Connectivité variable, paiements mobiles, contraintes locales : je conçois pour les réalités du terrain, avec des standards d'exigence internationaux.",
    },
  ],
};

export const expertise = [
  {
    num: "01",
    title: "Architecture Backend & APIs",
    body:
      "Conception d'architectures Django / DRF / FastAPI robustes, d'APIs RESTful sécurisées, documentées et pensées pour l'échelle.",
    tags: ["Django", "DRF", "FastAPI", "REST"],
  },
  {
    num: "02",
    title: "Plateformes Web",
    body:
      "Applications web modernes avec Next.js ou Angular  interfaces réactives, performantes et optimisées pour le référencement.",
    tags: ["Next.js", "Angular", "SEO", "UI/UX"],
  },
  {
    num: "03",
    title: "Applications Mobiles",
    body:
      "Applications iOS / Android multiplateformes avec Flutter : notifications push, géolocalisation, paiements intégrés.",
    tags: ["Flutter", "Firebase", "MoMo API"],
  },
  {
    num: "04",
    title: "Infrastructure & DevOps",
    body:
      "Conteneurisation, pipelines CI/CD et déploiements sécurisés de la machine de développement à la production.",
    tags: ["Docker", "Nginx", "Ansible", "GitLab CI"],
  },
  {
    num: "05",
    title: "Temps réel & automatisation",
    body:
      "Traitements asynchrones, files d'attente et flux temps réel pour des systèmes réactifs et résilients.",
    tags: ["Celery", "Redis", "MQTT", "WebSockets"],
  },
  {
    num: "06",
    title: "Conseil en architecture",
    body:
      "Audits de code, modélisation de bases de données, refactoring et mentorat d'équipes techniques.",
    tags: ["DDD", "Clean Architecture", "TDD"],
  },
];

export const experience = [
  {
    period: "Nov. 2025  Août 2026 · 10 mois",
    company: "Espoir Collectif",
    loc: "Paris, France (Hybride)",
    role: "Tech Lead  Applications & Digital Solutions",
    points: [
      "Direction de la stratégie technique et de l'architecture des applications web et mobiles au service de programmes sociaux et éducatifs à fort impact, en France et en Afrique.",
      "Définition des standards d'ingénierie, des critères de qualité de code et des bonnes pratiques adoptés par l'ensemble de l'équipe.",
      "Traduction des besoins métiers et sociaux en solutions numériques fiables et scalables, avec des parties prenantes non techniques.",
      "Formation et mentorat d'ingénieurs et d'apprenants pour renforcer la capacité technique de l'équipe.",
    ],
    tech: ["Tech Leadership", "Architecture logicielle", "Django", "Flutter", "Mentorat", "Stratégie digitale"],
  },
  {
    period: "Sept. 2025  Présent",
    company: "Orange Liberia",
    loc: "Abidjan (Remote)",
    role: "Backend Developer",
    points: [
      "Conception et développement de microservices Python / Flask pour des systèmes critiques télécoms, garantissant haute disponibilité et sécurité.",
      "Construction d'APIs REST robustes et scalables, assurant l'interopérabilité avec des applications internes, des plateformes financières et des systèmes inter-opérateurs.",
      "Optimisation des bases de données SQL Server & NoSQL : indexation, tuning de requêtes et monitoring des performances.",
      "Déploiement et automatisation de l'infrastructure via Docker et Ansible, pipelines CI/CD GitLab.",
      "Personnalisation de modules Odoo pour la facturation, le CRM et les opérations métiers.",
    ],
    tech: ["Python", "Flask", "Odoo", "SQL Server", "Docker", "Ansible", "GitLab CI/CD"],
  },
  {
    period: "Mai 2025  Présent",
    company: "Illigo",
    loc: "Abidjan (Hybride)",
    role: "Développeur Backend  Mobilité Intelligente",
    points: [
      "Développement et maintenance d'un backend modulaire Python / Django / DRF structuré selon la Clean Architecture pour une plateforme de mobilité intelligente.",
      "Intégration avec une infrastructure IoT complexe (stations, véhicules, badges, chargeurs) via MQTT, REST et WebSocket.",
      "Implémentation du tracking GPS temps réel, du contrôle à distance des véhicules et de la télémétrie live via Firebase et WebSockets.",
      "Rédaction de tests automatisés et revues de code, en collaboration étroite avec les équipes produit et frontend.",
    ],
    tech: ["Django", "DRF", "MQTT", "PostgreSQL", "Celery", "Redis", "Firebase", "Flutter"],
  },
  {
    period: "Juin 2020  Mai 2025",
    company: "IIPEA",
    loc: "Abidjan, Côte d'Ivoire",
    role: "Lead Développeur Full Stack & Responsable IT",
    points: [
      "Pilotage du cycle complet de développement logiciel  de la conception à la production  pour plusieurs applications web institutionnelles en Python / Django.",
      "Management et encadrement d'une équipe de développeurs : guidance technique, assurance qualité et respect des délais.",
      "Mise en place de standards de qualité logicielle : revues de code, tests automatisés et documentation technique.",
      "Collaboration avec les équipes frontend pour garantir une intégration API fluide et une expérience utilisateur optimale.",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Flutter", "Firebase", "Git"],
  },
  {
    period: "Mars 2022  Avr. 2023",
    company: "Saas Group",
    loc: "Côte d'Ivoire (Remote)",
    role: "Développeur Backend Python / Django",
    points: [
      "Conception et développement de la plateforme RH Sentinelle : gestion des présences avec RFID, QR codes, reconnaissance faciale et biométrie digitale.",
      "Développement de notifications push temps réel, géolocalisation, gestion des ressources et modules de reporting personnalisés.",
      "Modélisation du schéma PostgreSQL pour la scalabilité, Redis pour le cache et Django Channels pour les données live.",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "Django Channels", "OpenCV", "Docker"],
  },
  {
    period: "Mars 2021  Janv. 2022",
    company: "SIEFTP / Tropic BTP",
    loc: "Côte d'Ivoire (Remote)",
    role: "Développeur Mobile & Backend",
    points: [
      "Développement d'APIs backend en Django / DRF et d'applications mobiles multiplateformes avec Flutter pour plusieurs projets clients.",
      "Réalisation d'une application de pointage et de suivi de chantier avec géolocalisation, suivi du temps de travail et génération automatisée de rapports.",
      "Gestion complète de la base de données : conception du schéma, optimisation des requêtes et stratégies de sauvegarde.",
    ],
    tech: ["Django", "DRF", "Flutter", "PostgreSQL", "Firebase"],
  },
];

export const skills = [
  { n: "01", title: "Langages", tags: ["Python", "JavaScript (ES6+)", "Dart", "SQL", "Bash"] },
  {
    n: "02",
    title: "Frameworks & Librairies",
    tags: ["Django", "DRF", "FastAPI", "Flask", "Next.js", "Angular", "Flutter"],
  },
  { n: "03", title: "Données & Stockage", tags: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis"] },
  {
    n: "04",
    title: "Infrastructure & DevOps",
    tags: ["Docker", "Docker Compose", "Nginx", "Gunicorn", "DigitalOcean", "Heroku", "GitHub Actions", "GitLab CI/CD", "Ansible"],
  },
  { n: "05", title: "Temps réel & asynchrone", tags: ["Celery", "Redis", "MQTT", "WebSockets", "Django Channels"] },
  {
    n: "06",
    title: "Architecture & Méthodes",
    tags: ["Clean Architecture", "DDD", "Microservices", "MVC / MVT", "REST", "TDD", "SCRUM"],
  },
  {
    n: "07",
    title: "Outils & spécialités",
    tags: ["Postman", "VS Code", "PyCharm", "OpenCV", "Firebase", "Odoo", "RFID / Biométrie", "Git"],
    wide: true,
  },
];

export const projects = [
  {
    index: "01",
    kicker: "Facturation électronique",
    title: "FNE Ivoire  Facturation Normalisée Électronique",
    desc:
      "Plateforme SaaS répondant à l'obligation de Facturation Normalisée Électronique instaurée par la Direction Générale des Impôts ivoirienne en 2025 : générer, signer et transmettre les factures en temps réel à l'administration fiscale. Architecture Django + Celery pour le traitement asynchrone des volumes, API REST documentée pour l'intégration aux ERP clients.",
    tags: ["Django", "Celery", "PostgreSQL", "REST API", "SaaS multi-tenant"],
    image: "/assets/proj_fne.png",
    href: "https://fne.myoctogone.com/",
    linkLabel: "Voir le projet",
  },
  {
    index: "02",
    kicker: "Données financières",
    title: "XOFA  Marchés boursiers UEMOA en temps réel",
    desc:
      "Anciennement BRVM Analytics. Plateforme d'analyse pour la Bourse Régionale des Valeurs Mobilières de l'UEMOA : agrégation des cours, volumes et indices des sociétés cotées dans huit pays d'Afrique de l'Ouest. Le backend Django collecte, normalise et expose les données via une API REST, avec un cache Redis pour des temps de réponse temps réel.",
    tags: ["Django", "PostgreSQL", "REST API", "Redis", "Fintech"],
    image: "/assets/proj_xofa.png",
    href: "https://xofa.myoctogone.com/",
    linkLabel: "Voir le projet",
  },
  {
    index: "03",
    kicker: "Outillage open-source",
    title: "Wave Business API SDK",
    desc:
      "Kit de développement Python publié sur PyPI permettant d'intégrer les paiements, payouts et webhooks de Wave Business en quelques lignes. Sécurité des échanges garantie par une signature HMAC-SHA256 systématique, documentation complète et tests automatisés.",
    tags: ["Python", "PyPI", "REST API", "HMAC-SHA256", "Tests automatisés"],
    image: "/assets/proj_wave.png",
    href: "https://github.com/daniel10027/wave-business-api",
    linkLabel: "Voir le dépôt",
  },
  {
    index: "04",
    kicker: "Cartographie & SIG",
    title: "PandaTree  Patrimoine végétal national",
    desc:
      "Développée avec le Centre National de Recherche Agronomique (CNRA), plateforme de recensement et de cartographie du patrimoine arboricole ivoirien. Backend Django / DRF, application mobile Flutter pour la collecte terrain, outils SIG pour la visualisation géospatiale des essences recensées.",
    tags: ["Django", "DRF", "Flutter", "SIG / Cartographie", "PostgreSQL"],
    image: "/assets/proj_pandatree.jpg",
    href: "https://github.com/daniel10027/PandaTree/",
    linkLabel: "Voir le dépôt",
  },
  {
    index: "05",
    kicker: "ERP éducatif",
    title: "Edone  ERP scolaire nouvelle génération",
    desc:
      "Système de gestion scolaire complet couvrant l'intégralité du cycle académique, administratif et financier : inscriptions, emplois du temps, notes, facturation et communication avec les familles. Déployé en phase pilote dans quatre établissements.",
    tags: ["Django", "DRF", "Flutter", "PostgreSQL", "Web / Android / iOS"],
    award: "1er Prix Moov Africa CI StartUp Challenge 2025",
    image: "/assets/proj_edone.png",
    href: "https://github.com/daniel10027",
    linkLabel: "Voir le profil GitHub",
  },
  {
    index: "06",
    kicker: "Mobilité & covoiturage",
    title: "AlloCar  Covoiturage intelligent",
    desc:
      "Plateforme de covoiturage pensée pour les contraintes locales : connectivité variable, paiements mobiles, itinéraires informels. Backend Flask exposant une API consommée par une application Flutter et une interface web Angular, avec géolocalisation et mise en relation conducteur / passager en temps réel.",
    tags: ["Flask", "Angular", "Flutter", "PostgreSQL", "Géolocalisation"],
    image: "/assets/proj_allocar.jpg",
    href: "https://allocar.app",
    linkLabel: "Voir le projet",
  },
  {
    index: "07",
    kicker: "E-commerce alimentaire",
    title: "Spaghetti d'Abidjan  Livraison de repas locaux",
    desc:
      "Plateforme de commande et de livraison de plats ivoiriens authentiques  attiéké, garba, alloco, sauces mijotées. Catalogue dynamique par catégories, filtres par budget et par profil (épicé, végétal, promotions) et tunnel de commande fluide du choix du plat à la livraison.",
    tags: ["E-commerce", "Catalogue produits", "Panier & commande", "UI/UX"],
    image: "/assets/proj_spaghetti.jpg",
    href: "https://spaguettidabidjan.com/",
    linkLabel: "Voir le projet",
  },
  {
    index: "08",
    kicker: "E-commerce sportif",
    title: "Sportif Africa  Équipements sportifs en ligne",
    desc:
      "Boutique en ligne dédiée aux clubs, académies et athlètes de Côte d'Ivoire : ballons, crampons, chasubles, matériel médical et accessoires d'entraînement. Ventes flash avec compte à rebours, catalogue segmenté et paiement mobile sécurisé via Wave, livraison à Abidjan et retrait en boutique.",
    tags: ["E-commerce", "Ventes flash", "Paiement Wave", "Catalogue produits"],
    image: "/assets/proj_sportif-africa.png",
    href: "https://sportifafrica.com/",
    linkLabel: "Voir le projet",
  },
];

export const otherWork = [
  {
    tag: "ERP / Gestion",
    title: "OS-IRIS",
    body: "ERP complet pour la gestion des stocks, des ventes et de la comptabilité commerciale, conçu pour des PME ivoiriennes.",
    tech: ["Django", "PostgreSQL", "Stock"],
    image: "/assets/proj_osiris.jpg",
  },
  {
    tag: "RH / Biométrie",
    title: "Sentinelle RH",
    body: "Système de gestion des présences par RFID, QR codes et reconnaissance faciale, avec données live via Django Channels.",
    tech: ["Django", "OpenCV", "Redis", "Channels"],
    image: "/assets/proj_sentinelle.jpg",
  },
  {
    tag: "Fintech / Mobile",
    title: "MomoFund",
    body: "Plateforme de crowdfunding via l'API MTN Mobile Money  2ᵉ place au Hackathon MTN MTS Côte d'Ivoire 2024.",
    tech: ["Flutter", "MTN MoMo API"],
    image: "/assets/proj_momofund.jpg",
  },
  {
    tag: "Productivité",
    title: "TimesTrackers",
    body: "Suivi du temps de travail et gestion de projets pour équipes distribuées, avec rapports automatisés.",
    tech: ["Django", "Flutter"],
    image: "/assets/proj_timestracker.png",
  },
  {
    tag: "Immobilier",
    title: "Ma Resie",
    body: "Plateforme de mise en relation immobilière, interface Next.js connectée à une API Django.",
    tech: ["Next.js", "Django"],
    image: "/assets/proj_maresie.jpg",
  },
  {
    tag: "Agritech / Spatial",
    title: "TraceAgriChain",
    body: "Traçabilité agricole combinant blockchain, imagerie satellite et cartographie 3D  Finaliste MASS / ICESCO 2025.",
    tech: ["Blockchain", "Satellite", "3D Mapping"],
    image: "/assets/proj_trace-agri-chain.jpg",
  },
];

export const awards = [
  {
    date: "Déc. 2025",
    title: "1er Prix Moov Africa CI StartUp Challenge 2025",
    body:
      "Remporté avec Edone  ERP éducatif multiplateforme (Web, Android, iOS) pour la gestion académique, administrative et financière, validé par une phase pilote sur quatre établissements.",
    rank: "Vainqueur",
  },
  {
    date: "Mai 2025",
    title: "Finaliste  MASS Solutions Spatiales Africaines (ICESCO)",
    body:
      "Présentation de TraceAgriChain  solution combinant blockchain, imagerie satellite et cartographie 3D pour la traçabilité complète des matières premières agricoles, de la production à l'exportation.",
    rank: "Finaliste",
  },
  {
    date: "Janv. 2024",
    title: "2ᵉ Place  Hackathon MTN MTS Côte d'Ivoire",
    body:
      "Développement de MomoFund  plateforme de crowdfunding Mobile Money permettant le financement collaboratif de projets via l'API MTN MoMo, accessible à tous.",
    rank: "2ᵉ place",
  },
];

export const education = {
  degrees: [
    { title: "Master of Science in Computer Science: Software Engineering", sub: "Wolf University / GoMyCode", year: "2025" },
    { title: "Master en Informatique  Génie Logiciel", sub: "IIPEA  Institut International Polytechnique des Élites d'Abidjan", year: "2023" },
    { title: "Master en Big Data Analytics", sub: "Université Virtuelle de Côte d'Ivoire  soutenance en cours", year: "2023" },
    { title: "Licence en Bases de Données", sub: "Université Virtuelle de Côte d'Ivoire", year: "2020" },
    { title: "Baccalauréat Scientifique  Série C", sub: "Lycée Municipal de Port-Bouët", year: "2017" },
  ],
  certifications: [
    { title: "Python for Data Science", sub: "IBM" },
    { title: "Big Data Analysis", sub: "IBM" },
    { title: "Machine Learning & Data Visualization with Python", sub: "IBM" },
    { title: "Microsoft Technologies Association Programming", sub: "Microsoft" },
    { title: "ITIL® Foundation in IT Service Management", sub: "AXELOS" },
    { title: "Administrateur de Bases de Données", sub: "NaN  Not A Number CI" },
    { title: "Planification de projet informatisé & suivi opérationnel", sub: "MDS Canada" },
  ],
};

export const testimonials = [
  {
    quote:
      "Daniel a conçu pour nous une plateforme académique sur mesure, fiable et facile à utiliser. Son expertise backend a permis d'automatiser des processus complexes qui occupaient auparavant plusieurs personnes.",
    name: "Jean Kouassi",
    role: "Directeur IT  Groupe École Sup",
    initials: "JK",
  },
  {
    quote:
      "Sa capacité à comprendre nos besoins et à livrer dans les délais a été remarquable. Le projet a été mené avec un haut niveau d'exigence, de la spécification jusqu'au déploiement.",
    name: "Yao N'Dri",
    role: "CTO  Saas Group Côte d'Ivoire",
    initials: "YN",
  },
  {
    quote:
      "Professionnel, réactif et force de proposition. Il a transformé notre idée en une application performante, sécurisée et évolutive, en restant disponible bien après la livraison.",
    name: "Nadine Koné",
    role: "Cheffe de projet  ONASUR",
    initials: "NK",
  },
  {
    quote:
      "L'architecture mise en place est solide : elle supporte aujourd'hui des centaines d'utilisateurs sur notre marketplace agricole, sans incident majeur depuis le lancement.",
    name: "Kouadio Alain",
    role: "Responsable Digital  MINADER",
    initials: "KA",
  },
];

export const calLink = "jean-marie-daniel-vianney-guedegbe-qfjxgu/30min";
