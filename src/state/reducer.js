import contributors from './parts/contributors'



export default (state = {}, action) => {
    return {

        contributors: contributors(state.contributors, action),
    }
}