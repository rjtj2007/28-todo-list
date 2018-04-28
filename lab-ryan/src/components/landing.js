import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <h2>Add a Note</h2>
        <p>This is your Note's Landing Page. </p>
        <p>Here you can find all available notes. You can also edit, mark complete or remove existing notes by their id.</p>
    </div>
  }
}

export default Landing;