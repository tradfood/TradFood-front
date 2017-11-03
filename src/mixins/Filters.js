var marked = require('marked')

module.exports = {
  capitalize: function (value, key) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  compiledMarkdown: function (input) {
    return marked(input, { sanitize: true })
  }
}
