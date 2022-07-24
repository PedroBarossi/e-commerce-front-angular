export class Album {
    titulo:string;
    artista:string;
    ano:number;
    preco: number;
    urlCapa:string;
    constructor(){
        this.titulo = '',
        this.artista = '',
        this.ano = 0;
        this.preco = 0;
        this.urlCapa = ''
    }
}