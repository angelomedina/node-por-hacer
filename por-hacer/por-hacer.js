const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }
}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new Error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const getListado = () => {

    try {

        listadoPorHacer = require('../db/data.json');

        return listadoPorHacer;

    } catch (error) {

        listadoPorHacer = [];

    }
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    });

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    });

    if (index >= 0) {

        listadoPorHacer.splice(index, 1);

        guardarDB();
        return true;

    } else {

        return false;

    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}