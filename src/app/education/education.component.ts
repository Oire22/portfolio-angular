import { Component, OnInit } from '@angular/core';
import { EducacionServiceService } from '../servicios/educacion-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit{
  
educacion: any = []
titulo!: string
institucion!: string
descripcion!: string
periodo!: string

  constructor(private educacionService: EducacionServiceService){}

  ngOnInit() {
      //consola 
      this.educacionService.getEducacion().subscribe(educacion => console.log(educacion));
      //pantalla
      this.educacionService.getEducacion().subscribe(educacion => {
        this.educacion = educacion;
      });
  }
}
