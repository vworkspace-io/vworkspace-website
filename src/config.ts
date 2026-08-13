export const site = {
  name: "vWorkspace",
  domain: "vworkspace.io",
  url: "https://vworkspace.io",
  tagline: "Your knowledge. Your AI experts. Your workspace.",
  description:
    "A private AI workspace for company knowledge and IT operations, with AI experts that investigate, plan, and wait for your approval before sensitive changes.",
};

export const nav: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Product", href: "/product/" },
  { label: "Knowledge", href: "/knowledge/" },
  { label: "AI Experts", href: "/ai-experts/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Cloud Pilot", href: "/cloud-pilot/" },
];

export const links = {
  github: "https://github.com/vworkspace-io",
  org: "https://github.com/vworkspace-io",
  operator: "https://github.com/vworkspace-io/vworkspace-operator",
  server: "https://github.com/vworkspace-io/vworkspace-server",
  vworkspace: "https://github.com/vworkspace-io/vworkspace",
  operatorDocs: "https://operator.docs.vworkspace.io/",
  serverDocs: "https://server.docs.vworkspace.io/",
  quickstart: "https://operator.docs.vworkspace.io/install/quickstart/",
  apiRef: "https://operator.docs.vworkspace.io/api/",
  contact: "mailto:maintainers@vworkspace.io",
  contactEmail: "maintainers@vworkspace.io",
  pilot: "/pilot/",
  governance:
    "https://github.com/vworkspace-io/vworkspace-operator/blob/main/GOVERNANCE.md",
  security:
    "https://github.com/vworkspace-io/vworkspace-operator/blob/main/SECURITY.md",
  license: "https://github.com/vworkspace-io/vworkspace-operator/blob/main/LICENSE",
  contributing:
    "https://github.com/vworkspace-io/vworkspace-operator/blob/main/CONTRIBUTING.md",
};

export const footerColumns = [
  {
    title: "Product",
    items: [
      { label: "Product", href: "/product/" },
      { label: "Knowledge search", href: "/knowledge/" },
      { label: "AI Experts", href: "/ai-experts/" },
      { label: "NetBird and Access", href: "/netbird-ai/" },
      { label: "Solutions", href: "/solutions/" },
    ],
  },
  {
    title: "Deploy",
    items: [
      { label: "Cloud pilot", href: "/cloud-pilot/" },
      { label: "Appliance", href: "/appliance/" },
      { label: "Open source", href: "/open-source/" },
      { label: "Quickstart", href: links.quickstart, external: true },
    ],
  },
  {
    title: "Docs",
    items: [
      { label: "Operator docs", href: links.operatorDocs, external: true },
      { label: "Server docs", href: links.serverDocs, external: true },
      { label: "API reference", href: links.apiRef, external: true },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company/" },
      { label: "Start a pilot", href: links.pilot },
      { label: "Email us", href: links.contact },
      { label: "Governance", href: links.governance, external: true },
      { label: "Security", href: links.security, external: true },
    ],
  },
];
