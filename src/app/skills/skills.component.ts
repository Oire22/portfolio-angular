import { Component, OnInit } from '@angular/core';
import { TecServiceService } from '../servicios/tec-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

tecnologias: any
nombre!: string
nivel!: number
  constructor(private tecService: TecServiceService){}

  ngOnInit(){
      //consola 
      this.tecService.getTecnologias().subscribe(tecnologias => console.log(tecnologias));
      //pantala
      this.tecService.getTecnologias().subscribe(tecnologias => {
        this.tecnologias = tecnologias;
      });
  }

}
