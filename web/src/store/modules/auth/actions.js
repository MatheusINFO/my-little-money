export function signInRequest(payload){
    return{
        type: '@auth/SIGN_IN_REQUEST',
        payload
    }
}

export function signInSucess(payload){
    return{
        type: '@auth/SIGN_IN_SUCESS',
        payload
    }
}

export function signInFailure(){
    return{
        type: '@auth/SIGN_IN_FAILURE'
    }
}
