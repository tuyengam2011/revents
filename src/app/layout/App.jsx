import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashBoard/EventDashboard';
import NavBar from '../../features/event/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import { HomePage } from '../../features/event/home/HomePage';
import { EventDetailedPage } from '../../features/event/EventDetailed/EventDetailedPage';
import { PeopleDashboard } from '../../features/event/user/PeopleDashboard/PeopleDashboard';
import { UserDetailedPage } from '../../features/event/UserDetailed/UserDetailedPage';
import { SettingsDashboard } from '../../features/event/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';

class App extends  Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route 
        path='/(.+)'
        render={() => (       
          <Fragment>
          <NavBar/>
          <Container className="main">            
            <Route path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/profile/:id' component={UserDetailedPage} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path='/createEvent' component={EventForm} />
          </Container>
          </Fragment>
        )}
        />
      </Fragment>
    
    );
  }
  
}

export default App;
