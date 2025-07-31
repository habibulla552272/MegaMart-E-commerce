const nextConfig = {
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'storage.googleapis.com', // for fakestoreapi.in
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com', // for dummyjson.com (older domain)
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com', // ✅ NEW - for latest dummyjson images
      },
    ],
  },
};

module.exports = nextConfig;
