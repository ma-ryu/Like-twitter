import Vue from 'vue'
import sanitizeHTML from 'sanitize-html'

sanitizeHTML.defaults.allowedTags.push('h2')
sanitizeHTML.defaults.allowedTags.push('figure')
sanitizeHTML.defaults.allowedTags.push('figcaption')
sanitizeHTML.defaults.allowedTags.push('s')
sanitizeHTML.defaults.allowedTags.push('cite')
sanitizeHTML.defaults.allowedAttributes.a = [
  'id',
  'class',
  'href',
  'target',
  'rel',
]
sanitizeHTML.defaults.allowedAttributes.h2 = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.h3 = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.h4 = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.h5 = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.h6 = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.p = ['id', 'class', 'style']
sanitizeHTML.defaults.allowedAttributes.span = ['id', 'class']
sanitizeHTML.defaults.allowedAttributes.br = ['class']
sanitizeHTML.defaults.allowedAttributes.figure = ['class']
sanitizeHTML.defaults.allowedAttributes.img = [
  'id',
  'class',
  'src',
  'alt',
  'width',
  'height',
]
sanitizeHTML.defaults.allowedAttributes.pre = ['*']
sanitizeHTML.defaults.allowedAttributes.code = ['*']
sanitizeHTML.defaults.allowedAttributes.div = ['id', 'class', 'style']

Vue.prototype.$sanitize = sanitizeHTML
