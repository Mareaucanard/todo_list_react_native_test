export default interface Todo {
  id?: number
  title: string
  description: string
  created_at?: Date | string
  due_time: Date | string
  user_id?: number
  status: string
}
