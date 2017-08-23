import contributors from './parts/contributors'
import contributorLogin from './parts/contributor'


export default (state = {}, action) => {
    return {

        contributors: contributors(state.contributors, action),
        contributorLogin: contributorLogin(state.contributorLogin, action)
    }
}