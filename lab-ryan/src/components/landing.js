import React from 'react';
import ReactDOM from 'react-dom';

import noteForm from './noteForm.js'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Landing<NoteForm /><NoteList /></div>
  }
}

export default Landing;