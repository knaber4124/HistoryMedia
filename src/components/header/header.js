import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            authorized: false
        }
    }


    render() {
        const userAuth = this.state.authorized
        return (
            < div >
                <div className="row header fixed-top">
                    <div className="col-md-4">
                        <h2>History Media Search</h2>
                    </div>
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-3">
                        <div className="btn-group">
                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
  </button>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/">Home</Link>
                                <Link className="dropdown-item" to="/search">Search</Link>
                                <Link className="dropdown-item" to="/favorites">Favorites</Link>
                                <Link className='dropdown-item' to='/add'>Add New</Link>
                                <div className="dropdown-divider"></div>
                                {userAuth
                                    ? <a className="dropdown-item" href="#">Log Out</a>
                                    : <Link className="dropdown-item" to="/login">Log In</Link>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}

export default Header