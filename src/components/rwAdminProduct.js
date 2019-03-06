import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class rwAdminProduct extends Component {
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
                    <a href="#"> </a>
                    <a href="#"> </a>
                </div>
                <div>
                    <input type="text" id="menuInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name" />
                </div>
                <table id="myDataTable">
                    <tr class="headers">
                        <tr class="header">
                            <th>Category Name</th>
                            <th>Product Name</th>
                            <th>Barcode</th>
                            <th>Purchase Rate</th>
                            <th>Unit Price</th>
                            <th>Opening Stock</th>
                            <th>Minimum Stock</th>
                            <th>Available Stock</th>
                            <th>Free Qty</th>
                            <th>Base Qty</th>
                            <th>Edit/Delete</th>
                        </tr>
                        <tr>
                            <td>Bread</td>
                            <td>Premier 500g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Milk</td>
                            <td>Tuzo 300ml</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Tea Leaves</td>
                            <td>Baraka 30g</td>
                            <td>60.00</td>
                            <td>62.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Tooth Paste</td>
                            <td>Colgate 20g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>Kahawa 250g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Cooking Oil</td>
                            <td>Elianto 5Lt</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Tooth Paste</td>
                            <td>Colgate 20g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>Kahawa 250g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>Kahawa 250g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Cooking Oil</td>
                            <td>Elianto 5Lt</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Tooth Paste</td>
                            <td>Colgate 20g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                        <tr>
                            <td>Coffee</td>
                            <td>Kahawa 250g</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>0.00</td>
                            <td>Edit/Delete</td>
                        </tr>
                    </tr>
                </table>
                <form class="attcreation">
                    <NavLink to="#" class="button-main">Add</NavLink>
                    <NavLink to="#" class="button-main">Edit</NavLink>
                    <NavLink to="#" class="button-main">Delete</NavLink>
            </form>
                <footer class="temp-footer"><small>AC-33 &copy;2018</small>
                </footer>
            </div>
        )
    }
}
