export const site = {
  name: "vWorkspace",
  domain: "vworkspace.io",
  url: "https://vworkspace.io",
  tagline: "The private workspace platform for organizations that own their data",
  description:
    "vWorkspace runs your organization's workspace on infrastructure you control — apps, secure networking, backups, and private AI. Deploy it on your own clusters, or get it preinstalled and supported on a ready-to-run appliance.",
};

export const nav = [
  { label: "Solutions", href: "/solutions/" },
  { label: "Platform", href: "/platform/" },
  { label: "AI", href: "/ai/" },
  { label: "Company", href: "/company/" },
  { label: "Docs", href: "https://operator.docs.vworkspace.io/", external: true },
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
      { label: "Solutions", href: "/solutions/" },
      { label: "Platform", href: "/platform/" },
      { label: "Private AI", href: "/ai/" },
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
    title: "Open source",
    items: [
      { label: "vworkspace", href: links.vworkspace, external: true },
      { label: "vworkspace-server", href: links.server, external: true },
      { label: "vworkspace-operator", href: links.operator, external: true },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company/" },
      { label: "Contact", href: links.contact },
      { label: "Governance", href: links.governance, external: true },
      { label: "Security", href: links.security, external: true },
    ],
  },
];
