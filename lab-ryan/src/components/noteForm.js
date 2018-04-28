import React from 'react';

class NoteForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.updateId = this.updateId.bind(this);
        this.updateEdit = this.updateEdit.bind(this);
        this.updateCompleat = this.updateCompleat.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateId(ev) {
        this.setState({id: ev.target.value});
    }

    updateEdit(ev) {
        this.state({edit: ev.target.value});
    }

    updateCompleat(ev) {
        this.state({compleat: ev.target.value});
    }

    updateContent(ev) {
        this.state({content: ev.target.value});
    }

    updateTitle(ev) {
        this.state({title: ev.target.value});
    }

    submit(ev) {
        ev.preventDefault();
         let note = {
             id: this.state.id,
             edit: this.state.edit,
             compleat: this.state.compleat,
             content: this.state.content,
             title: this.state.title
         };
         this.props.addNote(note);
         this.state({
             id: '',
             edit: '',
             compleat: '',
             content: '',
             title: ''
         })
    }
    render() {
        return <form onSubmit={this.submit}>
        <input type="text" id="id" value={this.state.id}
            placeholder="id"
            onChange={this.updateId}/>
        <input type="text" id="edit" value={this.state.edit}
            placeholder="edit"
            onChange={this.updateEdit}/>
        <input type="text" id="compleat" value={this.state.compleat}
            placeholder="compleat"
            onChange={this.updateCompleat}/>
        <input type="text" id="content" value={this.state.content}
            placeholder="compleat"
            onChange={this.updateContent}/>
        <input type="text" id="title" value={this.state.title}
            placeholder="title"
            onChange={this.updateTitle}/>
        </form>
    }
}

export default NoteForm;