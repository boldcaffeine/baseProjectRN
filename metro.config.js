const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

// Step 1: Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Step 2: Define your custom configuration options
const customConfig = {
  // Your custom Metro configuration options here
};

// Step 3: Merge the default and custom configurations
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Step 4: Wrap the merged configuration with Reanimated's Metro config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
