import React from 'react';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.note.id);
    }

    render() {
        return <li className="note">
            <h4>{this.props.note.title}</h4>
            <p>{this.props.note.content}</p>
            <button onClick={this.handleRemove} className="remove" >Remove</button>
        </li>;
    }
}

export default NoteItem;