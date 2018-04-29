import React from 'react';
import NoteList from './noteList.jsx';
import NoteForm from './noteForm.jsx';
import NoteItem from './noteList.jsx';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {title: "Shopping List", content: "Buy Milk", id: 1},
                {title: "Honey Do List", content: "Remodel Kitchen", id: 2}
            ]};
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);

    }

    addNote(note){
        this.state.note.push(note);
        this.setState({notes: this.state.notes});
        }

    removeNote(id) {
        let note = this.state.notes.findIndex(note => note. id === id);
        this.state.splice(note, 1);
        this.setState({notes: this.state.notes});
    }

    render() {
        return <div>
            <NoteForm addNote={this.addNote} notes={this.state.notes} />
            <NoteList remove={this.removeNote} notes={this.state.notes} />
    </div>
    }
}

export default Dashboard;