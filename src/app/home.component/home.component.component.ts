import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../shared/services/questions.service';
import { Question } from "../models/question";
import { Course} from "../models/course";
import { CoursesService } from '../shared/services/courses.service';



@Component({
  selector: 'app-home.component',
  templateUrl: './home.component.component.html',
  styleUrls: ['./home.component.component.css']
})
export class HomeComponentComponent implements OnInit {

  preguntas: Question[];
  constructor(private questionService: QuestionsService)
  {
    this.preguntas = [] as Question[];
    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })

  }
  responder(e:number){
    // this.questionService.delete(e).subscribe();
    // this.recursosService.create({"id":0,"numero":e}).subscribe((aux)=>console.log(aux));
    localStorage.setItem("id_question",e.toString());
  }

  // agregar_asignatura(nuevo:string){
  //   console.log(nuevo);
  //   this.couseService.create({"id":0,"curso":nuevo, "imagen":"./assets/images/new.png"}).subscribe((aux)=>console.log(aux));
  // }


  ngOnInit(): void {
  }



}
