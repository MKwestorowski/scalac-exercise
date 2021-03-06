import contributors from './parts/contributors'
import contributorLogin from './parts/contributor'
import selectingData from './parts/selectingData'


export default (state = {}, action) => {
    return {

        contributors: contributors(state.contributors, action),
        contributorLogin: contributorLogin(state.contributorLogin, action),
        selectingData: selectingData(state.selectingData, action)
    }
}