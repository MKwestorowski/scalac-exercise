const initialState = {
    data: null
}



export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case `SELECTED__DATA`:
            return {
                ...state,
                data: action
            }
        default:
            return state
    }

}
