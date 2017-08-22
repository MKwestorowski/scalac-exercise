import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import Singin from './Singin'
import ContributorList from './ContributorList'
import ContributeProfile from './ContributeProfile'
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>


                    <div className="white">
                        <Route exact path="/" component={Singin}/>
                        <Route path="/contributorlist" component={ContributorList}/>
                        <Route path="/contributeprofile" component={ContributeProfile}/>
                    </div>

            </Router>
        );
    }
}

export default App;