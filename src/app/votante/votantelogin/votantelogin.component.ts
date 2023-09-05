import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Votante } from 'src/app/Modelos/votante';
import { LoginService } from 'src/app/servicesVotantes/login.service';
import { UserService } from 'src/app/servicesVotantes/userService';

@Component({
  selector: 'app-votantelogin',
  templateUrl: './votantelogin.component.html',
  styleUrls: ['./votantelogin.component.scss']
})
export class VotanteloginComponent {
cedula:number=0;
hide=true

constructor(private loginService:LoginService,
  private router:Router,
 private userService:UserService){
}

login(){
  this.loginService.checkCedulaExists(this.cedula)
  .subscribe((votante)=>{
    if(votante){
      this.userService.setCurrentUser(votante)
      this.router.navigate(['/votar'])
      console.log('Acceso');
    }else{
  console.log('la cedula no esta registrada');  
      }
    });
  }
}
