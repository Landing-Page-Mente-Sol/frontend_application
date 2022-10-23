import { Component, OnInit } from '@angular/core';

import { Recursos_Buscar } from '../models/recurso_buscar';
import { RecursosBuscarService } from '../services/recurso_buscar.service';

import { Recursos } from '../models/recursos';
import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.component.html',
  styleUrls: ['./heading.component.component.css']
})
export class HeadingComponentComponent implements OnInit {

  recursos: Recursos[];
  recurso_buscar: Recursos_Buscar[];
  constructor(private recursosBuscarService: RecursosBuscarService,
    private recursosService: RecursosService)
  {
    this.recurso_buscar=[] as Recursos_Buscar[];
    this.recursos=[] as Recursos[];
    this.recursosBuscarService.getAll().subscribe((response:any)=>{this.recurso_buscar=response});
    this.recursosService.getAll().subscribe((response:any)=>{this.recursos=response});
  }

  ngOnInit(): void {
  }

  buscar='';



  buscar_f(contenido:string){
    localStorage.setItem("item_buscar",contenido);
    contenido="";
    this.recursosService.create({"id":0,"numero":-1}).subscribe((aux)=>console.log(aux));
    // this.recursosBuscarService.create({"id":0,"buscar":contenido}).subscribe((aux)=>console.log(aux));
  }
}
