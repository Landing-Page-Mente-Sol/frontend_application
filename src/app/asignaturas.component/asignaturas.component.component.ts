import { Component, OnInit } from '@angular/core';
import { Course} from "../models/course";
import { CoursesService } from "../services/courses.service";

import { Recursos } from '../models/recursos';
import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.component.html',
  styleUrls: ['./asignaturas.component.component.css']
})
export class AsignaturasComponentComponent implements OnInit {

  recursos: Recursos[];
  asignaturas: Course[];
  constructor(private courseService: CoursesService,
    private recursosService: RecursosService)
  {
    this.asignaturas = [] as Course[];
    this.recursos=[] as Recursos[];

    this.courseService.getAll().subscribe((response: any)=>{
      this.asignaturas = response;
    })

    this.recursosService.getAll().subscribe((response:any)=>{this.recursos=response});
  }

  ngOnInit(): void {
  }

  filtro_asignatura(i:number){
    this.recursosService.create({"id":0,"numero":i}).subscribe((aux)=>console.log(aux));
  }

}
