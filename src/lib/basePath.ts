// GitHub Pages serves this site from /pregnancycheck/, but next/image's
// unoptimized <img src> doesn't automatically get that basePath prefix
// applied (unlike JS/CSS asset URLs). Use this helper for any static image
// path passed to next/image or a plain <img> tag.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
