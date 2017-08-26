import React from 'react'


import {connect} from 'react-redux'

import './App.css'

export default connect(
    state => ({
        contributors: state.contributors
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'contributors/FETCH__SUCCESS',
            data: data
        })

    })
)(class Singin extends React.Component {

    componentDidMount() {
        fetch(
            'https://api.github.com/repos/angular/angular'
        ).then(
            response => response.json()
        ).then(
            data => {
                this.props.success(data);
                fetch(data.contributors_url).then(
                    response => response.json().then(
                        data => this.props.success(data)))
            }
        )
    }

    render() {


        return (

                <div className="gitHubButtonWidth flex-container">
                    <a href={'http://github.com/login/oauth/authorize?client_id=9f13dc502b256fcebd4f'}
                       className="flex-item-button btn btn-block btn-sm btn-social btn-github">
                        <span className="fa fa-github"></span>
                        Sign in with Github
                    </a>
                </div>

        )
    }
})