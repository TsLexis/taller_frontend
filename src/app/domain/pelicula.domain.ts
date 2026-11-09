import { Genero } from "./genero.domain";
import { Actor } from "./actor.domain";

export class Película{
    peliculaId:number;
    titulo:string;
    subtitulada:boolean;
    estreno:boolean;
    genero:Genero;
    actores:Actor[];

    constructor(peliculaId?:number, titulo?:string, subtitulada?:boolean, estreno?:boolean, genero?:Genero, actores?:Actor[]){
        this.peliculaId =peliculaId || 0;
        this.titulo = titulo || "";
        this.subtitulada = subtitulada || false;
        this.estreno = estreno || false;
        this.genero = genero || new Genero();
        this.actores = actores || [];
        
    }


}