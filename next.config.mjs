/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces a fully static site in `out/`.
  // Works on Vercel, Netlify, GitHub Pages, cPanel and any static host.
  output: "export",

  // Static export cannot use the on-demand Image Optimization server,
  // so images are served as-is. (The site currently uses CSS/SVG visuals.)
  images: {
    unoptimized: true,
  },

  // Emit `/about/index.html` style paths — most portable across hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
