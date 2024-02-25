# Practica 6 clases,objetos y interfaces

En esta práctica aprenderemos a ultlizar objetos,clases y interfaces.Además en esta asignatura será la primera vez que ultlizaremos la POO en nuestra practicas.Otro concepto nuevo a aplicar  en la práctica es intentar aplicar los principios _SOLID_ .

## Objetivos en la pracitca

En esta práctica tenemos como objetivos de apredizaje:

* __Clases__

* __Objetos__

* __Interfaces__

## Tareas Previas

Antes de comenzar la practiva tuvimos que hacer una serie de requiriemtnos previos:

1. Tuvimos que aceptar la aceptación del GitHub Classroom

2. Entender los principios _SOLID_  

3. Familializarse con Intanbull y Coveralls

## Ejercicio 1-Gestor de referencias bibliograficas

En este ejercicio el objetivo era crear una clase que gestionara información de trabajos.Esta información tambien se manejará dependiendo del tipo de trabajo que se este introducciendo.

### Clases

Para empezar tenemos una clase base en cual tenemos todos los atributos en común de todos los elementos bibliograficos.Además contará con un método llamado `add_trabajo` en donde le pasamos un trabajo y lo añade a la colección.Por ultimo, obtendran un getter este getter.Como podemos ver el atributo es _private_ porque seguimos el encaplsulamiento dado por el __POO__

> POO es Programación Orientada a Objetos.

```ts
class Gestor_de_Referncias_Bibliograficas
{
  private // variable para alamcenar los trabajos
  constructor(/*todos el contenido de un trabajo*/)
  {/*Aqui igualamos las varaibles con los componentes del atributo*/}
  add_trabajo(/*Aquí añadimos un nuevo trabajo*/)
  {}
  getrecolucacion()
  {/*devuelve la recoplicación*/}
}
```

El resto heredaŕan la clase anterior dada pero con su referente especialidad,por ejemplo,`Articulo` es una clase que heredará de la clase base anterior dada y añadiran sus atributos correspondientes.Además se añadiran la función  `print` que se ultiliza para imprimir por columnas la variable anterior que almacena los elemntos comunes  además de  los atributos especificos de cada clase.

```ts
class Articulo extends Gestor_de_Referncias_Bibliograficas
{
  private //nuevos atributos de la clase
  getters(/*devuelve los atributos*/)
  print()
  {
    /*imprime por filas y columnas*/
  }
}
```

### Tipos y algoritmo

Definí mi propio tipo par alamcenar los datos.

```ts
export type trabajo = [string, string, string[], string, Date, number, string];
export type trabajos = trabajo[];
```

Para imprimir por coulmnas hice los siguiente

```ts
 const recopilacionCompleta = this.getrecopilacion();
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.volumen[0], this.revista[0]]));
```

En este caso llamamos a `console.table` en la cual usamos `map` en la variable de  get que devuelve todos los atributos en comun y  añadimos al vector los atributos nuevos que ,en este caso, son `volumen` y `revista`.

## Ejercicio 2 - Menu Saludable con porgramación oreintada a objetos

En este ejercicio tenemos que hacer un ejercicio parecido a la práctica anterior.La diferencia es que ,esta vez,tenemos que usar programacion orientada a objetos.

### Clases de Menu Saludable

En este caso usaremos `Menu_instance` el cual instanciara el problema de ordenación de menú y la filtración del menu.

Para comprobar que la ordenación funcione correctamente ultilizaremos `Menu_solucion`.Este construye con la solución correcta y comprueba si el array dado y generado por `Menu_instance`.

Por último, una clase `Solver` la cual tendrá el menu completo y el algortimo que vaya usar.Y usaremos otras clases con diferentes algoritmos para ordenar estos menús.Luego explicaremos más adelante como funcionan estas clases.

### Algoritmos

Para comprobar que en `Menu_solucion` las soluciones son iguales tenemos esto

```ts
private arraysAreEqual(arr1: dish, arr2: dish): boolean {
   return arr1.every((value, index) => value === arr2[index]);
}
```

De esta manera somos capaces de comprobar si todas las listas son iguales ultilizando `every` y comprobar con el array si los elementos son iguales.

Para filtrar los alimentos que noc cumplan el score máximo de salud ultlizaremos la función `filter` de este modo

```ts
      this.platos = this.platos.filter(dish => {
      if(dish[1] > this.no_heath)
         return false
      else
       return true
      })
      return this.platos;
```

En este caso tenemos que una condición que si su score _unhealth_ es mayor que el limite de no saludable lo quita del array si no,continua en el array.

En cuanto a `Solver` seguimos hacemos lo siguiente

```ts
let tipo_heuristica:heurisitica_interface
   logic(): dishes {
      return this.tipo_heuristica.heurisitica(this.data);
   }
```

el __tipo_heuristica__ es una interfaz donde tiene una función `heurística` para que funcione ultilizamos clases que implementen esta función con su algortimo concreto un ejemplo:

```ts
//Lo declaramos así
let algorithm:heurisitica_interface
let sol = new Solver(this.platos, algorithm);
export class nutricion_decent implements heurisitica_interface
{
   /** @public */
  heurisitica(platos:dishes): dishes {
     platos.sort((a,b) =>{return a[0] - b[0] })
     return platos;
  }
}
```

Tambien comentar los tipos de variables de esta forma  `export type dish = [number,number]` y `export type dishes = dish[]`.

## Modificación

En esta practica solo tuve tiempo de hacer una modificación.Cabe decir que no terminé a tiempo en su momento,sin embargo lo terminé una vez llegado a casa.

La modificación consistía en dado un tablero de ajedrez comprobar si dos damas se atacan mutuamente.Las damas atacan de forma diagonal,horizontal y vertical.

Para hacer esto primero comprobamos si los tableros son los reglamitario 8x8 y una dama blanca y negra el resto vacio. Una vez hecho esto comprobamos si las filas y las columnas estan las damas.Para las diagonales esta un poco más difícil porque tenemos que recorrer las cuatro diagonales que tiene.Un trozo de código para idea de este algortimo

```ts
            direccionx.forEach((x, index1) => {
                  let fila_temp: number = fila;
                  let columna_temp: number = columna;
                  while (fila_temp + x >= 0 && fila_temp + x < 8 && columna_temp + direcciony[index1] >= 0 && columna_temp + direcciony[index1] < 8) {
                      fila_temp += x;
                      columna_temp += direcciony[index1];
                      if (tablero[fila_temp][columna_temp] === 'N' || tablero[fila_temp][columna_temp] === 'B') {
                          atack = true;
                      }
                  }
```

Cabe mencionar que uno de los problemas que tuve era con dicha diagonal porque tuve un erorr de lógica que no me di cuenta hasta llegar en cuenta.

## Coveralls

Mencionar también que he hecho la instalación de coveralls aqui un ejemplo del informe generado

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101316734/badge.svg?branch=docs)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101316734?branch=docs)

## Conclusión

Esta práctica se ha dificlutado un poco no porque haya que utlizar cosas como el POO u objeto,si no más bien por intentar aplicar los principios SOLID y las interfaces.En especial hay algunas veces donde no he podido aplicar todos los principios por ejemplo el _Single responsibility principle_  donde tuve que hacer que una clase tenga más de una responsabilidad como en el Gestor de Bibliografia donde la propia clase hacia todo.

## Bibliografía

[Principios SOLID][SOLID]

[SOLID]:https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html

[Buscador tfg de la ull][ull]

[ull]:https://riull.ull.es/xmlui/handle/915/668

> Aqui busque un poco como serián los trabajos finales de grado

[Información extra de los interfaces][interface]

[interface]:https://www.typescriptlang.org/docs/handbook/interfaces.html
