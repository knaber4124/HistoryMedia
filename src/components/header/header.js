import React, { Component } from 'react'
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
                                <a className="dropdown-item" href="#">Search</a>
                                <a className="dropdown-item" href="#">Favorites</a>
                                <div className="dropdown-divider"></div>
                                {userAuth
                                    ? <a className="dropdown-item" href="#">Log Out</a>
                                    : <a className="dropdown-item" href="/login">Log In</a>
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