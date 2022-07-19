export default function (date_string: string): string {
  const date = new Date(date_string)
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    month[date.getMonth()] +
    " " +
    date.getDay() +
    ", " +
    date.getFullYear() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds()
  )
}
