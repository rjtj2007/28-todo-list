import React from 'react';
import ReactDOM from 'react-dom';

import NoteItem from './noteItem.js';

class NoteList extends React.Component {
    constructor(props) {
        super(props);
    }

    list() {
        return this.list.props.notes.map((note, index) => {
            return<NoteItem 
            content={note.content} 
            title={note.title} 
            key={index} 
            index={index} 
            editNote={this.props.editNote}
            removeNote={this.props.removeNote}/>;
        })
    }

    render() {
        return <div>
            NoteList
            <div>
                <NoteItem />
            </div>
            <ul>
                {this.list()}
            </ul>
        </div>
    }
}

export default NoteList;