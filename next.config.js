module.exports = {
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(','),
    deviceSizes: [160, 320, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256],
  },
};
