const AGREGAR = 'AGREGAR';
const BORRAR = 'BORRAR';
const EDITAR = 'EDITAR';

export const agregarTarea = (value) => ({
    type: AGREGAR,
    data: {
        id: Math.random(),
        nombre: value
    }
})

export const borrarTarea = (id) => ({
    type: BORRAR,
    id
})

export const editarTarea = (value) => ({
    type: EDITAR,
    data: value
})