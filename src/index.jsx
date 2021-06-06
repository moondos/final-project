import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import store from "./redux/store.js";
import { Provider } from "react-redux";

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import { Main } from './components/Main';
import UserCreateContainer from './components/UserCreate/UserCreateContainer.jsx';
import UserAuthContainer from './components/UserAuth/UserAuthContainer.jsx';
import ReportContainer from './components/Report/ReportContainer.jsx';
import ReportListContainer from './components/ReportList/ReportListContainer.jsx';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <HeaderContainer />
                <div className="main">
                    <div className="container">
                        <Switch>
                            <Route path="/" component={Main} exact={true}/>
                            <Route path="/create" component={UserCreateContainer} exact={true}/>
                            <Route path="/auth" component={UserAuthContainer} exact={true}/>
                            <Route path="/report" component={ReportContainer} exact={true}/>
                            <Route path="/report-list" component={ReportListContainer} exact={true}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'),
);