import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Votante } from '../Modelos/votante';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  checkCedulaExists(cedula: number): Observable<Votante> {
    return this.http.get<Votante>(`http://localhost:8080/user/usercedula?cedula=${cedula}`);
  }
}
