import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p className="page-description">This is a Note application built in React.
     Click on the <Link to="/dashboard">dashboard</Link> to check it out.</p>
     </div>
  }
}

export default Landing;