import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotanteloginComponent } from './votante/votantelogin/votantelogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VotoComponentComponent } from './voto/voto-component/voto-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CandidatoComponentComponent } from './admin/candidato-component/candidato-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { WebcamModule } from 'ngx-webcam';
@NgModule({
  declarations: [
    AppComponent,
    VotanteloginComponent,
    VotoComponentComponent,
    CandidatoComponentComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
