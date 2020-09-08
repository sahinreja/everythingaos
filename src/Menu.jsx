import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Html from './Html'
import Css from './Css'
import Bootstrap from './Bootstrap'
import Login from './Login'
import Signup from './Signup'
import Javascript from './Javascript'
import Forgetpassword from './Forgetpassword'
import Reactjs from './Reactjs'
import Php from './Php'
import Vuejs from './Vuejs'





const Menu =()=>{
    return(
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/html" component={Html} />
            <Route exact path="/css" component={Css} />
            <Route exact path="/bootstrap" component={Bootstrap} />
            <Route exact path="/javascript" component={Javascript} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgetpassword" component={Forgetpassword} />
            <Route exact path="/php" component={Php} />
            <Route exact path="/reactjs" component={Reactjs} />
            <Route exact path="/vuejs" component={Vuejs} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}
export default Menu;