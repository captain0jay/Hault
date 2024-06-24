module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://hault.xyz/:path*',
          },
        ]
      },
  };