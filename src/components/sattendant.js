import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class sattendant extends Component {
  render() {
    return (
      <div>
        <header>
        <div class="headers">
            <h1 class="img-align">Store Manager</h1>
        </div>
    </header>
    <div class="main-menu">
    < NavLink to='/' class="active">Home</ NavLink>
    <NavLink to='pos'> </NavLink>
    <NavLink to='vwOnlySales'> </NavLink>
    <a href="#"> </a>
    <a href="#"> </a>
    <a href="#"> </a>
    <a href="#"> </a>
    <a href="#"> </a>
     <a href="#"> </a>
    <a href="#"> </a>
    <a href="#">Help</a>
    </div>
    <footer class="temp-footer"><small>AC-33 &copy;2018</small>
    </footer>
      </div>
    )
  }
}
