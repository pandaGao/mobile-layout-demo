function noScaleViewport () {
  let viewportEl = document.querySelector('meta[name="viewport"]')
  let dpr = window.devicePixelRatio || 1
  dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1)
  document.documentElement.setAttribute('data-dpr', dpr)
  let content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
  if (viewportEl) {
    viewportEl.setAttribute('content', content)
  } else {
    viewportEl = document.createElement('meta')
    viewportEl.setAttribute('name', 'viewport')
    viewportEl.setAttribute('content', content)
    document.head.appendChild(viewportEl)
  }
  let innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth
  document.documentElement.style.fontSize = (innerWidth / 10) + 'px'
}

export default noScaleViewport
