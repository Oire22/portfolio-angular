import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiceService {

  constructor(private http: HttpClient) { }

  getEducacion(){
    return this.http.get<any[]>('http://localhost:8080/personas/traer')
  }


}
