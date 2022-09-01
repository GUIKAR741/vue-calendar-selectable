import * as buildCalendar from '@/utils/buildCalendar'
import {abr} from '@/utils/filters'

describe('buildCalendar', () => {
  it('should apply filters on input', () => {
    let result = abr('abcdef')
    let result2 = abr()
    expect(result).toMatch('ABC')
    expect(result2).toBe('')
  })

  it('should compute the months', () => {
    let result = buildCalendar.computeMonthsFromDays(50)
    expect(result).toEqual(2)
  })

  it('should build leap year', () => {
    let result = buildCalendar.buildYear(2000)
    expect(result.days.length).toEqual(366)
    expect(result.months.length).toEqual(12)
  })

  it('should compute the days', () => {
    let result = buildCalendar.computeDaysFromMonths(3)
    expect(result).toBeGreaterThan(88)
    expect(result).toBeLessThan(93)
  })

  it('should create the days array', () => {
    let result = buildCalendar.createDaysArray(400, false)
    let result2 = buildCalendar.createDaysArray(1, true)
    expect(result.length).toEqual(400)
    expect(result2.length).not.toEqual(1)
    expect(result2.length).not.toBeGreaterThan(31)
  })

  it('should create the months array', () => {
    let result = buildCalendar.createMonthsArray(12)
    expect(result.length).toEqual(13)
  })

  it('should create the prepended array', () => {
    let result = buildCalendar.createPrependArray(5)
    let result2 = buildCalendar.createPrependArray(12)
    expect(result.length).toEqual(5)
    expect(result2.length).toEqual(12)
  })

  it('should build the calendar object', () => {
    let result = buildCalendar.buildCalendar(365, 12, 1, false)
    expect(result.days.length).toEqual(365)
    expect(result.months.length).toEqual(14)
  })

  it('should build the entireCalendar object', () => {
    let result = buildCalendar.buildEntireCalendar(5)
    let year = buildCalendar.gYear(new Date())
    let l = buildCalendar.gMonth(new Date())
    expect(result[year + 1].days.length).toBe(365)
    expect(result[year + 1].months.length).toEqual(12)
    expect(result[year].months.length).toEqual(12 - l)
  })
})
