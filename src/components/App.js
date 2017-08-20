import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


import Singin from './Singin'

import './App.css';


class App extends React.Component {
    render() {
        return (
            <Router>


                    <div className="white">
                        {/*<Route exact path="/" component={Homepage}/>*/}
                        <Route path="/" component={Singin}/>
                    </div>

            </Router>
        );
    }
}

export default App;