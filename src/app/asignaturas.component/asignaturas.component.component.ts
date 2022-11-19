import { Component, OnInit } from '@angular/core';
import { Course} from "../models/course";
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.component.html',
  styleUrls: ['./asignaturas.component.component.css']
})
export class AsignaturasComponentComponent implements OnInit {


  asignaturas: Course[];
  constructor(private courseService: CoursesService,)
  {
    this.asignaturas = [] as Course[];

    this.courseService.getAll().subscribe((response: any)=>{
      this.asignaturas = response;
      this.asignaturas = this.asignaturas.sort((a, b)=>{
        if ( a.name < b.name )
          return -1;
        if ( a.name > b.name )
          return 1;
        return 0;
      });
    })

  }

  ngOnInit(): void {
  }

  filtro_asignatura(i:number){
    localStorage.setItem("id_question", i.toString());
  }

}
