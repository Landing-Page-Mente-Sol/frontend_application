import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../shared/services/courses.service';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

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
