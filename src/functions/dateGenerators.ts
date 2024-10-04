const today = new Date()
const todayTime = today.getTime()
const endOfWeek = new Date(today)
const endOfMonth = new Date(today)
endOfWeek.setDate(endOfWeek.getDate() + 7)
endOfMonth.setDate(endOfMonth.getDate() + 31)

const dateWithinWeek = new Date(
  todayTime + Math.random() * (endOfWeek.getTime() - todayTime)
)

const dateWithinPastWeek = new Date(
  todayTime + Math.random() * (todayTime - endOfWeek.getTime())
)

const randomDay = () => new Date(
  todayTime + Math.random() * (endOfMonth.getTime() - todayTime)
)

export { dateWithinWeek, dateWithinPastWeek, randomDay, today }