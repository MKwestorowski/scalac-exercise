import React from 'react'
import Select from 'react-select';


import {connect} from 'react-redux'

import './App.css'

export default connect(
    state => ({
        selectedData: state.selectingData.data.data,
        contributorLogin: state.contributorLogin.contributorLogin.contributorLogin,
        contributors: state.contributors

    }),
    dispatch => ({
        selectingData: data => dispatch({
            type: 'SELECTED__DATA',
            data: data
        })

    })
)

(class Singin extends React.Component {


    componentDidMount() {
        const contributor = this.props.contributorLogin
        fetch(
            `https://api.github.com/users/${contributor.login}/followers`
        ).then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    }

    render() {

        const contributor = this.props.contributorLogin
        const contributors = this.props.contributors.data
        const selectingData = this.props.selectingData
        const selectedData = this.props.selectedData


        const sortingMarks = {
            'DESC': <span>&#8595;</span>,
            'ASC': <span>&#8593;</span>
        }
        const sortingMark = sortingMarks[this.state.sortingOrder] || null


        const options = [
            {value: `https://api.github.com/users/${contributor.login}/orgs`, label: 'Organisations'},
            {value: `https://api.github.com/users/${contributor.login}/repos`, label: 'Repositories'},
            {value: `https://api.github.com/users/${contributor.login}/starred`, label: 'Starred'},
            {value: `https://api.github.com/users/${contributor.login}/subscriptions`, label: 'Subscriptions'}
        ];

        function logChange(val) {
            fetch(
                val.value
            ).then(
                response => response.json()
            ).then(
                data => selectingData(data)
            )
        }

        return (
            <div>np
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
                                {sortingMark}
                            </th>
                            <th>Choose</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contributor.login === null ? 'Fetching' : contributors.map(each => each.login === contributor.login ?
                                <tr>
                                    <td>{each.login}</td>
                                    <td><img src={each.avatar_url} alt="avatar"/></td>
                                    <td>{each.contributions}</td>
                                    <td><Select name="form-field-name" value="one" options={options}
                                                onChange={logChange}/></td>
                                </tr> : null)
                        }
                        </tbody>
                    </table>
                </div>
                <div>{selectedData !== null ? selectedData.map(e => <p>{e.name}</p>) : null }</div>
            </div>








        )
    }


})