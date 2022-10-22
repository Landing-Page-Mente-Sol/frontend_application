import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-barra',
  templateUrl: './perfil-barra.component.component.html',
  styleUrls: ['./perfil-barra.component.component.css']
})
export class PerfilBarraComponentComponent implements OnInit {

  constructor() { }
  imprimir='';
  ngOnInit(): void {
  }
  respuestas=5;
  brainPoints=13;
  brainLikes=43;
  carrera="Ing. Software";
  ranking=13;
  codigo="A20201A53";
  role="Student";
}
