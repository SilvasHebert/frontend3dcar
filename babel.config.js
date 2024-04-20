module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@app': './app',
          '@consts': './app/consts',
          '@components': './app/components',
          '@assets': './app/assets',
        },
      },
    ],
  ],
};
