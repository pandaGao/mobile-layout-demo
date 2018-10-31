const pxToUnit = require('stylus-px-to-relative-unit')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [
          pxToUnit({
            targetUnit: 'vw',
            ignoreThreshold: 0,
            viewportWidth: 375,
            viewportHeight: 667,
            htmlFontSize: 37.5
          })
        ]
      }
    }
  }
}
