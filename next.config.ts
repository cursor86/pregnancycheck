import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://<owner>.github.io/pregnancycheck/,
// so assets need the /pregnancycheck base path. Local dev and Vercel-style
// root deploys stay unaffected since this only applies when GITHUB_PAGES is set.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "pregnancycheck";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
