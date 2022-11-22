import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../../../shared/services/questions.service';
import { Question } from "../../../shared/models/question";
import {DateFormat} from "../../../shared/util/date-format";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions: Question[];
  constructor()
  {
    this.questions = [] as Question[];


  }

  ngOnInit(): void {
  }



}
