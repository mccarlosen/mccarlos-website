// const PrismicDOM = require('prismic-dom')
// const Elements = PrismicDOM.RichText.Elements

// const linkResolver = require('~/plugins/link-resolver')

export default function (type, element, content, children) {
  if (!children.length) return ''
  /* let result = null
  switch (type) {
    case Elements.paragraph:
      result = '<p class="mb-6">' + children.join('') + '</p>'
      break
    case Elements.heading1:
      result =
        '<h1 class="font-saira font-bold leading-10 text-2xl mb-4">' +
        children.join('') +
        '</h1>'
      break
    case Elements.heading3:
      result =
        '<h3 class="font-saira font-bold leading-10 text-xl mb-2">' +
        children.join('') +
        '</h3>'
      break
    case Elements.list:
      result =
        '<ul class="list-disc list-inside mb-2">' + children.join('') + '</ul>'
      break
    case Elements.hyperlink: {
      const target = element.data.target
        ? `target="${element.data.target}" rel="noopener"`
        : ''
      const linkUrl = PrismicDOM.Link.url(element.data, linkResolver)
      result = `<a class="hover:underline" ${target} href="${linkUrl}">${children.join(
        ''
      )}</a>`
      break
    }
    case Elements.image: {
      result = `<img src="${element.url}" alt="${
        element.alt || ''
      }" copyright="${element.copyright || ''}">`

      if (element.linkTo) {
        const url = PrismicDOM.Link.url(element.linkTo, linkResolver)

        if (element.linkTo.link_type === 'Document') {
          result = `<nuxt-link to="${url}">${result}</nuxt-link>`
        } else {
          const target = element.linkTo.target
            ? `target="${element.linkTo.target}" rel="noopener"`
            : ''
          result = `<a href="${url}" ${target}>${result}</a>`
        }
      }
      const wrapperClassList = [element.label || '', 'block-img']
      result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
      break
    }
    default:
      return null
  } */

  return null
}
