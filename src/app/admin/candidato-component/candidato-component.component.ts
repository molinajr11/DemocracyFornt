import { Component } from '@angular/core';
import CandidatoServiceService from '../Admin-service.service';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-candidato-component',
  templateUrl: './candidato-component.component.html',
  styleUrls: ['./candidato-component.component.scss']
})


export class CandidatoComponentComponent {
  name:string='';
  lastname:string='';
  foto:File | null= null;
  candidatos:Candidatos[]=[];
  
  constructor(private canditatoService:CandidatoServiceService){}

  addCandidatos():void{
  const fotoParaEnviar: Blob | null = this.foto || new Blob();  
  const formData = new FormData();
  formData.append('foto', fotoParaEnviar);
  formData.append('name', this.name);
  formData.append('lastName', this.lastname);

  this.canditatoService.postCandidatos(formData)
  .subscribe((candidatoAgregado: Candidatos) => {
    console.log('Candidato agregado:', candidatoAgregado);

    });
  }
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.foto = event.target.files[0];
    }
  }
}

