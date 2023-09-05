export class Votante{
    id:number;
    cedula:number;
    name:string;
    lastName:string;
    email: string;
    
    constructor(id:number,cedula:number,name:string,lastName:string,email:string){
        this.id= id
        this.cedula=cedula
        this.name=name
        this.lastName= lastName
        this.email= email
    }
}