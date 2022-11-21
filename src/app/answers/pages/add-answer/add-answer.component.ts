import {Component, OnInit, ViewChild} from '@angular/core';

import { QuestionsService } from '../../../shared/services/questions.service';
import { Question } from "../../../shared/models/question";
import { Answer } from '../../../shared/models/answer';
import { AnswersService } from '../../../shared/services/answers.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DateFormat} from "../../../shared/util/date-format";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  question: Question;
  answerData: Answer = {} as Answer;

  answers: Answer[];

  @ViewChild('answerForm', {static: false})
  answerForm!: NgForm;

  constructor(private questionService: QuestionsService,
    private answerService:AnswersService, private activatedRoute:ActivatedRoute, private route: Router)
  {
    this.answers = [] as Answer[];
    this.question = {} as Question;

    this.activatedRoute.params.subscribe(params => {
      const questionId = params['questionId'];
      if(questionId){
        this.questionService.getById(questionId).subscribe(response => this.question = response,
          error => this.toHome()
        );
        this.answerService.getByQuestion(questionId).subscribe(response => this.answers = response);
      }
      else this.toHome();
    });
  }

  toHome() {
    this.route.navigateByUrl('/home').then()
  }

  addAnswer() {
    this.answerData.madeAt = new Date();

    this.answerService.createAnswer(
      this.question.id,
      localStorage.getItem('user') ?? '',
      this.answerData
    ).subscribe(response => {
      if(response){
        this.answers.push(response);
        this.answerForm.resetForm();
      }
    });
  }

  ngOnInit(): void {
  }

  formatDate(date: string | Date) {
    return DateFormat.format(date, DateFormat.YYYYMMDD);
  }

  onSubmit() {
    if(this.answerForm.valid){
      this.addAnswer();
    }
  }

  hasError(controlName: string, errorName: string){
    return this.answerForm?.controls[controlName]?.hasError(errorName);
  }
}

