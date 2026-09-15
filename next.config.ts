import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://<owner>.github.io/pregnancycheck/,
// so assets need the /pregnancycheck base path. Local dev and Vercel-style
// root deploys stay unaffected since this only applies when GITHUB_PAGES is set.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "pregnancycheck";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  // next/image's unoptimized <img src> does not automatically get the
  // basePath prefix applied, unlike JS/CSS assets — expose it so
  // components can prefix plain image paths themselves.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
