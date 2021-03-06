import axios from 'axios'
import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

export default class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            userName: ''
        }
    }

    async componentDidMount() {
        const res = await axios.get('https://rickandmortyapi.com/api/character');
        this.setState({ users: res.data.results })
    }

    buscarUser = (e) => {
        this.setState({ userName: e.target.value })
    }

    buscarUser = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.buscarUser}>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.buscarUser} />
                            </div>
                            <Grid container justify="space-between" spacing={1} alignItems="center">
                                <Grid item xs={8}>
                                    <TextField id="standard-basic" label="Standard" variant="outlined" size="small"/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="outlined" color="primary" >Buscar</Button>
                                </Grid>
                            </Grid>
                            {/* <button type="submit" className="btn btn-primary">Buscar</button> */}
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map((user, i) => (
                                <li className="list-group-item list-group-item-action" key={i}>
                                    <Avatar alt={user.name} src={user.image} />
                                    {user.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
