# WeworkFake

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How was made it
Se realiza maqueta versión responsive, se añade estilos de fuente a nivel global, se crea también carpeta para imágenes,
Utiliza un routing para que todos los paths redirijan al home. 
En App se crean componentes necesarios para la maqueta.

Header y Footer se definen globalmente para que no cambien con el routing
Home: Único component principal. 

lookingFor: componente hijo de home para rendering de lista proveniente de home, sección que estás buscando ? 
Consiste en recibir mediante Input() desde el padre la data para que el componente sólo sea renderizar. 

News-one: Primera sección de noticias, esta sección un Input() de lista el cual recibe del padre HOME, la lista con todo lo necesario para el rendering.
El mismo componente habilita o deshabilita clases de SCSS dependiendo de que tipo de información se quiere mostrar. 

Nota: En el footer también se utiliza iterador en el HTML para renderizar más fácil las secciones de links rápidos.  

Librerías externas utilizadas: 
Swiper para la creación del carrousel

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
