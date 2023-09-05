import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidatos } from '../Modelos/candidatos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoServiceService {

  constructor(private http:HttpClient) { }

  postCandidatos(formData:FormData):Observable<Candidatos> {
    return this.http.post<Candidatos>(`http://localhost:8080/Candidates/addcandidate`,formData);
  }
}
