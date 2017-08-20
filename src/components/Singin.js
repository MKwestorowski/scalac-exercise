import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        fetch(
            'https://api.github.com/repos/angular/angular'
        ).then(
            response => response.json()
        ).then(
            data => {
                fetch(data.branches_url.split('{')[0]).then(
                    response => response.json()
                ).then(
                    data => console.log(data)
                )
                console.log( fetch(data.contributors_url).then(response => response.json().then(japko => console.log (japko))))
            }
        )

        // 969073e2315de5e54047
    }

    render() {
        return (
            <div className="App">
                <a href={'http://github.com/login/oauth/authorize?' +
                'client_id=' + '9f13dc502b256fcebd4f'}>Sing in with your GitHub account</a>
            </div>
        )
    }
}