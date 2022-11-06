import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../shared/services/questions.service';
import { Question } from "../models/question";
import { Course} from "../models/course";
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  preguntas: Question[];
  asignaturas: Course[];
recurso:any=-1;
  constructor(private questionService: QuestionsService,
    private courseService: CoursesService,
    )
  {
    this.preguntas = [] as Question[];
    this.asignaturas=[] as Course[];

    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone});
    // this.indice=this.recursos[this.recursos.length-1].numero;
    this.recurso=localStorage.getItem("id_question");
    this.recurso=parseInt(this.recurso);
  }

  item_buscar=localStorage.getItem("item_buscar");


  ngOnInit(): void {
  }

  responder_pregunta_card(k:number){
    // this.recursosService.create({"id":0,"numero":k}).subscribe((aux)=>console.log(aux));
    localStorage.setItem("id_question",k.toString());
  }
  filtro: boolean=false;

  // funcionfiltro(){
  //   this.asignaturas.forEach(element => {
  //     if(element.name==this.recurso_buscar[this.recurso_buscar.length-1].buscar){
  //       this.filtro=true;
  //     }
  //   });
  //   return this.filtro;
  // }
}

