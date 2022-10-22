import {Tuple} from "./tuple";
export interface User {
  id: number,
  dates: Tuple[],
  name: string,
  lastName: string,
  email: string,
  password: string,
  type: string,
  username: string,
  upcCode: string
}
