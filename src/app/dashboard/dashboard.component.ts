import { Component } from '@angular/core';
import { QuestionsService } from "../services/questions.service";
import { Question } from "../models/question";
import { Tuple } from "../models/tuple";
import { UsersService} from "../services/users.service";
import { Course} from "../models/course";
import { CoursesService } from "../services/courses.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  asignaturas: Course[];
  dates: Tuple[]
  //********************************************************** */
  preguntas: Question[];
  constructor(private questionService: QuestionsService,
              private userService: UsersService,
              private courseService: CoursesService) {
    this.preguntas = [] as Question[];
    this.dates = [] as Tuple[];
    this.asignaturas = [] as Course[];

    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })

    this.userService.getById(1).subscribe((response)=>{
      this.dates = response.dates;
    })

    this.courseService.getAll().subscribe((response: any)=>{
      this.asignaturas = response;
    })

  }


  //********************************************************** */
  numero: number=0;
  indice: number = 5;
  input_buscador: string ="";
  input_T_nueva_pregunta: string="";
  input_C_nueva_pregunta: string="";
  input_E_nueva_pregunta: number=0;
  indice_respuesta: number=0;

  indice_pregunta: number=0;
  contenido_respuesta:string="";


  preguntar(){
    this.numero=3;
  }
  publicar_pregunta(titulo: string,contenido: string, curso: number){

    this.preguntas.push(
      {
        etiqueta: curso,
        descripcion: contenido,
        titulo: titulo,
        fecha: '13/06/2022',
        autor: 'Jerry Quispe Gavilan',
        respuestas : [
          {
            descripcion:'Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual',
            fecha: '7/12/2022',
            autor: 'Pejewino',
            index_pregunta:0,
          },
          {
            descripcion:'Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.',
            fecha: '13/10/2021',
            autor: 'Enrrique',
            index_pregunta:0,
          },
        ]
      }
    )
    this.numero=0;
  }
  responder(){
    // va al buscar y muestra todas las preguntas
    this.numero=1;
  }
  easybrain(){
    this.numero=0;
  }
  asignaturaF(indi: number){
    // bsuca en base a la etiqueta
    this.indice=indi;
    this.numero=1;
  }
  responder_pregunta_card(indice_respuesta: number){
    this.numero=2;
    this.indice_respuesta=indice_respuesta;
  }

  respuestaF(contenido: string){
    this.preguntas.at(this.indice_respuesta)?.respuestas.push(
      {
                descripcion:contenido,
                fecha: '7/12/2022',
                autor: 'Jerry Quispe Gavilan',
                index_pregunta:0,
              },
    )
  }

  buscar(filtro: String){
    console.log(filtro);
    for( let i=0; i<this.asignaturas.length; i++){
      if(filtro==this.asignaturas.at(i)?.curso){
        this.indice=i;
      }
    }
    this.numero=1;
  }


}


{}
