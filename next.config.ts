import type {NextConfig} from 'next';

// GitHub Pages serves this repo as a project site:
//   https://erkuldeepkushwah.github.io/brivora.ai/
// The base path is injected by the deploy workflow via BASE_PATH so that other
// targets (local dev, Vercel, etc.) keep serving from the root.
const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Static HTML export — GitHub Pages has no Node runtime to run `next start`.
  output: 'export',
  basePath,
  // Required with `output: 'export'` (the default image optimizer needs a server).
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
