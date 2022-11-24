import {Component, OnInit, ViewChild} from '@angular/core';

import { QuestionsService } from '../../../shared/services/questions.service';
import { Question } from "../../../shared/models/question";
import { Answer } from '../../../shared/models/answer';
import { AnswersService } from '../../../shared/services/answers.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DateFormat} from "../../../shared/util/date-format";
import {NgForm} from "@angular/forms";
import {UsersService} from "../../../shared/services/users.service";
@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {
  question: Question;
  answerData: Answer = {} as Answer;
  answers: Answer[];
  permitEditAnswer: boolean = false;

  editAnswerIndex: number = -1;

  userId: number = parseInt(localStorage.getItem('user') ?? '');

  points: any[] = [
    10,
    15,
    50,
    100
  ]

  @ViewChild('answerForm', {static: false})
  answerForm!: NgForm;

  constructor(private questionsService: QuestionsService,
              private answersService:AnswersService,
              private activatedRoute:ActivatedRoute,
              private route: Router,
              private usersService: UsersService
  )
  {
    this.answers = [];
    this.question = {} as Question;

    this.activatedRoute.params.subscribe(params => {
      const questionId = params['questionId'];
      if(questionId){
        this.questionsService.getById(questionId).subscribe(response => this.question = response,
          error => this.toHome()
        );
        this.answersService.getByQuestion(questionId).subscribe(response => this.answers = response);
      }
      else this.toHome();
    });
  }

  toHome() {
    this.route.navigateByUrl('/home').then()
  }

  addAnswer() {
    this.answerData.madeAt = new Date();

    this.answersService.createAnswer(
      this.question.id,
      localStorage.getItem('user') ?? '',
      this.answerData
    ).subscribe(response => {
      if(response){
        if(!this.answers)
          this.answers = new Array();
        this.answers.push(response);
        this.answerForm.resetForm();
      }
    });
  }

  updateAnswer() {

    if(this.answers[this.editAnswerIndex].description !== this.answerData.description) {

      this.answers[this.editAnswerIndex].description = this.answerData.description

      this.answersService.update(this.answers[this.editAnswerIndex].id, this.answers[this.editAnswerIndex]).subscribe(()=> {
        this.answerForm.resetForm();
        this.answers[this.editAnswerIndex].show = true;
      });
    }
  }

  ngOnInit(): void {
  }

  formatDate(date: string | Date) {
    return DateFormat.format(date, DateFormat.YYYYMMDD);
  }

  onSubmit() {
    if(this.answerForm.valid){
      this.permitEditAnswer ? this.updateAnswer() : this.addAnswer();
      this.permitEditAnswer = false;
    }
  }

  hasError(controlName: string, errorName: string){
    return this.answerForm?.controls[controlName]?.hasError(errorName);
  }

  verifyPoints(points: string | number) {
    return points == 'None' || points == '';
  }

  rateAnswer(answer: Answer) {
    this.usersService.getById(answer.user.id).subscribe(response =>{
      if(response){
        response.points += parseInt(answer.points!.toString());
        this.usersService.update(response.id, response).subscribe(()=> answer.points = '' );
      }
    })
  }

  editAnswer(answer: Answer, index: number) {
    this.permitEditAnswer = true;
    this.answerData.description = answer.description;
    this.editAnswerIndex = index;
    this.answers[index].show = false;
  }

  cancelEdit(){
    this.answerData.description = '';
    this.answers[this.editAnswerIndex].show = true;
    this.permitEditAnswer = false;
  }
}

