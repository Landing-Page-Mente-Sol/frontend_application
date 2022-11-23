import { Course } from "./course";
import { User } from "./user";
export interface Question {
  description: string,
  title: string,
  madeAt: string|Date,
  user: User,
  course: Course,
  id:number,
}
