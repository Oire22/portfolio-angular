import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceService {

  constructor(private http: HttpClient) { }

  getProyectos(){
    return this.http.get<any[]>('http://localhost:8080/Proyectos/traer')
  }

}
