import {Component, OnInit, ViewChild} from '@angular/core';
import { CoursesService } from '../../../shared/services/courses.service';
import { Course} from "../../../shared/models/course";
import { Question } from "../../../shared/models/question";
import { QuestionsService } from '../../../shared/services/questions.service';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  courses: Course[];

  @ViewChild('questionForm', {static: false})
  questionForm!: NgForm;

  questionData: Question = {} as Question;
  courseId: number = 0;
  notSelectCourse: boolean = false;
  title: string = 'Create Question';
  isEdit: boolean = false;
  userId: number = parseInt(localStorage.getItem('user')!);
  initialQuestionData: Question = {} as Question;
  notChanged: boolean = false;

  constructor(private questionService: QuestionsService,
    private courseService: CoursesService, private route: Router, private activatedRoute: ActivatedRoute)
  {
    this.courses=[] as Course[]

    this.courseService.getAll().subscribe((response)=> this.setCourses(response));

    if(this.currentUrlHas('edit-question'))
      this.initData();

  }

  setCourses(courses: Course[]) {
    this.courses = courses.sort(
      (a, b)=>{
        if ( a.name < b.name )
          return -1;
        if ( a.name > b.name )
          return 1;
        return 0;
      });
  }

  initData() {
    this.title = 'Edit Question';
    this.isEdit = true;
    this.activatedRoute.params.subscribe(params => {
      const questionId = params['questionId'];
      if(questionId && questionId !== '')
        this.getQuestion(questionId)
      else this.toAddQuestion();
    })
  }

  getQuestion(questionId: number) {
    this.questionService.getById(questionId).subscribe(response => {
      if(response){
        if(response.user.id === this.userId)
          this.setQuestionData(response);
        else this.toAddQuestion();
      }
      else this.toAddQuestion();
    }, error => this.toAddQuestion())
  }

  setQuestionData(question: Question) {
    this.questionData = question;
    this.initialQuestionData = structuredClone(question);
    this.setCourse(question.course.id);
  }

  setCourse(i: number) {
    this.notChanged = false;
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
    ).subscribe(response => response ? this.toHome() : console.log('not created'));
  }

  changedQuestion() {
    return this.questionData.title !== this.initialQuestionData.title ||
      this.questionData.description !== this.initialQuestionData.description ||
      this.courseId !== this.initialQuestionData.course.id;
  }

  updateQuestion() {
    if(this.changedQuestion()){
      this.courseService.getById(this.courseId).subscribe(response =>{
        this.questionData.course = response;
        this.questionService.update(this.questionData.id, this.questionData).subscribe(
          () => this.toHome()
        );
      })
    }
    else this.notChanged = true;
  }

  ngOnInit(): void {
  }

  hasError(controlName: string, errorName: string) {
    return this.questionForm?.controls[controlName]?.hasError(errorName);
  }

  onSubmit() {
    if(this.questionForm.valid) {
      if(this.courseId !== 0) {
        if(this.isEdit)
          this.updateQuestion();
        else this.publishQuestion();
      }
      else this.notSelectCourse = true;
    }
  }

  currentUrlHas(keyword: string){
    return this.route.url.search(keyword) !== -1;
  }

  toAddQuestion() {
    this.route.navigateByUrl('/add-question').then();
  }

  toHome() {
    this.route.navigateByUrl('/home').then();
  }

  onKeyDown() {
    this.notChanged = false;
  }

}
