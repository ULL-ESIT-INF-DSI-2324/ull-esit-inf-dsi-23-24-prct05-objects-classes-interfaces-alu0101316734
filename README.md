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

el resto heredaŕan la clase anterior dada pero con su referente especialidad,por ejemplo,`Articulo` es una clase que heredará de la clase base anterior dada y añadiran sus atributos correspondientes.Además se añadiran la función  `print` que se ultiliza para imprimir por columnas la variable anterior que almacena los elemntos comunes  además de  los atributos especificos de cada clase.

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

Para imprimir por coulmnas hice los siguete 

```ts
 const recopilacionCompleta = this.getrecopilacion();
  console.table(recopilacionCompleta.map(trabajo => [...trabajo, this.volumen[0], this.revista[0]]));
```

en este caso llamamos a `console.table` en la cual usamos `map` en la variable de  get que devuelve todos los atributos en comun y  añadimos al vector los atributos nuevos que en este caso en `volumen` y `revista`.

## Ejercicio 2 - Menu Saludable con porgramación oreintada a objetos



## Coveralls

Meniconar tmabién que he hecho la instalación de coveralls aqui un ejemplo del informe generado

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101316734/badge.svg?branch=docs)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct05-objects-classes-interfaces-alu0101316734?branch=docs)
