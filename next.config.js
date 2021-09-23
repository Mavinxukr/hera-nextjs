module.exports = {
  images: {
		domains: ['hera.mavinx.com', 'https://loading.io']
	},
  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    return config;
  },
};