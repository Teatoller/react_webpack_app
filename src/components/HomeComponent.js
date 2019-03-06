import React, { Component } from 'react'

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
                    <a href="#" className="active">Home</a>
                    <a href="vwAdmin.html">Admin</a>
                    <a href="sattendant.html">Store Attendant</a>
                    <a href="vwSocketGenInventory.html">Reports</a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                </div>
                <footer className="temp-footer"><small>AC-33 &copy;2018</small>
                </footer>
            </div>
        )
    }
}

export default HomeComponent;
