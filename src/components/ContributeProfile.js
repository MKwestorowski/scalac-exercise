import React from 'react'
import Select from 'react-select';


import { connect } from 'react-redux'

import './App.css'

export default connect(
    state => ({
        contributorLogin: state.contributorLogin.contributorLogin.contributorLogin,
        contributors: state.contributors

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

        // 969073e2315de5e54047
    }

    render() {

const contributor = this.props.contributorLogin
const contributors = this.props.contributors.data
console.log(contributors)


        const getOptions = (input) => {
            fetch(
                input
            ).then(
                response => response.json()
            ).then(
                data => console.log(data)
            )

        }


        const login = contributor.id === null ? 'Fetching' : contributors.map(each => each.id === contributor.id? each.login : null)


        const options = [
            { value: `https://api.github.com/users/${contributor.login}/orgs`, label: 'Organisations' },
            { value: `https://api.github.com/users/${contributor.login}/repos`, label: 'Repositories' },
            { value: `https://api.github.com/users/${contributor.login}/starred`, label: 'Starred' },
            { value: `https://api.github.com/users/${contributor.login}/subscriptions`, label: 'Subscriptions' }
        ];

        function logChange(val) {
            console.log("Selected: " + JSON.stringify(val));
        }

        return (
            <div className="App">
                {contributor.login === null? 'Fetching' : contributors.map(each => each.login === contributor.login? <div><p>{each.login}</p>
                        <a href={each.html_url}>Take a look on GitHub</a>
                    <p>Count of contributors {each.contributions}</p>
                <li><ul>

                </ul></li></div> : null )}



                <Select name="form-field-name" value="one" options={options} onChange={logChange}/>

            </div>




        )
    }



})