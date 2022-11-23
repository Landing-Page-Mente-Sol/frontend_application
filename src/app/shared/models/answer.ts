import { Question } from "./question"
import { User } from "./user"

export interface Answer {
  description: string,
  madeAt: Date|string,
  user: User,
  question: Question,
  id: number,
  points?: number | string,
  show?: boolean
}
