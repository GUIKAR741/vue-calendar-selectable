export default {
  lang: {
    type: String,
    enum: ['EN', 'FR', 'PT_BR'],
    default: 'PT_BR',
  },
  days: {
    type: Number,
    default: 30,
  },
  months: {
    type: Number,
    default: 12,
  },
  prependedMonths: {
    type: Number,
    default: 1,
  },
  pastIsDisabled: {
    type: Boolean,
    default: false,
  },
  years: {
    type: Number,
    default: 0,
  },
  prependedYears: {
    type: Number,
    default: 0,
  },
  selected: {
    type: Object,
    default() {
      const date = new Date()
      const gWeekDay = date => date.getDay()
      const gDay = date => date.getDate()
      const gMonth = date => date.getMonth()
      const gYear = date => date.getFullYear()
      return {
        dayOfTheWeek: gWeekDay(date),
        day: gDay(date),
        monthNumber: gMonth(date),
        fullYear: gYear(date),
      }
    },
  },
  value: {
    type: String,
    default: '',
  },
  disabledWeekDays: {
    type: Object,
    default: () => ({}),
  },
  disabledDates: {
    type: Array,
    validator: v => v.every(el => !isNaN(Date.UTC(...el.split('-')))),
    default: () => [],
  },
  fullMonths: {
    type: Boolean,
    default: false,
  },
  accentColor: {
    type: String,
    default: '#00008b',
  },
}
