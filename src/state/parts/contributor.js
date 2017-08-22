
    const initialState = {
        contributorID: null,
    }

    export default (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
            case `PROFILE__SUCCESS`:
                return {
                    ...state,
                    contributorID: action
                }
            default:
                return state
        }

}