import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      
      { protocol: "https", 
        hostname: "images.unsplash.com" 
      },
      { protocol: "https", 
        hostname: "www.google.com",
        port: "",
        pathname:"/**" 

      },

      { protocol: "https", 
        hostname: "drive.google.com" 
      },
      { protocol: "https", 
        hostname: "ok.ok.com" 
      },
    ]
  }
};

export default nextConfig;
