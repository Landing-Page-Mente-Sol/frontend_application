import {Answer} from "./answer";
import { Course } from "./course";
import { User } from "../shared/models/user";
export interface Question {
  description: string,
  title: string,
  madeAt: string|Date,
  user: User,
  course: Course,
  id:number,
}
