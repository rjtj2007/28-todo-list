import React from 'react';
import ReactDOM from 'react-dom';

import noteForm from './noteForm.js';
import noteList from './noteList.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);

    }

    addNote(note){
        this.state = {
            id: uuid.v1(),
            edit: false,
            compleat: false,
            content: '',
            title: '',
        }
    }

    removeNote(note) {
        this.state.notes.push(note);
        this.setState({notes: this.state.notes.id});
    }

    render() {
        return <div>
        Dashboard
        <div>
            <noteForm addNote={this.addNote}
            removeNote={this.removeNote}/>
            <noteList notes={this.state.notes} />
        </div>
    </div>
    }
}

export default Dashboard;