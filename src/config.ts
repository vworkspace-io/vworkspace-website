export const site = {
  name: "vWorkspace",
  domain: "vworkspace.io",
  url: "https://vworkspace.io",
  tagline: "Your private workspace. Your AI team. Your infrastructure.",
  description:
    "vWorkspace brings files, secure access, business tools, backups, and an AI specialist team together on infrastructure your organization controls.",
};

export const nav: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Product", href: "/product/" },
  { label: "AI Team", href: "/ai-team/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Appliance", href: "/appliance/" },
  { label: "Open Source", href: "/open-source/" },
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
      { label: "AI Team", href: "/ai-team/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Appliance", href: "/appliance/" },
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
    title: "Open source",
    items: [
      { label: "Overview", href: "/open-source/" },
      { label: "vworkspace", href: links.vworkspace, external: true },
      { label: "vworkspace-server", href: links.server, external: true },
      { label: "vworkspace-operator", href: links.operator, external: true },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company/" },
      { label: "Request a pilot", href: links.pilot },
      { label: "Email us", href: links.contact },
      { label: "Governance", href: links.governance, external: true },
      { label: "Security", href: links.security, external: true },
    ],
  },
];
