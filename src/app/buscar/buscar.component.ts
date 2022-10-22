import { Component, OnInit } from '@angular/core';

import { QuestionsService } from "../services/questions.service";
import { Question } from "../models/question";
import { Course} from "../models/course";
import { CoursesService } from "../services/courses.service";

import { Recursos } from '../models/recursos';
import { RecursosService } from '../services/recursos.service';

import { Recursos_Buscar } from '../models/recurso_buscar';
import { RecursosBuscarService } from '../services/recurso_buscar.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  preguntas: Question[];
  asignaturas: Course[];
  recursos: Recursos[];
  recurso_buscar: Recursos_Buscar[];
  constructor(private questionService: QuestionsService,
    private courseService: CoursesService,
    private recursosService: RecursosService,
    private recursosBuscarService: RecursosBuscarService)
  {
    this.preguntas = [] as Question[];
    this.asignaturas=[] as Course[];
    this.recursos=[] as Recursos[];

    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone})
    this.recursosService.getAll().subscribe((response:any)=>{this.recursos=response});
    // this.indice=this.recursos[this.recursos.length-1].numero;

    this.recurso_buscar=[] as Recursos_Buscar[];
    this.recursosBuscarService.getAll().subscribe((response:any)=>{this.recurso_buscar=response});

  }

  item_buscar=localStorage.getItem("item_buscar");


  ngOnInit(): void {
  }

  responder_pregunta_card(k:number){
    this.recursosService.create({"id":0,"numero":k}).subscribe((aux)=>console.log(aux));
  }
  filtro: boolean=false;

  funcionfiltro(){
    this.asignaturas.forEach(element => {
      if(element.curso==this.recurso_buscar[this.recurso_buscar.length-1].buscar){
        this.filtro=true;
      }
    });
    return this.filtro;
  }
}

// ||
//     recurso_buscar[recurso_buscar.length-1].buscar==pregunta.titulo||funcionfiltro()
