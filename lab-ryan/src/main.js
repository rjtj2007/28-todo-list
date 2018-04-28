import React from 'react';
import ReactDOM from 'react-dom';

import dashboard from './components/dashboard.js';
import landing from './components/landing.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
                <navbar>
                    <h2>Notes</h2>
                    <ul>
                        <li><Landing /></li>
                        <li><Dashboard /></li>
                    </ul>
                </navbar>
            </div>
    }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);