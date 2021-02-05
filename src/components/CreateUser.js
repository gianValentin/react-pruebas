import axios from 'axios'
import React, { Component } from 'react'

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

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form >
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={this.buscarUser} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map((user, i) => (
                                <li className="list-group-item list-group-item-action" key={i}>
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
