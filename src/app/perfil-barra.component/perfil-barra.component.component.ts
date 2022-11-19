import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UsersService } from '../shared/services/users.service';
import {UserInformation} from "../users/model/user-information";
import {AnswersService} from "../shared/services/answers.service";
@Component({
  selector: 'app-perfil-barra',
  templateUrl: './perfil-barra.component.component.html',
  styleUrls: ['./perfil-barra.component.component.css']
})
export class PerfilBarraComponentComponent implements OnInit {

  user: User;
  userInformation: UserInformation;
  constructor(private answerService: AnswersService, private userService: UsersService)
  {
    this.userInformation = {} as UserInformation;
    this.user = {} as User;
    this.userService.getById(localStorage.getItem("user") ?? '').subscribe(response=>{
      this.user = response;
      this.answerService.getByUser(this.user.id).subscribe(response => this.userInformation.answers = response.length)
      this.userService.getTop100DescByPoints().subscribe((response)=>{
        this.userInformation.ranking = 'undefined';
        response.map((user, index) => {
          if(user.id === this.user.id)
            this.userInformation.ranking = index + 1;
        })
      })
    })

    this.userInformation.followers = this.userInformation.likes = 0;
  }
  ngOnInit(): void {
  }


}
