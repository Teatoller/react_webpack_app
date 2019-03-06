import React, { Component } from 'react'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <div class="headers">
                        <h1 class="img-align">Store Manager</h1>
                    </div>
                </header>
                <div class="main-menu">
                    <a href="#" class="active">Home</a>
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
                <footer class="temp-footer"><small>AC-33 &copy;2018</small>
                </footer>
            </div>
        )
    }
}

