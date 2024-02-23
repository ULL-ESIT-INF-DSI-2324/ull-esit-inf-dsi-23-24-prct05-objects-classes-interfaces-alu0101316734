export type dish = [number,number]
export type dishes = dish[]

/**
 * 
 */
interface menu_interface
{
   platos:dishes;
   ordenar_platos(algorithm:heurisitica_interface):dishes;
   no_heath:number;
}



export interface heurisitica_interface
{
  heurisitica(platos:dishes):dishes
}

interface menu_solucion_interface 
{
   data:dishes;
   tipo_heuristica:heurisitica_interface;
   logic():dishes
}

export class  Menu_solucion
{
   constructor(private Data_solucion:dishes)
   {}
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

private arraysAreEqual(arr1: dish, arr2: dish): boolean {
   return arr1.every((value, index) => value === arr2[index]);
}
}

export class Menu_instance implements menu_interface{
   constructor(public  platos:dishes,public readonly no_heath:number)
   {

   }
   ordenar_platos(algorithm:heurisitica_interface): dishes {
      let sol = new Solver(this.platos, algorithm);;
      this.platos=sol.logic();
      this.platos = this.platos.filter(dish => {
      if(dish[1] > this.no_heath)
         return false
      else
       return true
      })
      return this.platos;
   }
   add_plato(nuevo_plato:dish)
   {
      this.platos.push(nuevo_plato);
   }
}



export class Solver implements menu_solucion_interface{
   constructor(public readonly data:dishes,public tipo_heuristica:heurisitica_interface)
   {}
   logic(): dishes {
      return this.tipo_heuristica.heurisitica(this.data);
   }
   set_heuristica(heurisitica_nueva:heurisitica_interface)
   {
     this.tipo_heuristica=heurisitica_nueva;
   }
}


export class nutricion_decent implements heurisitica_interface
{
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return a[0] - b[0] })
     return platos;
  }
}


export class unhealth_ascend implements heurisitica_interface
{
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return b[1] - a[1] })
     return platos;
  }
}


export class racional_descend implements heurisitica_interface
{
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return (a[0]/a[1]) - (b[0]/b[1])})
     return platos;
  }
}