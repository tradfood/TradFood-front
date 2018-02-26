var marked = require('marked')

module.exports = {
  capitalize (value, key) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  compiledMarkdown (input) {
    return marked(input, { sanitize: true })
  },
  recipeDescription (input) {
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
  formatUrl (input) {
    return 'https://tradfood.fr/' + input
  }
}
