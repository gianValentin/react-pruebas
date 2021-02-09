import React, { useState, useEffect } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { guardarUsuario, obtenerUsuarios } from "../service/UsuarioService";


export default function CreateUserShop() {

    const [usuario, setUsuario] = useState({ usuario: '', nombre: '', apellidos: '', contraseña: '' });
    const [usuarios, setUsuarios] = useState([])

    const textChange = event => setUsuario({ ...usuario, [event.target.name]: event.target.value });



    const listarUsuarios = async () => {
        const res = await obtenerUsuarios()        
        setUsuarios(res.data)
    }

    const guardarUsuarioForm = async () => {
        await guardarUsuario(usuario)
        listarUsuarios()
        setUsuario({ usuario: '', nombre: '', apellidos: '', contraseña: '' })
    }

    const newUserShop = (e) => {
        e.preventDefault()        
        guardarUsuarioForm()
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="car card-body">
                    <h3 className="title">Create User Shop</h3>
                    <form onSubmit={newUserShop}>
                        <Grid container justify="space-between" spacing={1} alignItems="center">
                            <Grid item xs={12}>
                                <TextField label="Usuario" variant="outlined" size="small"
                                    name="usuario"
                                    value={usuario.usuario}
                                    onChange={textChange}
                                    validators={['required', 'isEmail']}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Nombre" variant="outlined" size="small" name="nombre" value={usuario.nombre} onChange={textChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Apellido" variant="outlined" size="small" name="apellidos" value={usuario.apellidos} onChange={textChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Contraseña" variant="outlined" size="small" name="contraseña" value={usuario.contraseña} onChange={textChange} type="password" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="sumit" variant="outlined" color="primary" >Guardar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {
                        usuarios.map((user, i) => (
                            <li className="list-group-item list-group-item-action" key={i}>
                                {user.usuario} | {user.nombre} | {user.apellidos} | {user.contraseña}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}
