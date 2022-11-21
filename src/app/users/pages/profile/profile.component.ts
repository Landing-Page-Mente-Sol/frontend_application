import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UsersService } from '../../../shared/services/users.service';
import {UserInformation} from "../../model/user-information";
import {AnswersService} from "../../../shared/services/answers.service";


@Component({
  selector: 'app-perfil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  username!: string;
  userInformation: UserInformation;

  constructor(private userService: UsersService, private answerService: AnswersService)
  {

    this.user = {} as User;
    this.userInformation = {} as UserInformation;

    this.userService.getById(localStorage.getItem("user")!).subscribe((response)=>{
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

    this.username = localStorage.getItem('username') ?? 'undefined';
    this.userInformation.followers = this.userInformation.likes = 0;
  }
  ngOnInit(): void {
  }

  userType(type: string): string {
    if(type === 'student')
      return 'Student';
    else if(type === 'tutor')
      return 'Tutor'
    return 'undefined'
  }

}
