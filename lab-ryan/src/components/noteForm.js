import React from 'react';
import ReactDOM from 'react-dom';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            edit: false,
            complete: false,
            title: '',
            content: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(ev) {
        this.setState({[ev.target.name]: ev.target.value,
        id: uuidv4()
        })
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