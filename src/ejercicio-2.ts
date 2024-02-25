/** @type definimos la tupla de number */
export type dish = [number,number]
/** vector de numbers */
export type dishes = dish[]

/**
 *  @interface menu_interface interfaz para los atributos de menu_instance
 */
export interface menu_interface
{
   platos:dishes;
   ordenar_platos(algorithm:heurisitica_interface):dishes;
   no_heath:number;
}


/**
 * @interface heurisitica_interface interfaz que retorna la funcion heuristica 
 */
export interface heurisitica_interface
{
  heurisitica(platos:dishes):dishes
}

/**
 *  @interface menu_solucion_interface interfaz para los atributos de Solver
 */
export interface menu_solucion_interface 
{
   data:dishes;
   tipo_heuristica:heurisitica_interface;
   logic():dishes
}

/**
 *  @class Menu_soluciones clase que compruba si las solución de los platoses correcta
 */
export class  Menu_solucion
{
   constructor(private Data_solucion:dishes)
   {}
   /** @public */
   check_is_correct(data:dishes):boolean
   {
      if (this.Data_solucion.length !== data.length) {

         return false;
     }
 
 
     for (let i = 0; i < this.Data_solucion.length; i++) {
         if (!this.arraysAreEqual(this.Data_solucion[i], data[i])) {

             return false;
         }
     }
 

     return true;
   }
/** @private */
private arraysAreEqual(arr1: dish, arr2: dish): boolean {
   return arr1.every((value, index) => value === arr2[index]);
}
}


/**
 *  @class instancia el problema de Menu
 */
export class Menu_instance implements menu_interface{
   constructor(public  platos:dishes,public readonly no_heath:number)
   {

   }
   /** @public */
   ordenar_platos(algorithm:heurisitica_interface): dishes {
      let sol = new Solver(this.platos, algorithm);
      this.platos=sol.logic();
      this.platos = this.platos.filter(dish => {
      if(dish[1] > this.no_heath)
         return false
      else
       return true
      })
      return this.platos;
   }
   /** @public */
   add_plato(nuevo_plato:dish)
   {
      this.platos.push(nuevo_plato);
   }
}


/**
 * @class tenemos una clase que resuleve el problema del algoritmo
 */
export class Solver implements menu_solucion_interface{
   constructor(public readonly data:dishes,public tipo_heuristica:heurisitica_interface)
   {}
   /** @public */
   logic(): dishes {
      return this.tipo_heuristica.heurisitica(this.data);
   }
   /** @public */
   set_heuristica(heurisitica_nueva:heurisitica_interface)
   {
     this.tipo_heuristica=heurisitica_nueva;
   }
}

/** @class nutricion_decent ordena de forma descendente la nuticion del alimento*/
export class nutricion_decent implements heurisitica_interface
{
   /** @public */
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return a[0] - b[0] })
     return platos;
  }
}

/** @class unhealth_ascend   */
export class unhealth_ascend implements heurisitica_interface
{
   /** @public */
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return b[1] - a[1] })
     return platos;
  }
}

/** @class racional_descend de forma relacional lo ordena de forma descendente */
export class racional_descend implements heurisitica_interface
{
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return (a[0]/a[1]) - (b[0]/b[1])})
     return platos;
  }
}