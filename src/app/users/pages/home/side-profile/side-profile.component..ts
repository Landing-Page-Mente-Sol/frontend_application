import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { UsersService } from '../../../../shared/services/users.service';
import {UserInformation} from "../../../model/user-information";
import {AnswersService} from "../../../../shared/services/answers.service";
import {RouterButton} from "../../../model/router-button";



@Component({
  selector: 'app-perfil-barra',
  templateUrl: './side-profile.component..html',
  styleUrls: ['./side-profile.component.css']
})
export class SideProfileComponent implements OnInit {

  user: User;
  userInformation: UserInformation;

  routerButtons: RouterButton[] = [
    {
      title: 'Ask',
      link: '/add-question'
    },
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Ranking',
      link: '/ranking'
    },
    {
      title: 'Home',
      link: '/home'
    }
  ]

  constructor(private answerService: AnswersService, private userService: UsersService)
  {
    this.userInformation = {} as UserInformation;
    this.user = {} as User;
    this.userService.getById(localStorage.getItem("user") ?? '').subscribe(response=>{
      this.user = response;
      this.answerService.getByUser(this.user.id).subscribe(response =>
        response ? this.userInformation.answers = response.length: this.userInformation.answers = 0)
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
