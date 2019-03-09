# Operaciones matematicas

Modulo para realizar operaciones matematicas simples

## Instalación
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
// [ 0.6180339887498949, -1.618033988749895 ]
```