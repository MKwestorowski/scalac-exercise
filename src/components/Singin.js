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
)

(class Singin extends React.Component {


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

        // 969073e2315de5e54047
    }

    render() {


        return (
            <div className="App">
                <a href={'http://github.com/login/oauth/authorize?' +
                'client_id=' + '9f13dc502b256fcebd4f'}>To use our app sing in with your GitHub Account</a>
            </div>




        )
    }
})