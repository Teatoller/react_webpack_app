import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ScreenSaver from './ScreenSaver';
import login from './login';
import rwAdminProduct from './rwAdminProduct';
import sAttendntCreation from './sAttendntCreation';
import vwAdminStoreAttendants from './vwAdminStoreAttendants';
import vwOnlyBarcode from './vwOnlyBarcode';
import vwOnlyBillno from './vwOnlyBillno';
import vwAdmin from './vwAdmin';
import vwOnlyCategory from './vwOnlyCategory';
import '../public/css/style.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                    <Route exact={true} path='/' component={HomeComponent} />
                    <Route exact path='/screenSaver' component={ScreenSaver} />
                    <Route exact path='/login' component={login} />
                    <Route exact path='/rwAdminProduct' component={rwAdminProduct} />
                    <Route exact path='/sAttendntCreation' component={sAttendntCreation} />
                    <Route exact path='/vwAdminStoreAttendants' component={vwAdminStoreAttendants} />
                    <Route exact path='/vwOnlyBarcode' component={vwOnlyBarcode} />
                    <Route exact path='/vwOnlyBillno' component={vwOnlyBillno} />
                    <Route exact path='/vwAdmin' component={vwAdmin} />
                    <Route exact path='/vwOnlyCategory' component={vwOnlyCategory} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
