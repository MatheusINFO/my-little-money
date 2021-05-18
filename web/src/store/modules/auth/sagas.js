import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import history from '../../../services/history'

import {signInSucess, signInFailure} from './actions'

export function* signIn({payload}){
    try{
        const response = yield call(api.post, '/signin', payload)
        const { accessToken }  = response.data
        api.defaults.headers['x-access-token'] = accessToken
        yield put(signInSucess(accessToken))
        history.push('/dashboard')
    }catch(error){
        toast("Erro ao conectar, tente novamente mais tarde :[")
        yield put(signInFailure())
    }
}

export function setToken({payload}){
    if(!payload){
        return;
    }
    const { accessToken } = payload.auth;
    if( accessToken ){
        api.defaults.headers['x-access-token'] = accessToken
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
])