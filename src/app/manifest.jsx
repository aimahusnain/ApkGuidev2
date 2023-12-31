export default function manifest() {
    return {
      name: 'ApkGuide',
      short_name: 'ApkGuide',
      description: 'ApkGuide is a platform where you can download mod apks.',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/android-chrome-512x512',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }