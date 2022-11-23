import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../shared/models/question";
import {QuestionsService} from "../../../shared/services/questions.service";
import {DateFormat} from "../../../shared/util/date-format";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.css']
})
export class ShowQuestionsComponent implements OnInit {

  @Input()
  questions!: Question[];

  userId: number = parseInt(localStorage.getItem('user')!);

  constructor(private questionService: QuestionsService, private route: Router) { }

  ngOnInit(): void {
    if(!this.questions){
      this.questionService.getAll().subscribe((response: any)=>{
        this.questions = response;
      })
    }
  }
  reply(questionId: number){
    this.route.navigateByUrl('/question/' + questionId + '/add-answer').then();
  }

  formatDate(date: string | Date) {
    return DateFormat.format(date, DateFormat.YYYYMMDD);
  }

  edit(questionId: number) {
    this.route.navigateByUrl('/edit-question/' + questionId).then()
  }
}
