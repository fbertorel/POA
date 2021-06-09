const { json, response } = require('express');
const { Client } = require('pg');

/* Configuracion de Postgres */

const client = new Client( {
    host: "",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "postgres"
})

client.connect();

async function selectAllFrom(table) {
    try {    
        const res = await client.query(
        `SELECT * FROM ${table}`
    );   
      return res.rows;      //res.rows[0]["firstname"]; devuelve Franco y res.rows[0]; devuelve {firstname: 'Franco'}      
    } catch (err) {
      return err.stack;
    }
  }

async function selectFrom(table, condition) {
    try {
        const res = await client.query(
            `SELECT * FROM ${table} WHERE id = ${condition}`
      );
      return res.rows[0];      
    } catch (err) {
      return err.stack;
    }
  }

async function selectPoints(table, condition) {
    try {
        const res = await client.query(
            `SELECT points FROM ${table} WHERE id = ${condition}`
        );
    return res.rows[0]["points"];      
    } catch (err) {
      return err.stack;
    }
  }

async function exchange(user, product) {
    try {
        const res = await client.query(
            `INSERT INTO exchange ( id_usuario_fk, id_producto_fk) VALUES (${user},${product})`
      );      
    } catch (err) {
        return err.stack;
    }
  }

async function setPoints(user, points) {
    try {
        const res = await client.query(
            `UPDATE usuario SET points = ${points} WHERE id = ${user}`
        );
  } catch (err) {
    return err.stack;
  }
}

async function verificarPuntos(userId, prodId) {
    try {
        const puntosuser = await selectPoints("usuario", `${userId}`);
        //console.log("puntos usuario: ", puntosuser)
        const puntosprod = await selectPoints("producto", `${prodId}`);
        //console.log("puntos producto",puntosprod)
        if (puntosuser >= puntosprod){
            const puntosNuevosUser = (puntosuser - puntosprod);
            //console.log("PUEDO COMPRAR PORQUE TENGO PUNTOS")
            const res = await exchange(userId, prodId);
            const upd = await setPoints(userId, puntosNuevosUser);
            texto = `El usuario ${userId} canjeo el producto ${prodId}. Todavia tiene ${puntosNuevosUser} puntos.`;
            return texto;            
        }
        else {
            return `El usuario ${userId} no tiene puntos suficientes para canjear el producto ${prodId}. Tiene ${puntosuser} puntos y necesita ${puntosprod} puntos.`
        }
    } catch (err) {
        return err.stack;
    }
  }
async function createUser(firstname, lastname, email, points) {
    try {
        //console.log("nombre: ", firstname)
        //console.log("apellido: ", lastname)
        //console.log("mail: ", email)
        //console.log("puntos: ",points)
        texto = `Se agrego el usuario con exito`;
        //console.log(`INSERT INTO usuario (firstname, lastname, email, points) VALUES ('${firstname}','${lastname}','${email}',${points})`);
        const res = await client.query(
            `INSERT INTO usuario (firstname, lastname, email, points) VALUES ('${firstname}','${lastname}','${email}',${points})`
      );
        return texto;
    } catch (err) {
      return err.stack;
    }
  }

async function createProduct(name, description,points,brand) {
    try {
        texto = "Se agrego el producto con exito"
        const res = await client.query(
            `INSERT INTO producto (name, description, points, brand) VALUES ('${name}','${description}',${points},'${brand}')`
      );
        return texto;
    } catch (err) {
      return err.stack;
    }
  }

async function setProducto(productId, name, description, points, brand) {
    try {
        const res = await client.query(
            `UPDATE producto SET name = '${name}', description = '${description}', points = '${points}', brand = '${brand}' WHERE id = ${productId}`
        );
        texto = `Se actualizo producto ${productId}`
        return texto;
  } catch (err) {
    return err.stack;
  }
}

async function deleteProducto(productId) {
    try {
        const res = await client.query(
            `DELETE FROM producto WHERE id = ${productId}`
        );
        texto = `Se elimino producto producto ${productId}`
        return texto;
  } catch (err) {
    return err.stack;
  }
}

async function selectProductByUser(userId) {
    try {
        const res = await client.query(
            `SELECT * FROM exchange WHERE id_usuario_fk = ${userId}`
        );
        return res.rows; 
  } catch (err) {
    return err.stack;
  }
}
//selectProductByUser(1).then(console.log);

/* TEST REALIZADOS PARA PROBAR FUNCIONES INDIVIDUALES
//setProducto(6, "SmartTV", "55 pulgadas", 130, "LG").then(console.log)
//ver = Promise.resolve(verificarPuntos(1,2));
//console.log(ver)
//ver.then(console.log)
//createProduct("TV", "32 pulg", 150, "Samsung");
//selectAllFrom("usuario").then(console.log)
//createUser("Alberto","Felisoni","alb@yahoo.com.ar", 36)
//exchange(2,3)
//verificarPuntos(1,1);
// const select1 = Promise.resolve(selectFrom("usuario", "3"))
// select1.then(selectFrom("usuario", "3"))
// console.log(select1)
//select1.then(console.log);
*/

module.exports = { selectAllFrom, selectFrom, selectPoints, exchange, verificarPuntos, createUser, createProduct, setProducto, deleteProducto, selectProductByUser };

