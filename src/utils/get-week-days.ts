export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-br', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => weekDay.charAt(0).toUpperCase() + weekDay.slice(1))
}
