import fejsLogin from './parts/facebookLogin'



export default (state = {}, action) => {
    return {

        fejsLogin: fejsLogin(state.fejsLogin, action),
        fejsLogout: fejsLogin(state.fejsLogout, action)


    }
}