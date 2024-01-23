import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) { }

  obtenerDatos<T> (url : string){

    url = 'https://jsonplaceholder.typicode.com/users';
    return this._http.get<T[]>(url);
    
  }
}
