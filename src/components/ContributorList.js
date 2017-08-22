import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'


export default connect(
    state => ({
        contributors: state.contributors
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'contributors/FETCH__SUCCESS',
            data: data
        }),
        contributorProfile: contributorID => dispatch({
                type: 'PROFILE__SUCCESS',
                contributorID: contributorID

    }) })
)( class Singin extends React.Component {


    render() {
        const contributors = this.props.contributors.data
        const contributorProfile = this.props.contributorProfile
        return (
            <div>
                { contributors === null ?
                    'Fetching' :
                    contributors.map(
                    eachContributor => <div><Link to={'/contributeprofile'} onClick={() => contributorProfile(eachContributor.id)} key={eachContributor.id}>{eachContributor.login}</Link> <img src={eachContributor.avatar_url} alt=""/> </div>)}
            </div>




        )
    }
})