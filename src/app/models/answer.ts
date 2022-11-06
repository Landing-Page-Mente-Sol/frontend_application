import { Course } from "./course"
import { Question } from "./question"
import { User } from "../shared/models/user"

export interface Answer {
  description: string,
  madeAt: Date|string,
  user: User,
  question: Question,
  id: number
}
