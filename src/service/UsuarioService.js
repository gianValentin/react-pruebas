import axios from "axios"

export const obtenerUsuarios = async () => {
    return await axios.get('http://localhost:8080/api/usuarios')
}

export const guardarUsuario = async (usuario) => {
    return await axios.post('http://localhost:8080/api/usuario',usuario)
}