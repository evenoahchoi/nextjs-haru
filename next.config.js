/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        { hostname: 'www.notion.so' },
        { hostname: 'images.unsplash.com' },
        { hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com' },
        { hostname: 'amazonaws.com' },
        { hostname: 's3.us-west-2.amazonaws.com' },
        { hostname: 'us-west-2.amazonaws.com' },
        { hostname: 'i.ibb.co' },
        { hostname: 'i.postimg.cc' },
        { hostname: 'postimg.cc' },
        { hostname: 'googleusercontent.com' },
        { hostname: 'lh3.googleusercontent.com' },
        { hostname: 'postfiles.pstatic.net' },
        { hostname: 'blogfiles.pstatic.net' },
      ],
    },
  }
  
  module.exports = nextConfig;