
    const initialState = {
        contributorLogin: null,
    }

    export default (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
            case `PROFILE__SUCCESS`:
                return {
                    ...state,
                    contributorLogin: action
                }
            default:
                return state
        }

}