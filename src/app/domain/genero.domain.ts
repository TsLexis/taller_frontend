export class Genero {
    id?:number;
    nombre?:string;
    constructor(generoId?:number, nombreGenero?:string){
        this.id = generoId;
        this.nombre = nombreGenero;
    }
}