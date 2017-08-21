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
                    data => fetch(data.contributors_url).then(response => response.json().then(data => success(data)))
                ).then(console.log(data))

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