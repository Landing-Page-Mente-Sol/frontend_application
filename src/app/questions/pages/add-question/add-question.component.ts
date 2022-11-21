import {Component, OnInit, ViewChild} from '@angular/core';
import { CoursesService } from '../../../shared/services/courses.service';
import { Course} from "../../../shared/models/course";
import { Question } from "../../../shared/models/question";
import { QuestionsService } from '../../../shared/services/questions.service';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  preguntas: Question[];
  courses: Course[];

  @ViewChild('questionForm', {static: false})
  questionForm!: NgForm;

  questionData: Question = {} as Question;
  courseId: number = 0;
  notSelectCourse: boolean = false;

  constructor(private questionService: QuestionsService,
    private courseService: CoursesService, private route: Router)
  {
    this.preguntas = [] as Question[];
    this.courses=[] as Course[]
    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })
    this.courseService.getAll().subscribe((response)=>{
      this.courses = response.sort(
        (a, b)=>{
          if ( a.name < b.name )
            return -1;
          if ( a.name > b.name )
            return 1;
          return 0;
      });
    })
  }



  setCourse(i: number){
    this.courseId = i;
    this.notSelectCourse = false;
    let elements = document.getElementsByClassName('selected');


    if(elements.length > 0) {
      for (let i = 0; i < elements.length; ++i)
        elements.item(i)?.classList.remove('selected');
    }

    let element = document.getElementById(i.toString())!;
    element.classList.add('selected');
  }


  publishQuestion() {
    this.questionData.madeAt = new Date();
    this.questionService.createQuestion(
      this.courseId,
      localStorage.getItem("user")!,
      this.questionData
    ).subscribe(response => response ? this.route.navigateByUrl('/home') : console.log('not created'));
  }
  ngOnInit(): void {
  }

  hasError(controlName: string, errorName: string) {
    return this.questionForm?.controls[controlName]?.hasError(errorName);
  }

  onSubmit() {
    if(this.questionForm.valid) {
      if(this.courseId !== 0)
        this.publishQuestion();
      else this.notSelectCourse = true;
    }
  }
}
