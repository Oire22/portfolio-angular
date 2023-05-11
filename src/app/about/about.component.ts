import { Component, OnInit } from '@angular/core';
import { PersonaServiceService } from '../servicios/persona-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit{

  id!: number;
  personas: any
  persona: any
  nombre!: string;
  apellido!:string;
  edad!:number;

  constructor(private personaService: PersonaServiceService){}

  ngOnInit() {
      //consola 
      this.personaService.getPersonas().subscribe(personas => console.log(personas));
      //pantalla
      this.personaService.getPersonas().subscribe(personas => {
        this.personas = personas;
      });
  }


}
