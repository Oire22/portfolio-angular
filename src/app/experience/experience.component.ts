import { Component, OnInit } from '@angular/core';
import { ExpServiceService } from '../servicios/exp-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

experiencia: any
puesto!: string
lugar!: string
descripcion!: string

  constructor(private expService: ExpServiceService){}

  ngOnInit() {
      //consola 
      this.expService.getExperiencia().subscribe(experiencia => console.log(experiencia));
      //pantalla
      this.expService.getExperiencia().subscribe(experiencia => {
        this.experiencia = experiencia;
      });
  }

}
