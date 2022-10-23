import { Component, OnInit } from '@angular/core';

import { QuestionsService } from "../services/questions.service";
import { Question } from "../models/question";
import { Recursos } from '../models/recursos';
import { RecursosService } from '../services/recursos.service';
import { Course} from "../models/course";
import { CoursesService } from "../services/courses.service";



@Component({
  selector: 'app-home.component',
  templateUrl: './home.component.component.html',
  styleUrls: ['./home.component.component.css']
})
export class HomeComponentComponent implements OnInit {

  preguntas: Question[];
  asignaturas: Course[];
  recursos: Recursos[];
  constructor(private questionService: QuestionsService,
    private recursosService: RecursosService,
    private courseService: CoursesService)
  {
    this.preguntas = [] as Question[];
    this.asignaturas=[] as Course[];
    this.recursos=[] as Recursos[];
    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone});
    this.recursosService.getAll().subscribe((response:any)=>{this.recursos=response});
  }


  responder(e:number){
    // this.questionService.delete(e).subscribe();
    this.recursosService.create({"id":0,"numero":e}).subscribe((aux)=>console.log(aux));
  }

  // agregar_asignatura(nuevo:string){
  //   console.log(nuevo);
  //   this.couseService.create({"id":0,"curso":nuevo, "imagen":"./assets/images/new.png"}).subscribe((aux)=>console.log(aux));
  // }


  ngOnInit(): void {
  }



}
