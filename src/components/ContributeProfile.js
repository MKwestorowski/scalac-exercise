import React from 'react'



import { connect } from 'react-redux'

import './App.css'

export default connect(
    state => ({
        contributorID: state.contributorID.contributorID.contributorID,
        contributors: state.contributors

    })
)

(class Singin extends React.Component {





    // componentDidMount() {
    //     fetch(
    //         'https://api.github.com/repos/angular/angular'
    //     ).then(
    //         response => response.json()
    //     ).then(
    //         data => {this.props.success(data);
    //             fetch(data.contributors_url).then(
    //                 response => response.json().then(
    //                     data => this.props.success(data)))
    //
    //
    //         }
    //     )
    //
    //     // 969073e2315de5e54047
    // }

    render() {

const contributor = this.props.contributorID
const contributors = this.props.contributors.data
        console.log(contributor)


        return (
            <div className="App">
                {contributor === null? 'Fetching' : contributors.map(each => each.id === contributor? <p>{each.login}</p> : null )}
            </div>




        )
    }
})