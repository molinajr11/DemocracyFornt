import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Votante } from '../Modelos/votante';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<Votante | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  setCurrentUser(votante: Votante) {
    this.currentUserSubject.next(votante);
  }
}