const today = new Date()
const endOfWeek = new Date(today)
const endOfMonth = new Date(today)
endOfWeek.setDate(endOfWeek.getDate() + 7)
endOfMonth.setDate(endOfMonth.getDate() + 31)

const dateWithinWeek = new Date(
  today.getTime() + Math.random() * (endOfWeek.getTime() - today.getTime())
)

const dateWithinPastWeek = new Date(
  today.getTime() + Math.random() * (today.getTime() - endOfWeek.getTime())
)

const randomDay = () => new Date(
  today.getTime() + Math.random() * (endOfMonth.getTime() - today.getTime())
)

export { dateWithinWeek, dateWithinPastWeek, randomDay, today }