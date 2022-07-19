export default function ISOtoReadable(date: Date): string {
  try {
    return date.toISOString().slice(0, 19).replace("T", " ")
  } catch (error) {
    return date.toString()
  }
}
