import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="headers">
                        <h1 className="img-align">Store Manager</h1>
                    </div>
                </header>
                <div className="main-menu">
                    <NavLink to='/' id="link">Home</NavLink>
                    <NavLink to='vwOnlyBarcode'>Product by Barcode</NavLink>
                    <NavLink to='rwAdminProduct'>AdminProduct</NavLink>
                    <NavLink to='vwAdminStoreAttendants'>Store Attendant</NavLink>
                    <NavLink to='vwOnlyBillno'>Product by Bill no</NavLink>
                    <NavLink to='vwOnlyCategory'>Product by Category</NavLink>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <NavLink to='/login' id="link">Login</NavLink>
                </div>
                <footer className="temp-footer"><small>AC-33 &copy;2018</small>
                </footer>
            </div>
        )
    }
}

export default HomeComponent;
