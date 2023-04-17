import { Component, OnInit } from '@angular/core';
import { ProyectosServiceService } from '../servicios/proyectos-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit{

proyectos: any
nombre!: string
descripcion!: string

  constructor(private proyectosService: ProyectosServiceService){}

  ngOnInit(){
      //consola 
      this.proyectosService.getProyectos().subscribe(proyectos => console.log(proyectos));
      //pantalla
      this.proyectosService.getProyectos().subscribe(proyectos => {
        this.proyectos = proyectos;
      });
    }
  }