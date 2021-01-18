import moment from 'moment'

export default {
  filters: {
    formatDate(date) {
      if (date) {
        return moment(date).format('DD/MM/YYYY')
      }
    },
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
}
