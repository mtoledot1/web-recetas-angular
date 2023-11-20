import { Component } from '@angular/core';
//import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recetas Culinarias';
  srcImagen = '../assets/images/receta.jpg';
  paginas = [
    {title: 'Inicio', path: 'paginas/inicio'},
    {title: 'Sobre Nosotros', path: 'paginas/nosotros'},
    {title: 'Recetas', path: 'paginas/recetas'},
  ];

  titulo(n: number){
    if(n == 1){
      this.title = 'Recetas Culinarias';
      this.srcImagen = '../assets/images/receta.jpg';
    }
    if(n == 2){
      this.title = 'Sobre Nosotros';
      this.srcImagen = '../assets/images/nosotros.jpg';
    }
    if(n == 3){
      this.title = 'Recetas';
      this.srcImagen = '../assets/images/recetashtml.jpg';
    }
  }
}


