import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            edit: false,
            complete: false,
            id: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        let change = ev.target.value;
        this.setState({[ev.target.name]: change, id: uuidv4()});
        }
    

    handleSubmit(ev) {
        ev.preventDefault();
        console.log(this.state);
        this.props.addNote(this.state);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
        <input type="text" name="content" placeholder="Note" onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
    }
}

export default NoteForm;