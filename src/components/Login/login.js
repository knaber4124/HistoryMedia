import React, { Component } from 'react'
import './login.css'
import { render } from '@testing-library/react'

class Login extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h1>This will be the Login Screen</h1>
            </div>
        )
    }
}

export default Login