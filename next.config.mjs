/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Cualquier dominio HTTPS
        },
      ],
    },
  };
  
  export default nextConfig;
  