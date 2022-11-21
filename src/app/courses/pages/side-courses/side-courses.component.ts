import { Component, OnInit } from '@angular/core';
import { Course} from "../../../shared/models/course";
import { CoursesService } from '../../../shared/services/courses.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './side-courses.component.html',
  styleUrls: ['./side-courses.component.css']
})
export class SideCoursesComponent implements OnInit {


  courses: Course[];
  constructor(private courseService: CoursesService)
  {
    this.courses = [] as Course[];

    this.courseService.getAll().subscribe((response: any)=>{
      this.courses = response;
      this.courses = this.courses.sort((a, b)=>{
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

}
