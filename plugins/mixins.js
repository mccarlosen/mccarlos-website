import moment from 'moment'

export default {
  methods: {
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value
    },
  },
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
