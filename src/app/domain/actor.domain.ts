export class Actor{
    id?:number;
    nombre?:string;
    apellidos?:string;

    constructor(actorId:number,nombreActor:string,apellidoActor:string){
        this.id = actorId;
        this.nombre = nombreActor;
        this.apellidos = apellidoActor;
    }


}