import React from 'react';
// import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>Welcome to your Notes App.</p>
      <p>Click on the Dashboard to view/create your notes.</p>
     </div>
  }
}

export default Landing;