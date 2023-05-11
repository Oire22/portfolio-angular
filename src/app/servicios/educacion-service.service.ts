import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  constructor(private http: HttpClient) { }

  getEducacion(){
    return this.http.get<any[]>('https://miportfolio-web-oliveriomaranesi.onrender.com/educacion/traer')
  }


}
