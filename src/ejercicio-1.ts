type trabajo = [string, string, string[], string, Date, number, string];
type trabajos = trabajo[];

class Gestor_de_Referncias_Bibliograficas {
    private recopilacion: trabajos = []; 

    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string) {
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial]); 
    }
    add_trabajo(titulo: string, autor: string,palabras_claves: string[], resumen: string,fecha: Date,n_paginas: number, editorial: string):void{
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial])
    }
    getrecopilacion():trabajos{
        return this.recopilacion;
    }
};


class Articulo extends Gestor_de_Referncias_Bibliograficas{
   private revista:string[] =[];
   private volumen:string[] = [];
   constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,volumen:string,revista:string){
     super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
     this.revista.push(revista); 
     this.volumen.push(volumen);
   }
   add_trabajo_Articulo(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,volumen:string,revista:string): void {
       super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
       this.volumen.push(volumen);
       this.revista.push(revista);
       return;
   }
   getrecopilacion(): trabajos {
    const recopilacionPadre = super.getrecopilacion();
    const recopilacionCompleta: trabajos = [];

    for (const trabajo of recopilacionPadre) {
        const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];

        recopilacionCompleta.push(trabajoCompleto);
    }

    return recopilacionCompleta;
}
print():void {
  const recopilacionCompleta = this.getrecopilacion();
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.volumen[0], this.revista[0]]));
}
}