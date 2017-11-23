var marked = require('marked')

module.exports = {
  capitalize: function (value, key) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  compiledMarkdown: function (input) {
    return marked(input, { sanitize: true })
  },
  recipeDescription: function (input) {
    let s = input.split(' ')
    let l = 100
    let r = ''
    for (let i = 0; i < s.length; i++) {
      if (r.length < l) {
        r += (' ' + s[i])
      }
    }
    r += '...'
    return r
  },
  formatUrl: function (input) {
    return 'https://tradfood.fr/' + input
  }
}
