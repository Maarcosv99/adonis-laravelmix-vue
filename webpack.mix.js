const mix = require('laravel-mix')
const path = require('path')

mix.setPublicPath('public')

mix
  .ts('vue/main.ts', path.resolve(__dirname, 'public/js'))
  .sass('resources/assets/scss/app.scss', path.resolve(__dirname, 'public/css'))
  .webpackConfig({
    context: __dirname,
    node: {
      __filename: true,
      __dirname: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/vue'),
        '~': path.resolve(__dirname, 'resources/vue'),
        '@sass': path.resolve(__dirname, 'resources/assets/sass'),
      },
    },
  })
  .options({
    processCssUrls: false,
  })
  .vue()
