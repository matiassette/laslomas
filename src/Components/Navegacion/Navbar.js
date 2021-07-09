import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
    <div>               
        <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
            <div ClassName="container-fluid">
                <Link to='/'>
                    <img src='./laslomas' alt="50" />
                </Link>
                <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse" id="navbarNav">
                    <ul ClassName="navbar-nav">
                        <li ClassName="nav-item">
                        <Link ClassName="nav-link active" to='/'>Login</Link>
                        </li>
                        <li ClassName="nav-item">
                        <Link ClassName="nav-link" to='/Registro'>Registro</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar
