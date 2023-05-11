import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor(private http: HttpClient) { }

  getPersonas(){
    return this.http.get<any[]>('https://miportfolio-web-oliveriomaranesi.onrender.com/personas/traer')
  }
}
