module.exports = function createCSSRule (config, isServer,lang, test, loader, options) {
  const baseRule = config.module.rule(lang).test(test)
  const modulesRule = baseRule.oneOf('modules').resourceQuery(/module/)
  const normalRule = baseRule.oneOf('normal')
  applyLoaders(modulesRule, true)
  applyLoaders(normalRule, false)
  function applyLoaders (rule, modules) {
    rule.use('css-loader')
      .loader('css-loader')
      .options({
        modules,
        localIdentName: `[local]_[hash:base64:8]`,
        importLoaders: 1,
      })
    rule.use('postcss-loader').loader('postcss-loader').options(Object.assign({
      plugins: [require('autoprefixer')],
    }))
    if (loader) {
      rule.use(loader).loader(loader).options(options)
    }
  }
}