const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            //demand = oblgatorio
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una rarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la actualizacion de la tarea'
        },
        completado: {
            demand: true,
            alias: 'c',
            desc: 'Marca como completada o pendiente la tarea'
        }
    })
    .command('borrar', 'Elimina un elemento de la BD', {
        descripcion: {
            //demand = oblgatorio
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}