import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VotoServiceService } from '../voto-service.service';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from 'src/app/servicesVotantes/login.service';
import { Votante } from 'src/app/Modelos/votante';
import { UserService } from 'src/app/servicesVotantes/userService';

@Component({
  selector: 'app-voto-component',
  templateUrl: './voto-component.component.html',
  styleUrls: ['./voto-component.component.scss']
})
export class VotoComponentComponent {
  candidatos: Candidatos []=[];
  currentVotante:Votante |null=null;

  constructor(private votoSerice:VotoServiceService,private userService:UserService ){
    this.userService.currentUser$.subscribe(user=>this.currentVotante=user);
  }
  ngOnInit():void{
    this.getCandidatos();
  }
 
  getCandidatos(): void {
    this.votoSerice.getCandidatos().subscribe((candidatos: Candidatos[]) => {
      this.candidatos = candidatos;
      console.log(candidatos)
    });
  }
  getImagenUrl(rutaRelativa: string): string {
    return `http://localhost:8080/${rutaRelativa}`;
  }
  
}





