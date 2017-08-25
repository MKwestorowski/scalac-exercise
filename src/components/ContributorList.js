import React from 'react'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'


export default connect(
    state => ({
        contributors: state.contributors
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'contributors/FETCH__SUCCESS',
            data: data
        }),
        contributorProfile: contributorLogin => dispatch({
            type: 'PROFILE__SUCCESS',
            contributorLogin: contributorLogin

        })
    })
)(class Singin extends React.Component {


    state = {
        sortingOrder: null,

    }


    handleSortingToggle = () => this.setState({
        sortingOrder: [null, 'ASC'].includes(this.state.sortingOrder) ? 'DESC' : 'ASC'
    })


    render() {
        const contributors = this.props.contributors.data
        const contributorProfile = this.props.contributorProfile

        const sortingMarks = {
            'DESC': <span>&#8595;</span>,
            'ASC': <span>&#8593;</span>
        }
        const sortingMark = sortingMarks[this.state.sortingOrder] || null

const contributorsVariants =  {
            'DESC': () => contributors.slice().sort(
                (a, b) => b.contributions - a.contributions
            ),
            'ASC': () => contributors.slice().sort(
                (a, b) => a.contributions - b.contributions
            )
        }

        const preparedContributors = (
            contributorsVariants[this.state.sortingOrder] ||
            (
                () => contributors
            )
        )()
        return (

<div>
            <table>
            <thead>
            <tr>
                <th>Login</th>
                <th>
                    Avatar
                </th>
                <th onClick={this.handleSortingToggle}>
                    Count contributors
                    {sortingMark}gi
                </th>
            </tr>
            </thead>
            <tbody>
            {
                preparedContributors === null ?
                    'Fetching' :
                    preparedContributors.map(
                        eachContributor => (
                            <tr key={eachContributor.id}>
                                <td><Link to={'/contributeprofile'}
                                          onClick={() => contributorProfile(eachContributor)}
                                          key={eachContributor.id}>{eachContributor.login}</Link></td>
                                <td><img
                                    src={eachContributor.avatar_url} alt=""/></td>
                                <td>{eachContributor.contributions}</td>
                            </tr>
                        )
                    )
            }
            </tbody>
        </table>
</div>





        )
    }
})