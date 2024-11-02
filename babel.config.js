module.exports = function (api) {
  api.cache.forever(); // Use forever instead of true
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
    env: {
      production: {
        plugins: ["nativewind/babel"]
      }
    }
  };
};
