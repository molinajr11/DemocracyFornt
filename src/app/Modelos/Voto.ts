import { Candidatos } from "./candidatos";
import { Votante } from "./votante";

export class Voto{
    id:number;
    votante:Votante
    candidato:Candidatos

    
    constructor(id:number,votante:Votante,candidato:Candidatos){
        this.id= id
        this.candidato=candidato
        this.votante=votante
    }
}