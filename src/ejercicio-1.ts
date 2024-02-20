type trabajo = [string, string, string[], string, Date, number, string];
type trabajos = trabajo[];

export class Gestor_de_Referncias_Bibliograficas {
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


export class Articulo extends Gestor_de_Referncias_Bibliograficas{
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

export class Congreso extends Gestor_de_Referncias_Bibliograficas{
    private dia:Date[] =[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,dia:Date){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.dia.push(dia); 
    }
    add_trabajo_Congreso(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,dia:Date): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.dia.push(dia);
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
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.dia]));
 }
 }

 export class Libro extends Gestor_de_Referncias_Bibliograficas{
    private idiomas:string[][]=[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,idiomas:string[]){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.idiomas.push(idiomas);
    }
    add_trabajo_Libro(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,idiomas:string[]): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.idiomas.push(idiomas);
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
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.idiomas]));
 }
 }


export class TFG extends Gestor_de_Referncias_Bibliograficas{
   private Grado:string[] = [];
   private Departamento:string[] =[];
   constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,Departamento:string,Grado:string){
     super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
     this.Grado.push(Grado);
     this.Departamento.push(Departamento);
   }
   add_trabajo_TFG(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,Grado:string,Departamento:string): void {
       super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
       this.Grado.push(Grado);
       this.Departamento.push(Departamento);
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
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.Grado, this.Departamento]));
}
}


export class TFM extends Gestor_de_Referncias_Bibliograficas{
    private PostGrado:string[] = [];
    private Departamento:string[] =[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,Departamento:string,PostGrado:string){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.PostGrado.push(PostGrado);
      this.Departamento.push(Departamento);
    }
    add_trabajo_TFM(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,PostGrado:string,Departamento:string): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.PostGrado.push(PostGrado);
        this.Departamento.push(Departamento);
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
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.PostGrado, this.Departamento]));
 }
 }