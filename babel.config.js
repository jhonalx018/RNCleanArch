module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], //  This says the root of your project folder
        // To make your imports look better
        // Insert your whatever name to make alias for the imports
        // In this example I'm using @components to referring the components folder
        // That located inside src folder.
        // Note: You can make a lot of aliases in here
        // AT THE MOMENT OF ADDING A NEW ALIAS, YOU MUST ADD IT TO THE tsconfig.json
        alias: {
          // PRESENTATION
          '@components': './src/presentation/components',
          '@theme': './src/presentation/theme',
          '@assets': './src/presentation/assets',
          '@screens': './src/presentation/screens',
          '@internationalization': './src/presentation/internationalization',
          '@navigation': './src/presentation/navigation',
          // INFRASTRUCTURE
          '@infrastructure': './src/infrastructure',
          '@apiServices': './src/infrastructure/apiServices',
          '@api': './src/infrastructure/api',
          '@axiosInstances': './src/infrastructure/axiosInstances',
          // APLICATION
          '@store': './src/application/store',
          '@hook': './src/application/hook',
          // DOMAIN
          '@abstract': './src/domain/abstract',
          '@customTypes': './src/domain/types',
          '@useCases': './src/domain/useCases',
        },
      },
    ],
    ['module:react-native-dotenv', {moduleName: '@env', path: './.env'}],
  ],
};
