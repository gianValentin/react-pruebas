import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { busquedaAsc } from '../actions/climaAction'

const Clima = () => {

    const resultados = useSelector(state => console.log("Resultados: ",state))
    const dispatch = useDispatch()

    const buscarClima = (event) => {
        event.preventDefault();
        dispatch(busquedaAsc(event.target.ciudad.value));
        console.log("GIan Buscando Clima: ",event.target.ciudad.value)
    }

    return (
        <div>
            <h1>Clima</h1>
            <form onSubmit={(event) => {buscarClima(event)}}>
            <input type="text" name="ciudad"/>
            <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Clima


