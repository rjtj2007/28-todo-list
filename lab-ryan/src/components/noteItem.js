import React from 'react';
import ReactDOM from 'react-dom';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.remove(this.props.id);
    }

    render() {
        return <div>
            NoteItem
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.content}</p>
            <button id={this.props.note.id} type="button" 
            onClick={this.props.removeNote}>
            Delete
            </button>
        </div>;
    }
}

export default NoteItem;