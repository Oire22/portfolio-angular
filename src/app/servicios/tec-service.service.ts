import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecServiceService {

  constructor(private http: HttpClient) { }

  getTecnologias(){
    return this.http.get<any[]>('http://localhost:8080/tecnologias/traer')
  }
}
