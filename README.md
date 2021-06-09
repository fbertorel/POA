# TPPOA
Trabajo Practico Programacion de Objetos Avanzada - UP

**Franco Bertorello**

---
- Para correr el programa:
```bash
node servergraphql.js
```

## Sistema de gestión de premios por fidelidad

- Los usuarios tienen que tener un nombre, apellido y puntos.
- Los productos tienen que tener un nombre, descripcion y puntos.

## Se podra:
+ **Crear**:
    + Usuarios
    + Productos 
- Modificar un producto.
- Eliminar un producto.
- Canjear productos.
----
+ **Consultar**:
  + Usuarios y productos.
  + Los puntos de un usuario.
  + El historial de canjes de un usuario.

## Consideraciones tecnicas

### Postgres
- Se utiliza Postgres para la base de datos SQL.

### Node Js
- Se utiliza Nodejs para el proyecto. Los paquetes utilizados se encuentran dentro de package.json
 
### GraphQL
- Se usa esta interfaz para realizar consultas y manipular los datos.
