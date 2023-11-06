export class Candidatos{
    id:number;
    name:string;
    lastName:string;
    imagenUrl:string

    constructor(name:string,lastname:string,image :string,id:number){
        this.name=name
        this.lastName= lastname
        this.imagenUrl= image
        this.id=id
    }
}