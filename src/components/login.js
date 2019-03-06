import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div>
                <header>
                    <div class="header">
                        <h1 class="img-align">Store Manager</h1>
                    </div>
                </header>
                <div class="containerlog">
                    <p id="loginStatus"></p>
                    <form name="loginForm" id="loginForm">
                        <label for="Username">Username:</label>
                        <br />
                        <input type="text" name="username" placeholder="Enter Username" />
                        <br />
                        <label for="password">Password:</label>
                        <br />
                        <input type="password" name="password" placeholder="Password" />
                        <br />
                        <button type="submit" id="login" class="button">Login</button>
                        <a href="scrnsvr.html" class="button">Exit</a>
                    </form>
                </div>
                <footer class="containerfooter">
                    <small>AC-33 Copyright &copy;2018</small>
                </footer>
            </div>
        )
    }
}

