import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in the home folder was making Next treat ~/ as the app root.
  outputFileTracingRoot: path.join(process.cwd()),
  // Phone/LAN preview was stuck on the splash because dev scripts were blocked.
  allowedDevOrigins: ["192.168.1.5"],
  async redirects() {
    return [
      {
        source: "/shop/services",
        destination: "/bundles",
        permanent: false,
      },
      {
        source: "/shop/bat-bundles",
        destination: "/bundles",
        permanent: true,
      },
      {
        source: "/shop/value-bundles",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product/value-bundle-gloves-pads",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product/basic-bat-bundle",
        destination: "/bundles",
        permanent: false,
      },
      {
        source: "/product/performance-bat-bundle",
        destination: "/bundles",
        permanent: false,
      },
      {
        source: "/product/restore-bat-bundle",
        destination: "/bundles",
        permanent: false,
      },
      {
        source: "/product/basic-bat-prep",
        destination: "/bundles",
        permanent: true,
      },
      {
        source: "/product/performance-bat-prep",
        destination: "/bundles",
        permanent: true,
      },
      {
        source: "/product/restore-bat-prep",
        destination: "/bundles",
        permanent: true,
      },
      {
        source: "/product/players-edition-white-pads",
        destination: "/product/players-edition-pads",
        permanent: true,
      },
      {
        source: "/product/players-edition-coloured-pads",
        destination: "/product/players-edition-pads",
        permanent: true,
      },
      {
        source: "/product/za-wk-players-edition-gloves",
        destination: "/product/wicket-keeping-gloves",
        permanent: true,
      },
      {
        source: "/product/za-wk-players-edition-pads",
        destination: "/product/wicket-keeping-pads",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
