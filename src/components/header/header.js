import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div>
            <div className="row header fixed-top">
                <div className="col-md-4">
                    <h2>History Media Search</h2>
                </div>
                <div className="col-md-5">
                </div>
                <div className="col-md-3">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle menu" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
  </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header