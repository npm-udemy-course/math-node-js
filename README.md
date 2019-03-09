# Operaciones matematicas

Modulo para realizar operaciones matematicas simples

# Contribuir en el proyecto

Para contribuir en el proyecto tienes que tener en cuenta las siguientes normas.

Esta librería se ha creado con el objetivo que los usuarios que quieran dar sus primeros pasos contribuyendo en un proyecto Open Source, puedan hacerlo sin miedo y pudiendo hacer las funcionalidades que quieran añadir, corregir los errores, abriendo issues,...

# Lista de funcionalidades a añadir a la librería

A continuación os dejo las funcionalidades que se han propuesto aunque está abierto a sugerencias de nuevas funcionalidades para la librería e ir contribuyendo

## Operaciones Básicas
* [X] Suma
* [X] Resta
* [X] Multiplicación
* [X] División
* [ ] Resto de una división
* [ ] Par / Impar
* [ ] Valor absoluto
* [ ] Valor de un porcentaje de una cantidad
* [ ] Teniendo una cantidad decir el porcentaje de ese valor
* [ ] Número positivo / negativo
* [ ] Introducir dos números y decir cual es el mayor, menor o si son iguales

## Ecuaciones
* [ ] Ecuación de primer grado
* [X] Ecuación de segundo grado

## Superficies
* [ ] Área del triángulo => (BASE * ALTURA) / 2
* [ ] Perimetro del triángulo => Suma de los tres lados
* [ ] Área del Rectángulo => (BASE * ALTURA)
* [ ] Perímetro del Rectángulo => 2 * (BASE + ALTURA)
* [ ] Área del Círculo => pi * radio ^ 2 (al cuadrado)
* [ ] Perímetro del Círculo => 2 * pi * radio

## Funciones
* [ ] Calcular el factorial
* [ ] ¿Es número primo?
* [ ] Secuencia
## Instalación (del repositorio de Github)
Seguir estas instrucciones

```
npm install npm-udemy-course/math-node-js
```

# Uso
Seguir estas instrucciones

```
// Importar el modulo
const m = require('./operations/basic');
const q = require('./functions/quadratic-functions');

// Sumas
console.log(m.suma(1,2));

console.log(m.suma(1,2));

console.log(m.suma(true,2));

// Resta
console.log(m.resta(11,24));
console.log(m.resta(1,2));

// Multiplicacion
console.log(m.multiplicacion(1,24));
console.log(m.multiplicacion('eeee','fhfjkdd'));

// Ecuación de 2º grado
console.log(q.quadraticFunctionSolver(1, 1, -1));
// * [ 0.6180339887498949, -1.618033988749895 ]
```