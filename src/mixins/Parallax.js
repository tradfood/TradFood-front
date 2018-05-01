export default class Parallax {

  init () {
    this.els = []
    this.els = document.querySelectorAll('[data-parallax]')
    this.scrollHandler()
    document.addEventListener('scroll', evt => this.scrollHandler(evt))
    window.addEventListener('resize', evt => this.scrollHandler(evt))
  }

  scrollHandler () {
    for (var i = 0; i < this.els.length; i++) {
      var el = this.els[i]
      var factor = parseInt(el.getAttribute('data-parallax')) || 1

      var elRect = el.getBoundingClientRect()

      var percent = Math.round((elRect.top + el.offsetHeight) / (window.innerHeight + el.offsetHeight) * 100)
      percent = Math.max(0, Math.min(100, percent))

      var translation = Math.round(factor * (percent - 50))

      el.style.transform = 'translateY(' + translation + 'px)'
    }
  }
}
