export const site = {
  name: "vWorkspace",
  domain: "vworkspace.io",
  url: "https://vworkspace.io",
  tagline: "Self-hostable control plane for Kubernetes application operations",
  description:
    "vWorkspace installs, upgrades, backs up, and operates applications across Kubernetes clusters — Helm-first, with no inbound ports and no kubeconfig handed to the control plane. Open source, AGPL-3.0.",
};

export const nav = [
  { label: "Platform", href: "/platform/" },
  { label: "Solutions", href: "/solutions/" },
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
      { label: "Platform", href: "/platform/" },
      { label: "Solutions", href: "/solutions/" },
      { label: "Quickstart", href: links.quickstart, external: true },
      { label: "API reference", href: links.apiRef, external: true },
    ],
  },
  {
    title: "Docs",
    items: [
      { label: "Operator docs", href: links.operatorDocs, external: true },
      { label: "Server docs", href: links.serverDocs, external: true },
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
      { label: "Governance", href: links.governance, external: true },
      { label: "Security", href: links.security, external: true },
      { label: "License (AGPL-3.0)", href: links.license, external: true },
    ],
  },
];
