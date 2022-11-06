import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UsersService } from '../shared/services/users.service';
@Component({
  selector: 'app-perfil-barra',
  templateUrl: './perfil-barra.component.component.html',
  styleUrls: ['./perfil-barra.component.component.css']
})
export class PerfilBarraComponentComponent implements OnInit {

  user: User;
  constructor(private userService: UsersService)
  {

    this.user = {} as User;
    this.userService.getById(localStorage.getItem("user")!).subscribe((response:any)=>{
      this.user=response;
    })
  }

  imprimir='';
  ngOnInit(): void {
  }


  respuestas=5;
  brainPoints=13;
  brainLikes=43;
  carrera="Ing. Software";
  ranking=13;
  codigo="A20201A53";
  role="Student";
}
