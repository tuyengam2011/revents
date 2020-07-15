import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashBoard/EventDashboard';
import NavBar from '../../features/event/nav/NavBar/NavBar';

class App extends  Component {
  render() {
    return (
<Fragment>
      <NavBar/>
      <Container className="main">
        <EventDashboard />
      </Container>
      </Fragment>
    );
  }
  
}

export default App;
