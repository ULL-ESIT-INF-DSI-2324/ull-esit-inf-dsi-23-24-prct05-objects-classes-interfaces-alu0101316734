type trabajo = [string, string, string[], string, Date, number, string];
type trabajos = trabajo[];

class Gestor_de_Referncias_Bibliograficas {
    private recopilacion: trabajos = []; 

    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string) {
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial]); 
    }
    add_trabajo(titulo: string, autor: string,palabras_claves: string[], resumen: string,fecha: Date,n_paginas: number, editorial: string){
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial])
    }
};


class Articulo extends Gestor_de_Referncias_Bibliograficas{
  
}