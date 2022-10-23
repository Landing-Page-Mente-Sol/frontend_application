import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.component.html',
  styleUrls: ['./perfil.component.component.css']
})
export class PerfilComponentComponent implements OnInit {

  constructor() { }

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
