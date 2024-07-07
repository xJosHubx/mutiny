/** @type {import('next').NextConfig} */
/* const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig; */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://uploadthing.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
