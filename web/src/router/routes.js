import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {store} from '../store'

const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest
}) => {
    const signed = store.getState().auth.signed

    if(!signed && isPrivate){
        return <Redirect to="/"/>
    }
        
    if(signed && !isPrivate)
        return <Redirect to="/dashboard"/>

    return <Route {...rest} render={props => (
        <Component {...props}/>
    )} />
}

export default RouteWrapper