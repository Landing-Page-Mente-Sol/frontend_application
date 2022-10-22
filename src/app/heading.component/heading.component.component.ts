import { Component, OnInit } from '@angular/core';

import { Recursos_Buscar } from '../models/recurso_buscar';
import { RecursosBuscarService } from '../services/recurso_buscar.service';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.component.html',
  styleUrls: ['./heading.component.component.css']
})
export class HeadingComponentComponent implements OnInit {

  recurso_buscar: Recursos_Buscar[];
  constructor(private recursosBuscarService: RecursosBuscarService)
  {
    this.recurso_buscar=[] as Recursos_Buscar[];
    this.recursosBuscarService.getAll().subscribe((response:any)=>{this.recurso_buscar=response});
  }

  ngOnInit(): void {
  }

  buscar='';

  buscar_f(contenido:string){
    this.recursosBuscarService.create({"id":0,"buscar":contenido}).subscribe((aux)=>console.log(aux));
  }
}
