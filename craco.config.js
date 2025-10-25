module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        // Remove CSS minimizer plugin to avoid minification errors
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
          minimizer => minimizer.constructor.name !== 'CssMinimizerPlugin'
        );
      }
      return webpackConfig;
    }
  }
};