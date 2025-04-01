const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    projectRoot: __dirname,
    watchFolders: [__dirname + "/src"], // Make Metro watch src folder
    resolver: {
        sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx', 'cjs'], // Ensure correct file types
    },
};

module.exports = mergeConfig(defaultConfig, config);
