import React from 'react';
import ReactDOM from 'react-dom';

import NoteItem from './noteItem.jsx';
import NoteList from './noteList.jsx';
import NoteForm from './noteForm.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    addNote(note){
        this.state.notes.push(note);
        this.setState({ notes: this.state.notes });
        }

    removeNote(id) {
        this.state.notes = this.state.notes.filter(note => {
            return note.id !== id;
        });
        this.setState({ notes: this.state.notes });
    }
    

    render() {
        return <div>
            <NoteForm addNote={this.addNote}></NoteForm>
            <NoteList removeNote={this.state.removeNotes} 
            notes={this.state.notes} />
        </div>
    }
}

export default Dashboard;