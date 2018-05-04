import React from 'react';
import ReactDOM from 'react-dom';

import NoteItem from './noteItem.jsx';
import NoteList from './noteList.jsx';
import NoteForm from './noteForm.jsx';

class Dashboard extends React.Component {
    console.log('notes', notes);
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    addNote(note){
        this.state.notes.push(note);
        console.log('addNote', this.state.notes)
        this.setState({ notes: this.state.notes });
    }

    removeNote(index) {
        this.state.notes.splice(index, 1);
        this.setState({ notes: this.state.notes });
        console.log('removeNote', this.setState({ notes: this.state.notes }));
    }
    
    render() {
        return <div>
            <NoteForm addNote={this.addNote}></NoteForm>
            <NoteList removeNote={this.removeNotes} 
            notes={this.state.notes} />
        </div>
    }
}

export default Dashboard;