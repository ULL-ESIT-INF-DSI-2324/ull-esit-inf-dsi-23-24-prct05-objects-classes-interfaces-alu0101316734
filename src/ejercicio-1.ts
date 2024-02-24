/**
 * @type Creamos un array con totos los elementos del trabajo 
 */
export type trabajo = [string, string, string[], string, Date, number, string];
/**
 * @type del array creamos arrays para alamcenar todos los trabajos 
 */
export type trabajos = trabajo[];


/**
 * @class clase padre donde tienen los atributos en comun de sus hijos
 */
export class Gestor_de_Referncias_Bibliograficas {
    /** @private */
    private recopilacion: trabajos = []; 

    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string) {
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial]); 
    }
    /** @public */
    add_trabajo(titulo: string, autor: string,palabras_claves: string[], resumen: string,fecha: Date,n_paginas: number, editorial: string):void{
        this.recopilacion.push([titulo, autor, palabras_claves, resumen, fecha, n_paginas, editorial])
    }
    /** @public */
    getrecopilacion():trabajos{
        return this.recopilacion;
    }
};

/**
 * @class clase para gestionar articulos
 */
export class Articulo extends Gestor_de_Referncias_Bibliograficas{
  /** @private */
   private revista:string[] =[];
   /** @private */
   private volumen:string[] = [];
   constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,volumen:string,revista:string){
     super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
     this.revista.push(revista); 
     this.volumen.push(volumen);
   }
   /** @public */
   add_trabajo_Articulo(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,volumen:string,revista:string): void {
       super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
       this.volumen.push(volumen);
       this.revista.push(revista);
       return;
   }
   /** @public */
   getrecopilacion(): trabajos {
    const recopilacionPadre = super.getrecopilacion();
    const recopilacionCompleta: trabajos = [];

    for (const trabajo of recopilacionPadre) {
        const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];

        recopilacionCompleta.push(trabajoCompleto);
    }

    return recopilacionCompleta;
}
/** @public */
getrevista():string[]
{
  return this.revista;
}
/** @public */
getvolumen():string[]
{
   return this.volumen;
}
/** @public */
print():void {
  const recopilacionCompleta = this.getrecopilacion();
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.volumen[0], this.revista[0]]));
}
}

/**
 * @class clase para gestionar los trabajos hechos en un congreso
 */
export class Congreso extends Gestor_de_Referncias_Bibliograficas{
  /** @private */
    private dia:Date[] =[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,dia:Date){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.dia.push(dia); 
    }
    /** @public */
    add_trabajo_Congreso(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,dia:Date): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.dia.push(dia);
        return;
    }
    /** @public */
    getrecopilacion(): trabajos {
     const recopilacionPadre = super.getrecopilacion();
     const recopilacionCompleta: trabajos = [];
 
     for (const trabajo of recopilacionPadre) {
         const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];
 
         recopilacionCompleta.push(trabajoCompleto);
     }
 
     return recopilacionCompleta;
 }
 /** @public */
 getdia():Date[]
{
  return this.dia;
}

/** @public */
 print():void {
   const recopilacionCompleta = this.getrecopilacion();
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.dia]));
 }
 }


 /**
  * @class almacenar bibliografia en esta clase
  */
 export class Libro extends Gestor_de_Referncias_Bibliograficas{
  /** @private */
    private idiomas:string[][]=[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,idiomas:string[]){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.idiomas.push(idiomas);
    }
    /** @public  */
    add_trabajo_Libro(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,idiomas:string[]): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.idiomas.push(idiomas);
        return;
    }
    /** @public */
    getrecopilacion(): trabajos {
     const recopilacionPadre = super.getrecopilacion();
     const recopilacionCompleta: trabajos = [];
 
     for (const trabajo of recopilacionPadre) {
         const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];
 
         recopilacionCompleta.push(trabajoCompleto);
     }
 
     return recopilacionCompleta;
 }
 /** @public */
  getidiomas():string[][]
  {
    return this.idiomas;
  }

/** @public */
 print():void {
   const recopilacionCompleta = this.getrecopilacion();
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.idiomas]));
 }
 }

/**
 * @class En esta clase se almacena los trabajo finales de fin de grado
 */
export class TFG extends Gestor_de_Referncias_Bibliograficas{
  /** @private */
   private Grado:string[] = [];
   /** @private */
   private Departamento:string[] =[];
   constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,Departamento:string,Grado:string){
     super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
     this.Grado.push(Grado);
     this.Departamento.push(Departamento);
   }
   /** @public */
   add_trabajo_TFG(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,Grado:string,Departamento:string): void {
       super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
       this.Grado.push(Grado);
       this.Departamento.push(Departamento);
       return;
   }
   /** @public */
   getrecopilacion(): trabajos {
    const recopilacionPadre = super.getrecopilacion();
    const recopilacionCompleta: trabajos = [];

    for (const trabajo of recopilacionPadre) {
        const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];

        recopilacionCompleta.push(trabajoCompleto);
    }

    return recopilacionCompleta;
}
/** @public */
getgrado():string[]
{
  return this.Grado;
}

/** @public */
getvolumen():string[]
{
   return this.Departamento;
}

/** @public  */
print():void {
  const recopilacionCompleta = this.getrecopilacion();
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.Grado, this.Departamento]));
}
}

/**
 * @class En esta clase se almacena los trabajo finales de fin de master
 */
export class TFM extends Gestor_de_Referncias_Bibliograficas{
    /** @private  */
    private PostGrado:string[] = [];
    /** @private */
    private Departamento:string[] =[];
    constructor(readonly titulo: string, readonly autor: string,readonly palabras_claves: string[], readonly resumen: string,readonly fecha: Date,readonly n_paginas: number,readonly editorial: string,Departamento:string,PostGrado:string){
      super(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
      this.PostGrado.push(PostGrado);
      this.Departamento.push(Departamento);
    }
    /** @public */
    add_trabajo_TFM(titulo: string, autor: string, palabras_claves: string[], resumen: string, fecha: Date, n_paginas: number, editorial: string,PostGrado:string,Departamento:string): void {
        super.add_trabajo(titulo,autor,palabras_claves,resumen,fecha,n_paginas,editorial);
        this.PostGrado.push(PostGrado);
        this.Departamento.push(Departamento);
        return;
    }
    /** @public */
    getrecopilacion(): trabajos {
     const recopilacionPadre = super.getrecopilacion();
     const recopilacionCompleta: trabajos = [];
 
     for (const trabajo of recopilacionPadre) {
         const trabajoCompleto: trabajo = [trabajo[0], trabajo[1], trabajo[2], trabajo[3], trabajo[4], trabajo[5], trabajo[6]];
 
         recopilacionCompleta.push(trabajoCompleto);
     }
  
     return recopilacionCompleta;
 }
 /** @public */
 getPostgrado():string[]
{
  return this.PostGrado;
}
 /** @public */
getvolumen():string[]
{
   return this.Departamento;
}
  /** @public */
 print():void {
   const recopilacionCompleta = this.getrecopilacion();
   console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.PostGrado, this.Departamento]));
 }
 }

 