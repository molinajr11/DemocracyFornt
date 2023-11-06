import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Candidatos } from '../Modelos/candidatos';
import { Votante } from '../Modelos/votante';
import { Voto } from '../Modelos/Voto';

@Injectable({
  providedIn: 'root'
})
export class VotoServiceService {

  constructor(private http:HttpClient) { }

  getCandidatos():Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(` http://localhost:8080/Candidates/getAll`);
  } 
  CreateVoto(idCandidato: number, idVotante: number): Observable<Voto> {
    const params = new HttpParams()
      .set('idCandidato', idCandidato.toString())
      .set('idVotante', idVotante.toString());
  
    return this.http.post<Voto>(`http://localhost:8080/votes/createvoto`, null, { params })
      .pipe(
        catchError((error) => {
          console.error('Error al crear voto', error);
  
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Error message:', error.error);
          }
  
          throw error;
        })
      );
  }
  
  getVotanteBycedula(cedula:number):Observable<Votante>{
    return this.http.get<Votante>(`http://localhost:8080/user/usercedula/cedula`);
  }
}
