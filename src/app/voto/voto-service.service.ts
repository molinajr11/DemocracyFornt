import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatos } from '../Modelos/candidatos';

@Injectable({
  providedIn: 'root'
})
export class VotoServiceService {

  constructor(private http:HttpClient) { }

  getCandidatos():Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(` http://localhost:8080/Candidates/getAll`);
  } 
}
