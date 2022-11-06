import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.component.component.html',
  styleUrls: ['./agregar-asignatura.component.component.css']
})
export class AgregarAsignaturaComponentComponent implements OnInit {

  constructor(private couseService: CoursesService) { }

  ngOnInit(): void {
  }

  nombre_asignatura:string='';
  agregar_asignatura(nuevo:string){
    console.log(nuevo);
    this.couseService.create(
      {"name":nuevo, "image":"./assets/images/new.png"})
      .subscribe((aux)=>console.log(aux));
  }
}
