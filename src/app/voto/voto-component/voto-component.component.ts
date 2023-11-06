import { Component, OnInit } from '@angular/core';
import { VotoServiceService } from '../voto-service.service';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { Votante } from 'src/app/Modelos/votante';
import { UserService } from 'src/app/servicesVotantes/userService';
import { catchError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voto-component',
  templateUrl: './voto-component.component.html',
  styleUrls: ['./voto-component.component.scss']
})
export class VotoComponentComponent implements OnInit {
  candidatos: Candidatos[] = [];
  currentVotante: Votante | null = null;


  constructor(private votoService: VotoServiceService, private userService: UserService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Recupera el objeto Votante de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.currentVotante =JSON.parse(params['votante']);
      console.log('Datos del votante:', this.currentVotante);
      this.getCandidatos();
    });
  }


  getCandidatos(): void {
    this.votoService.getCandidatos().subscribe((candidatos: Candidatos[]) => {
      this.candidatos = candidatos;
      console.log(candidatos);
    });
  }

  getImagenUrl(rutaRelativa: string): string {
    return `http://localhost:8080/${rutaRelativa}`;
  }

  onVotarButtonClick(candidato: Candidatos) {
  console.log('Botón de Votar clickeado para:', candidato);
}

  votar(candidato: Candidatos) {
    console.log('Botón de Votar clickeado para:', candidato);
    console.log('ID Candidato:', candidato.id);
    console.log(this.candidatos);
    if (this.currentVotante) {
      // Llama al servicio para registrar el voto
      console.log('ID Candidato:',candidato.id);
      console.log('ID Votante:', this.currentVotante.id);
      this.votoService.CreateVoto(candidato.id,this.currentVotante.id)
        .subscribe({
          next: (result) => {
            // Aquí puedes manejar la respuesta del servidor si es necesario
            console.log('Voto registrado exitosamente', result);
          },
          error: (error) => {
            // Manejar errores aquí
            console.error('Error al registrar el voto', error);
          }
        });
    } else {
      console.error('No se encontró información del votante');
    }
  }

}