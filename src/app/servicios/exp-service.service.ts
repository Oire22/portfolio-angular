import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpServiceService {

  constructor(private http: HttpClient) { }

  getExperiencia(){
    return this.http.get<any[]>('https://miportfolio-web-oliveriomaranesi.onrender.com/experiencia/traer')
  }
}
