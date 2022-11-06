import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UsersService } from '../shared/services/users.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.component.html',
  styleUrls: ['./perfil.component.component.css']
})
export class PerfilComponentComponent implements OnInit {

  user: User;
  constructor(private userService: UsersService)
  {

    this.user = {} as User;
    this.userService.getById(localStorage.getItem("user")!).subscribe((response)=>{
      this.user=response;
    })
  }
  ngOnInit(): void {
  }


}
