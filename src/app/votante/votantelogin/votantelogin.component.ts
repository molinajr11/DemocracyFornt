import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicesVotantes/login.service';
import { UserService } from 'src/app/servicesVotantes/userService';
import { WebcamImage } from 'ngx-webcam/public_api';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Votante } from 'src/app/Modelos/votante';

@Component({
  selector: 'app-votantelogin',
  templateUrl: './votantelogin.component.html',
  styleUrls: ['./votantelogin.component.scss']
})
export class VotanteloginComponent {
  cedula: number = 0;
  hide = true;
  trigger: Subject<void> = new Subject();
  capturedImage: WebcamImage | undefined;

  public showWebcam = true;
  public allowCameraSwitch = true;
  public deviceId: string | undefined;

  public webcamImages: WebcamImage[] = [];
  currentVotante: Votante | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImages.push(webcamImage);
    this.capturedImage = webcamImage;
    console.log('Imagen capturada:', webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  async captureImage() {
    await this.trigger.next();
    console.log('Imagen capturada:', this.capturedImage);
  }

  async captureCedula() {
    console.log('Cédula capturada:', this.cedula);
  }

  async login() {
    if (!this.capturedImage) {
      console.log('No se ha capturado ninguna imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('imagenCapturada', this.dataURItoBlob(this.capturedImage.imageAsDataUrl), 'capturedImage.jpg');
    formData.append('cedula', this.cedula.toString());

    const imagenCapturada = formData.get('imagenCapturada') as Blob | null;
    const cedula = formData.get('cedula');

    if (imagenCapturada && cedula) {
      this.userService.validateVotante(imagenCapturada, + cedula)
        .subscribe((votante) => {
          if (votante) {
            this.router.navigate(['/votar']);
            console.log('Acceso');
            this.leercedula();
          } else {
            console.log('La cédula no está registrada');
          }
        });
    } else {
      console.log('No se encontraron datos válidos en el formulario.');
    }
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  printBlobContent(blob: Blob) {
    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result as string;
      console.log('Contenido del Blob:', content);
    };

    reader.readAsText(blob);
  }
  leercedula(){
    this.userService.getVotanteCedula(this.cedula)
    .subscribe((votanteinfo) => {
      const nuevoVotante: Votante = {
        id: votanteinfo.id,
        name: votanteinfo.name,
        cedula: votanteinfo.cedula,
        lastName: votanteinfo.lastName,
        email: votanteinfo.email
      };
      this.router.navigate(['/votar', { votante: JSON.stringify(nuevoVotante) }]);
      console.log('Votante info:', votanteinfo);
    });
  }
}
