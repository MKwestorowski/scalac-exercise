import contributors from './parts/contributors'
import contributorID from './parts/contributor'



export default (state = {}, action) => {
    return {

        contributors: contributors(state.contributors, action),
        contributorID: contributorID(state.contributorID, action)
    }
}