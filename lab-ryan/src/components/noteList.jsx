import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

import NoteItem from './noteItem.jsx';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
        
        this.createList = this.createList.bind(this);
    }

    createList() {
        return this.props.notes.map(note => {
            return<NoteItem remove={this.props.remove} key={note.id} note={note} />
        });
    }

    render() {
        return <div>
            {/* <h2>Notes</h2>
            <ul id="note-list">{this.createList()}</ul> */}
        </div>
    }
}

export default NoteList;