# React + TypeScript – Documentación de Arquitectura Técnica

Este documento describe cómo se han aplicado las características avanzadas de TypeScript en una aplicación React real, con el objetivo de mejorar la seguridad de tipos, reducir errores en tiempo de ejecución y facilitar la reutilización y el mantenimiento del código.

El enfoque de esta documentación no es describir React en sí, sino explicar cómo TypeScript aporta ventajas claras frente a JavaScript tradicional dentro de este proyecto.

---

## 1. Uso de Genéricos (`<T>`)

Uno de los elementos principales del proyecto es el uso de genéricos en el componente `DataTable<T>`. Este componente ha sido diseñado para mostrar datos tabulares sin estar acoplado a un modelo concreto.

### Problema en JavaScript
En JavaScript, un componente de tabla suele aceptar cualquier array de objetos. Esto implica que:
- No existe garantía de que las propiedades a las que se accede realmente existan.
- Errores como `undefined` o accesos a propiedades incorrectas solo se detectan en tiempo de ejecución.
- El componente depende implícitamente del modelo de datos.

### Solución con TypeScript
Gracias al uso de genéricos (`<T>`), el componente:
- Se adapta dinámicamente al tipo de datos que recibe.
- Conoce en todo momento las propiedades válidas del modelo.
- Utiliza `keyof T` para asegurar que las columnas definidas siempre hacen referencia a propiedades existentes.

Esto permite crear un componente completamente reutilizable y seguro, evitando errores comunes de acceso a datos inexistentes.

---

## 2. Tipos Utilitarios: `Partial<T>`

Durante la edición de datos se ha empleado el tipo utilitario `Partial<T>` para representar el estado intermedio de un formulario.

### Problema en JavaScript
En aplicaciones JavaScript es habitual:
- Manipular objetos parcialmente definidos.
- Asumir que todas las propiedades existen.
- Provocar errores cuando se accede a campos aún no inicializados.

### Solución con TypeScript
El uso de `Partial<Servidor>` permite:
- Representar de forma explícita que un objeto puede no contener todas las propiedades.
- Forzar comprobaciones antes de acceder a los datos.
- Evitar el uso de `any` o estados inconsistentes.

Este patrón es especialmente útil en formularios de edición y creación, donde los datos se completan progresivamente.

---

## 3. Uniones Discriminadas (`EstadoServidor`)

Para modelar el estado operativo del sistema se ha utilizado una unión discriminada en lugar de valores sueltos.

```ts
type EstadoServidor =
  | { tipo: "ACTIVO" }
  | { tipo: "INACTIVO"; motivo: string };

En conjunto, las decisiones tomadas en este módulo reflejan un enfoque orientado a la prevención de errores antes de que el código llegue a ejecutarse. El uso de genéricos, tipos utilitarios, uniones discriminadas y análisis exhaustivo permite trasladar gran parte de la lógica de validación al compilador.

A diferencia de una implementación equivalente en JavaScript, donde muchos de estos errores solo aparecerían en tiempo de ejecución, TypeScript actúa aquí como una herramienta de validación temprana, mejorando la fiabilidad de la aplicación y facilitando su evolución a largo plazo.

Este módulo demuestra cómo el uso correcto del sistema de tipos de TypeScript en React permite desarrollar aplicaciones más seguras, mantenibles y cercanas a los estándares utilizados en proyectos profesionales.
