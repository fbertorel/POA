# TPPOA
Trabajo Practico Programacion de Objetos Avanzada - UP

Franco Bertorello

Para correr el proyecto
```bash
node servergraphql.js
```

El archivo [graphql querys&mutations.txt](https://github.com/fbertorel/POA/blob/main/graphql%20querys%26mutations.txt) tiene ejemplos de como realizar las query y las mutations.

En [/db config](https://github.com/fbertorel/POA/tree/main/db%20config) se tiene un backup de la base de datos. Esta se puede cargar a traves de pgAdmin 4 (Postgres)

## Sistema de gestión de premios por fidelidad

- Los usuarios tienen que tener un nombre, apellido y puntos.
- Los productos tienen que tener un nombre, descripcion y puntos.

## Consideraciones tecnicas

### Postgres
- Se utiliza Postgres para la base de datos SQL.

### Node Js
- Se utiliza Nodejs para el proyecto. Los paquetes utilizados se encuentran dentro de package.json

### GraphQL
- Se usa esta interfaz para realizar consultas y manipulas los datos.
