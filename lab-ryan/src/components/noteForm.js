import React from 'react';
import ReactDOM from 'react-dom';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
        this.submit = this.submit.bind(this);
    }

    submit(ev) {
        // ev.preventDefault();
        this.state({
            content: this.state.title,
            title: this.state.content
        })
    }
    render() {
        return <div >
            noteForm 
            </div>;
    }
}

export default NoteForm;