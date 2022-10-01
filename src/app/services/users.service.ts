import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpService<User>{
  override basePath = "http://localhost:3000/api/v1/usuarios"
}
