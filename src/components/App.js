import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Login from './Login'
import Register from './Register'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/Header' component={Header}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Register' component={Register}/>
        </BrowserRouter>
        )
    }
}

export default (App)