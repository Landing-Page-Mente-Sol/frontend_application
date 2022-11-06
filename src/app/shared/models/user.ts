export interface User {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  userType: string,
  upcCode: string,
  career: string,
  cycle: number,
  points?: number
}
