module.exports = {
  verbose: true,
  replacePrefix: '',
  navigateFallback: '',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'cacheFirst',
    options: {
        cache: {
          maxEntries: 500,
          name: 'gwtapp10-cache'
        }
    }
  }],
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'test/test.nocache.js'
  ]
};
