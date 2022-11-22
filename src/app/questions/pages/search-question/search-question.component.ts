import {AfterViewChecked, Component, OnInit} from '@angular/core';

import { QuestionsService } from '../../../shared/services/questions.service';
import { Question } from "../../../shared/models/question";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css']
})
export class SearchQuestionComponent implements OnInit {
  questions: Question[];
  none: boolean = false;
  constructor(private questionService: QuestionsService, private route: Router, private activatedRoute: ActivatedRoute)
  {
    this.questions = [] as Question[];
    if(this.currentUrlHas('course')){
      this.activatedRoute.params.subscribe(params=>{
        const keyword = params['keyword'];

        if(keyword)
          this.questionService.getByCourseAndTitleContains(params['courseId'], params['keyword']).subscribe(
            response => this.setQuestions(response),
            error => this.toHome()
          );
        else this.questionService.getByCourse(params['courseId']).subscribe(
          response => this.setQuestions(response),
            error => this.toHome()
        )
      })
    }
    else {
      this.activatedRoute.params.subscribe(params=>{
        const keyword = params['keyword'];
        if(keyword && keyword !== '')
          this.questionService.getByTitleContains(keyword).subscribe(response => this.questions = response);
        else this.questionService.getAll().subscribe(response => this.questions = response);
      })

    }
  }

  setQuestions(questions: Question[]) {
    if(questions) {
      this.questions = questions;
      this.none = questions.length === 0;
    }
    else this.none = true;
  }

  toHome() {
    this.route.navigateByUrl('/home').then();
  }

  ngOnInit(): void {
  }

  currentUrlHas(keyword: string){
    return this.route.url.search(keyword) !== -1;
  }
}

