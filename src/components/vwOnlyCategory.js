import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class vwOnlyCategory extends Component {
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
    <a href="vwOnlySales.html"> </a>
    <a href="vwOnlyCategory.html"> </a>
    <a href="vwOnlyBarcode.html"> </a>
    <a href="vwOnlyDate.html"> </a>
    <a href="vwOnlyBillno.html"> </a>
    <a href="vwOnlyType.html"> </a>
    <a href="vwOnlyStoreAttendant.html"> </a>
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
            <th>Category Name</th>
            <th>Product Name</th>
            <th>Barcode</th>
            <th> </th>
            <th>Bill No</th>
            <th> </th>
            <th>Date & Time</th>
            <th> </th>
            <th>Total Amount</th>
            <th>Store Attendant Id</th>
            <th>Type</th>
        </tr>
        <tr>
            <td>Coffee</td>
            <td>Nescafe 250g</td>
            <td>02000775995</td>
            <td> </td>
            <td>BS74589</td>
            <td> </td>
            <td> 10-10-2018</td>
            <td>0.00</td>
            <td>109.00</td>
            <td>A2130</td>
            <td>Mpesa</td>
        </tr>
        <tr>
            <td>Coffee</td>
            <td>Kahawa No1 200g</td>
            <td>02000776590</td>
            <td> </td>
            <td>BS00582</td>
            <td> </td>
            <td> 11-10-2018</td>
            <td>0.00</td>
            <td>220.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Milk</td>
            <td>Brookside 500ml</td>
            <td>03000775989</td>
            <td> </td>
            <td>BS95402</td>
            <td> </td>
            <td> 08-10-2018</td>
            <td>0.00</td>
            <td>60.00</td>
            <td>A2130</td>
            <td>Card</td>
        </tr>
        <tr>
            <td>Coffee</td>
            <td>Nescafe 50g</td>
            <td>02000775965</td>
            <td> </td>
            <td>BS54111</td>
            <td> </td>
            <td> 10-10-2018</td>
            <td>0.00</td>
            <td>109.00</td>
            <td>A2130</td>
            <td>Card</td>
        </tr>
        <tr>
            <td>Detergent</td>
            <td>Sunlight 400g</td>
            <td>02000776333</td>
            <td> </td>
            <td>BS00580</td>
            <td> </td>
            <td> 11-10-2018</td>
            <td>0.00</td>
            <td>120.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Milk</td>
            <td>Tuzo 300ml</td>
            <td>03000775005</td>
            <td> </td>
            <td>BS21217</td>
            <td> </td>
            <td> 07-10-2018</td>
            <td>0.00</td>
            <td>55.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Detergent</td>
            <td>Sunlight 50g</td>
            <td>02312776333</td>
            <td> </td>
            <td>BS00580</td>
            <td> </td>
            <td> 10-10-2018</td>
            <td>0.00</td>
            <td>15.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Milk</td>
            <td>Fresha 300ml</td>
            <td>03000775065</td>
            <td> </td>
            <td>BS28047</td>
            <td> </td>
            <td> 07-10-2018</td>
            <td>0.00</td>
            <td>55.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Detergent</td>
            <td>Sunlight 400g</td>
            <td>02000776333</td>
            <td> </td>
            <td>BS00580</td>
            <td> </td>
            <td> 11-10-2018</td>
            <td>0.00</td>
            <td>120.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Milk</td>
            <td>Tuzo 300ml</td>
            <td>03000775005</td>
            <td> </td>
            <td>BS21217</td>
            <td> </td>
            <td> 07-10-2018</td>
            <td>0.00</td>
            <td>55.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Detergent</td>
            <td>Sunlight 50g</td>
            <td>02312776333</td>
            <td> </td>
            <td>BS00580</td>
            <td> </td>
            <td> 10-10-2018</td>
            <td>0.00</td>
            <td>15.00</td>
            <td>A2130</td>
            <td>Cash</td>
        </tr>
        <tr>
            <td>Milk</td>
            <td>Fresha 300ml</td>
            <td>03000775065</td>
            <td> </td>
            <td>BS28047</td>
            <td> </td>
            <td> 07-10-2018</td>
            <td>0.00</td>
            <td>55.00</td>
            <td>A2131</td>
            <td>Cash</td>
        </tr>


    </table>

    <footer class="temp-footer"><small>AC-33 &copy;2018</small>
    </footer>
      </div>
    )
  }
}
