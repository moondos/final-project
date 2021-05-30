import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { UsersList } from './components/UsersList';
import { UserCreate } from './components/UserCreate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



export class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={UsersList} exact={true}/>
                    <Route path="/create" component={UserCreate} exact={true}/>
                </Switch>
                
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>, 
    document.getElementById('root'),
);