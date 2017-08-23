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
            <div className="App">
                {contributor.login === null ? 'Fetching' : contributors.map(each => each.login === contributor.login ?
                    <div><p>{each.login}</p>
                        <img src={each.avatar_url} alt="avatar"/>
                        <a href={each.html_url}>Take a look on GitHub</a>
                        <p>Count of contributors {each.contributions}</p>
                        <li>
                            <ul>

                            </ul>
                        </li>
                    </div> : null)}
                <Select name="form-field-name" value="one" options={options} onChange={logChange}/>
                <div>{selectedData !== null ? selectedData.map(e => <p>{e.name}</p>) : null }</div>

            </div>




        )
    }


})