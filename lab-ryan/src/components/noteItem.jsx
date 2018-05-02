import React from 'react';

class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(event) {
        console.log('delete', this.props.note.id);
        return this.props.removeNote(this.props.note.id);
    }

    render() {
        return <div>
             <li>
                <h3>{this.props.title}</h3>
                <h4>{this.props.content}</h4>
                <button onClick={this.handleRemove}>Remove</button>
            </li>
        </div>
       
    }
}

export default NoteItem;