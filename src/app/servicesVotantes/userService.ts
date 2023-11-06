import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Votante } from '../Modelos/votante';
import { ValidationResult } from './ValidationResult';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<Votante | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  setCurrentUser(votante: Votante) {
    this.currentUserSubject.next(votante);
  }

  addVotante(imagen: File, votante: Votante): Observable<Votante> {
    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('votante', JSON.stringify(votante));
    const headers = new HttpHeaders();
    // Agrega cualquier encabezado necesario, por ejemplo, para enviar el token de autenticación
    return this.http.post<Votante>('/user/addvotante', formData, { headers });
  }

  validateVotante(imagenCapturada: Blob, cedula: number): Observable<boolean> {
    const formData = new FormData();
    formData.append('imagenCapturada', imagenCapturada, 'capturedImage.jpg');
    formData.append('cedula', cedula.toString());

    return this.http.post<any>('http://localhost:8080/votes/validate', formData)
  }

  getVotanteCedula(cedula:number):Observable<Votante>{
    return this.http.get<Votante>(`http://localhost:8080/user/usercedula/${cedula}`);
  }
}
