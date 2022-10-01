import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  asignaturas = [
    { curso: "Calculo I", imagen: './assets/images/Calculo.png' },
    { curso: "Calculo II", imagen: './assets/images/Calculo.png' },
    { curso: "Matematica Basica", imagen: './assets/images/Mate.png' },
    { curso: "Matematica Computacional", imagen: './assets/images/MateCompu.png',
    },
    { curso: "Programación 1", imagen: './assets/images/CC.png' },
    { curso: "Fisica", imagen: './assets/images/Fisica.png' },
    { curso: "Quimica", imagen: './assets/images/Quimica.png' },
    { curso: "Base de datos", imagen: './assets/images/DBD.png' },
  ];

  dates = [
    { llave: 'Respuestas', valor: '5' },
    { llave: 'BrainPoints', valor: '13' },
    { llave: 'BrainLikes', valor: '43' },
    { llave: 'Carrera', valor: 'Ing. Software' },
    { llave: 'Puesto Ranking', valor: '#13' },
    { llave: 'Codigo', valor: 'A20201A53' },
    { llave: 'Role', valor: 'Student' },
  ];

  // preguntas = [
  //   {
  //     etiqueta: 3,
  //     descripcion:
  //       'una como realizar o crear clases abstractas en c++, java y c#',
  //     titulo: '¿como crear arreglos?',
  //     fecha: '13/06/2022',
  //     autor: 'Gavilan',
  //     respuestas : [
  //       {
  //         descripcion:'Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual',
  //         fecha: '7/12/2022',
  //         autor: 'Pejewino',
  //         index_pregunta:0,
  //       },
  //       {
  //         descripcion:'Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.',
  //         fecha: '13/10/2021',
  //         autor: 'Enrrique',
  //         index_pregunta:0,
  //       },
  //     ]
  //   },
  //   {
  //     etiqueta: 4,
  //     descripcion: 'Cuales son las ventajas de usar POO',
  //     titulo: '¿que es POO?',
  //     fecha: '8/12/2021',
  //     autor: 'Quispe',
  //     respuestas : [
  //       {
  //         descripcion:'Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual',
  //         fecha: '7/12/2022',
  //         autor: 'Pejewino',
  //         index_pregunta:0,
  //       },
  //       {
  //         descripcion:'Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.',
  //         fecha: '13/10/2021',
  //         autor: 'Enrrique',
  //         index_pregunta:0,
  //       },
  //     ]
  //   },
  //   {
  //     etiqueta: 0,
  //     descripcion: '',
  //     titulo: '¿que es una integral?',
  //     fecha: '22/12/2023',
  //     autor: 'Jerry',
  //     respuestas : [
  //       {
  //         descripcion:'Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual',
  //         fecha: '7/12/2022',
  //         autor: 'Pejewino',
  //         index_pregunta:0,
  //       },
  //       {
  //         descripcion:'Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.',
  //         fecha: '13/10/2021',
  //         autor: 'Enrrique',
  //         index_pregunta:0,
  //       },
  //     ]
  //   },

  // ];


  //********************************************************** */
preguntas = [
    {
      "etiqueta": 3,
      "descripcion": "una como realizar o crear clases abstractas en c++, java y c#",
      "titulo": "¿como crear arreglos?",
      "fecha": "13/06/2022",
      "autor": "Gavilan",
      "respuestas": [
        {
          "descripcion": "Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 4,
      "descripcion": "Cuales son las ventajas de usar POO",
      "titulo": "¿que es POO?",
      "fecha": "8/12/2021",
      "autor": "Quispe",
      "respuestas": [
        {
          "descripcion": "Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 4,
      "descripcion": "¿Como crear una clase para datos genéricos en c++?",
      "titulo": "Tipos genéricos en c++",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 4,
      "descripcion": "Quiero sobrecargar el operador * y !=, ¿es esto posible ne Java?",
      "titulo": "¿Se puede sobrecargar operadores en Java?",
      "fecha": "22/12/2023",
      "autor": "Carlos",
      "respuestas": [
        {
          "descripcion": "No es posible sobrecargar operadores en el Java estandar",
          "fecha": "7/12/2022",
          "autor": "Juan",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 5,
      "descripcion": "¿Es posible pasar un componente como props y utilizarlo en un componente hijo en Vue?",
      "titulo": "Pasar componentes en Vue",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "No es posible, pero puedes utilizar <component :is=\"child_component\"></component> para renderizar el componente de forma dinámica",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 7,
      "descripcion": "Es mejor empezar a aprender a programar en Javascript o Typescript",
      "titulo": "¿JavaScript o Typescript?",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Typescript es un super javascript, así que lo que te recomendaría es que aprendas Typescript",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Depende de lo que quieras desarrollar, aunque la sintaxis de ambos son iguales, dependerá del framework de trabajo que utilices. Así te recomendaría aprender Javascript si trabajarás con Vue y Typescript si lo harás con Angular",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 6,
      "descripcion": "Las he venido utilizando durante el último ciclo, pero aun no tengo bastante claro para que nos sirven-",
      "titulo": "Integrales",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Son bastante utilices para calcular el área y volúmenes de cuerpos de revolución, es decir, superficies formadas por curvas",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Te ayudan a calcular áreas, volúmenes y longitudes de curvas.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 0,
      "descripcion": "¿Puede el sistema de rejilla bootstrap utilizar el ancho del \"container-fluid\" padre como medio de comunicación?",
      "titulo": "Boostrap",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": []
    },
    {
      "etiqueta": 3,
      "descripcion": "Quiero comprobar si un lista en c++ esta vacia o no",
      "titulo": "Listas c++",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Creo recordar que puedes hacerlo utilizando el método empty(), si te retorna true es que la lista está vacía.",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Puedes hacer una comparación de su tamaño, si el método size() == 0 es porque está vacía",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        },
        {
          "descripcion": "Generalmente las estructuras de datos en c++ tienen un método empty() que te retorna un booleano, dependiendo de este valor indica si la estructura está vacía o no.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 6,
      "descripcion": "Soy programador nuevo en c++ y aún no tengo claro como funciona el ciclo do while, podrían ayudarme.",
      "titulo": "Ciclos do while en c++",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Es bastante sencillo, al contrarío de un ciclo for o while, el do while primero ejecutará el código dentro del do y luego comprobará la condición en el while.",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Yo lo entiendo como un primero haz y luego pregunta.",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 3,
      "descripcion": "Quiero ejecutar una función javascript en un archivo html diferente al index.html",
      "titulo": "Código JavaScript en html",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Si este archivo html está conectado a index.html y el script está antes de esta conexión, deberías poder ejecutar la función en ese archivo.",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 6,
      "descripcion": "¿Como hago para que pidiendo un ángulo en grados me lo pase a radianes?",
      "titulo": "Convertir ángulos a radianes en c++",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Puedes hacer una función que te haga es conversión, la función debería de retornarte: ángulo/180*pi",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta":5,
      "descripcion": "¿Cuál método es el equivalente de ngOnInit en flutter?",
      "titulo": "Función de inicio en Flutter",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": []
    },
    {
      "etiqueta": 3,
      "descripcion": "",
      "titulo": "¿Cómo devolver la lista completa cuando la entrada está vacía?",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "¿A que te refieres exactamente? Nos falta información para poder ayudarte",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        }]
    },
    {
      "etiqueta": 2,
      "descripcion": "¿Como ordenar un array de números aleatorios?",
      "titulo": "Arrays en C",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Puedes implementar algún algoritmo de ordenamiento de los tantos que existen.",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Puedes usar la función qsort dentro de la librería <stdlib.h>",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 4,
      "descripcion": "",
      "titulo": "agregar datos a struct c++",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
      ]
    },
    {
      "etiqueta": 3,
      "descripcion": "¿Hay alguna forma de calcular la velocidad utilizando integrales?",
      "titulo": "Cálculo de la velocidad.",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Claro que es posible, se puede saber la velocidad en un momento t resolviendo la integral definida de 0 a t de la aceleración diferencial de t",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        }
      ]
    },
    {
      "etiqueta": 2,
      "descripcion": "",
      "titulo": "¿Cómo puedo mostrar valores de las variables en consola en c++?",
      "fecha": "22/12/2023",
      "autor": "Jerry",
      "respuestas": [
        {
          "descripcion": "Puedes utilizar la variable cout existente dentro de la librería <iostream>",
          "fecha": "7/12/2022",
          "autor": "Pejewino",
          "index_pregunta": 0
        },
        {
          "descripcion": "Para el control de flujo de datos en consola puedes usar cin y cout (librería <iostream>) para leer y escribir en consola",
          "fecha": "13/10/2021",
          "autor": "Enrrique",
          "index_pregunta": 0
        }
      ]
    }
  ]


  //********************************************************** */
  numero: number=0;
  indice: number = 5;
  input_buscador: string ="";
  input_T_nueva_pregunta: string="";
  input_C_nueva_pregunta: string="";
  input_E_nueva_pregunta: number=0;
  indice_respuesta: number=0;

  indice_pregunta: number=0;
  contenido_respuesta:string="";


  preguntar(){
    this.numero=3;
  }
  publicar_pregunta(titulo: string,contenido: string, curso: number){

    this.preguntas.push(
      {
        etiqueta: curso,
        descripcion: contenido,
        titulo: titulo,
        fecha: '13/06/2022',
        autor: 'Jerry Quispe Gavilan',
        respuestas : [
          {
            descripcion:'Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual',
            fecha: '7/12/2022',
            autor: 'Pejewino',
            index_pregunta:0,
          },
          {
            descripcion:'Se tiene que usar name class<T> y luego se crea la clase como tal, y el dato T, podrá ser de cualquier tipo, pero antes se debe definir el tipo de dicho dato.',
            fecha: '13/10/2021',
            autor: 'Enrrique',
            index_pregunta:0,
          },
        ]
      }
    )
    this.numero=0;
  }
  responder(){
    // va al buscar y muestra todas las preguntas
    this.numero=1;
  }
  easybrain(){
    this.numero=0;
  }
  asignaturaF(indi: number){
    // bsuca en base a la etiqueta
    this.indice=indi;
    this.numero=1;
  }
  responder_pregunta_card(indice_respuesta: number){
    this.numero=2;
    this.indice_respuesta=indice_respuesta;
  }

  respuestaF(contenido: string){
    this.preguntas.at(this.indice_respuesta)?.respuestas.push(
      {
                descripcion:contenido,
                fecha: '7/12/2022',
                autor: 'Jerry Quispe Gavilan',
                index_pregunta:0,
              },
    )
  }

  buscar(filtro: String){
    console.log(filtro);
    for( let i=0; i<this.asignaturas.length; i++){
      if(filtro==this.asignaturas.at(i)?.curso){
        this.indice=i;
      }
    }
    this.numero=1;
  }


}


{}
