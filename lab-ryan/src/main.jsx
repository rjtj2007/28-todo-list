import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// import './style/main.scss';

import dashboard from './components/dashboard.jsx';
import landing from './components/landing.jsx';
import noteForm from './components/noteForm.jsx';
import noteList from './components/noteList.jsx'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Notes',
            description: 'This is a note taking application built in React'
        }
    }

    render(){
        return <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to ="/">Landing</Link></li>
                        <li><Link to = "/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                <div id="main-content">
                    <h2>{this.state.title}</h2>
                    <Route exact path="/" component={landing} />
                    <Route path="/dashboard" component={dashboard} />
                </div>
            </div>
       </Router>
    }
};

ReactDOM.render(<App />, document.getElementById('root'));