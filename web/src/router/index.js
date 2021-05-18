import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './routes'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ListItens from '../pages/ListItens'
import AddItem from '../pages/AddItem'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={ListItens} isPrivate/>
        <Route path="/additem" component={AddItem} isPrivate/>
    </Switch>
)

export default Routes