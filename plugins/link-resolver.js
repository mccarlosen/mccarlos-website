export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'about') {
    return '/acerca-de-mi'
  }

  if (doc.type === 'post') {
    return '/publicaciones/' + doc.uid
  }

  return '/not-found'
}
