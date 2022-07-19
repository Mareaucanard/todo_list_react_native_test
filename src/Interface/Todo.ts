export default interface Todo {
  id?: number
  title: string
  description: string
  created_at?: Date
  due_time: Date
  user_id?: number
  status: string
}
