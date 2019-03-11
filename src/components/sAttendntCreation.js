import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class sAttendntCreation extends Component {
    render() {
        return (
            <div>
                <header>
                    <div class="headers">
                        <h1 class="img-align">Store Manager</h1>
                    </div>
                </header>
                <div class="main-menu">
                    <NavLink to='/' class="active">Home</NavLink>
                    <NavLink to="#"> </NavLink>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>
                    <a href="#"> </a>

                </div>
                <div>
                    <input type="text" id="menuInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name" />
                </div>
                <table id="myDataTable">
                    <tr class="headers">
                        <th>First Name</th>
                        <th> </th>
                        <th>Last Name</th>
                        <th> </th>
                        <th>Email</th>
                        <th> </th>
                        <th>Store Attendant Id</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th>Edit/Delete</th>
                    </tr>
                    <tr>
                        <td>Jessica</td>
                        <td> </td>
                        <td>W</td>
                        <td> </td>
                        <td>Jessica1w@smapp.co.ke</td>
                        <td> </td>
                        <td>A2130</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Simion</td>
                        <td> </td>
                        <td>K</td>
                        <td> </td>
                        <td>Simion6k@smapp.co.ke</td>
                        <td> </td>
                        <td>T4631</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Terry</td>
                        <td> </td>
                        <td>M</td>
                        <td> </td>
                        <td>Terry76m@smapp.co.ke</td>
                        <td> </td>
                        <td>C0023</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Sharon</td>
                        <td> </td>
                        <td>Par</td>
                        <td> </td>
                        <td>Sharom89par@smapp.co.ke</td>
                        <td> </td>
                        <td>B2131</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Angie</td>
                        <td> </td>
                        <td>Sue</td>
                        <td> </td>
                        <td>Angie43Sue@smapp.co.ke</td>
                        <td> </td>
                        <td>B2145</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>

                </table>
                <form class="attcreation">
                    <NavLink to='inputsignup' class="button-main">New</NavLink>
                    <NavLink to="#" class="button-main">Save</NavLink>
                    <NavLink to="#" class="button-main">Clear</NavLink>
                    <NavLink to="#" class="button-main">Back</NavLink>
                </form>

                <footer class="temp-footer"><small>AC-33 &copy;2018</small>
                </footer>
            </div>
        )
    }
}

