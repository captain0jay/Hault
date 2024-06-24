module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://www.hault.xyz/:path*',
          },
        ]
      },
  };