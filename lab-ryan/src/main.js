import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Landing from './components/landing.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Notes App'
        }
    }

    render(){
        return <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Landing</Link></li>
                        <li><Link to="/notes">Notes</Link></li>
                    </ul>
                </nav>
                <h1>{this.state.title}</h1>
                <Route exact path= "/" component={Landing} />
                <Route path="/notes" component={Notes} />
            </div>
        </Router>
    }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);