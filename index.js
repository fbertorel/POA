const database = require("./db");



function selectAll(table){
    selectAll = database.selectAllFrom(table);
    return selectAll;
}

function selectById(table, condition){
    select1 = database.selectFrom(table, condition);
    return select1;
}

function selectPointsUser(userId){
    pointsByUser = database.selectPoints("usuario", `${userId}`);
    return pointsByUser;
}

async function exchangeProduct(userId, productId){
    const resp = await database.verificarPuntos(userId, productId)
    return resp;
}


async function createUser(firstname, lastname, email, points){
    const resp = await database.createUser(firstname, lastname, email, points)
    return resp;
}

async function createProduct(name, description,points,brand){
    const resp = await database.createProduct(name, description,points,brand)
    return resp;
}

async function setProduct(productId, name, description,points,brand){
    const resp = await database.setProducto(productId, name, description,points,brand)
    return resp;
}

async function deleteProduct(productId){
    const resp = await database.deleteProducto(productId)
    return resp;
}

async function exchangeHistory(userId){
    const resp = await database.selectProductByUser(userId)
    return resp;
}



/* TEST REALIZADOS PARA PROBAR FUNCIONES INDIVIDUALES
//exchangeHistory(1).then(console.log)
//createUser("Alberto","Felisoni","alb@yahoo.com.ar", 36).then(console.log)
//setProduct("SmartTV", "55 pulgadas", 130, "LG", 6).then(console.log)
//createProduct("TV", "22 pulg", 80, "Banghio").then(console.log);
// test = exchangeProduct(1,1);
// test.then(console.log)
//exchangeProduct(1,1)
// select1 = selectUserById("usuario",3)
// select1.then(console.log)
// points = selectPointsUser()
// points.then(console.log)
*/

module.exports = { createUser, selectAll, selectById, selectPointsUser, exchangeProduct, createProduct, setProduct, deleteProduct, exchangeHistory };



