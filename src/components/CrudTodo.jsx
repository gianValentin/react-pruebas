import React, {useState} from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { agregarTarea, borrarTarea, editarTarea } from '../actions/todoAction'

const CrudTodo = () => {

    const tareas = useSelector(state => state.todo)    
    const dispatch = useDispatch()

    const [nombre, setNombre] = useState('')

    const guardar = (event) => {
        event.preventDefault();        
        dispatch(agregarTarea(event.target.nombre.value))
        event.target.nombre.value = ''
    }

    const remove = (id) => {
        dispatch(borrarTarea(id));
    }

    const edit = (value) => {
        dispatch(editarTarea(value));
    }

    return (
        <div>
            <form onSubmit={(event) => { guardar(event) }}>
                <input type="text" name="nombre"/>
                <button>Guardar</button>
            </form>
            <div>
                <ul>
                    {
                        tareas.map(value => {
                            return <li key={value.id}>
                                {value.nombre}
                                <button onClick={() => {edit(value)}}>Editar</button>
                                <button onClick={() => {remove(value.id)}}>Borrar</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CrudTodo
