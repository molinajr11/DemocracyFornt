import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotanteloginComponent } from './votante/votantelogin/votantelogin.component';
import { VotoComponentComponent } from './voto/voto-component/voto-component.component';
import { CandidatoComponentComponent } from './admin/candidato-component/candidato-component.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';

const routes: Routes = [
  {path:'login',component:VotanteloginComponent},
  {path:'votar',component:VotoComponentComponent},
  {path:'agregarCandidato',component:CandidatoComponentComponent},
  {path:'loginAdmin',component:LoginAdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
