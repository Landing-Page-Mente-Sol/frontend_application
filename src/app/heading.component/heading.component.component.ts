import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.component.html',
  styleUrls: ['./heading.component.component.css']
})
export class HeadingComponentComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }

  buscar='';



  buscar_f(contenido:string){
    localStorage.setItem("item_buscar",contenido);
    contenido="";
    // this.recursosService.create({"id":0,"numero":-1}).subscribe((aux)=>console.log(aux));
    // this.recursosBuscarService.create({"id":0,"buscar":contenido}).subscribe((aux)=>console.log(aux));
  }
}
