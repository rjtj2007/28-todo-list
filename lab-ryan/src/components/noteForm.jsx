import React from 'react';
import uuidv4 from 'uuid/v4';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: '',
            editing: false,
            completed: false
        }
        // this.updateTitle = this.updateTitle.bind(this);
        // this.updateContent = this.updateContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // updateTitle(event) {
    //     this.setState({title: event.target.value});
    // }

    // updateContent(event) {
    //     this.setState({content: event.target.value});
    // }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
             id: uuidv4()});
        }
    
    handleSubmit(event) {
        event.preventDefault();
        // let id = uuidv4();
        // let title = event.target.title.value;
        // let content = event.target.content.value;
        this.props.addNote({id, title, content});
    }

    render() {
        return <div>
            <p>Add a new Note</p>
                <form 
                onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name='title' 
                    placeholder="Title"
                    onChange={this.handleChange} 
                />
                <input 
                    
                    type="text" 
                    name='content' 
                    placeholder="Content"
                    onChange={this.handleChange}  
                />
                <button type="submit" 
                    value='Add Note'>Add Note</button>
            </form>
        </div>
    }
}

export default NoteForm;