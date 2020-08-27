import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../landingPage/landingPage'
// import SignInPage from '../signInPage/signInPage'
// import SignUpPage from '../signUpPage/singUpPage'
import Dashboard from '../Dashbord/Dashbord'
import ProjectAdd from '../projectAdd/projectAdd'
import UpdateProject from '../UpdateProject/UpdateProject'

import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import SingleProject from '../singleProject/singleProject'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import TokenService from '../../services/token-service'
import { UserProvider } from '../../context/UserContext';
// import ApiContext from '../../context/ApiContext'
// import config from '../../config'
import './App.css'

class App extends Component {

  state = {
    user: {},
    loggedIn: false,
    project: {}
    
  };

  setProjectState = (project) => {
    this.setState({project: project});
  }

  toggleLoggedIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.toggleLoggedIn();
    }
  }

  render() {
    
    return (
      <UserProvider>
      <div className='App'>
        <Header toggleLoggedIn={this.toggleLoggedIn}/>
        <main className='App__main'>
          <img id='pm-pic' src='ProjectManagementPic.png' alt='PMpic'></img>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />

            <Route
              path={'/login'}
              toggleLoggedIn={this.toggleLoggedIn}
              component={LoginPage}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path='/dashboard'>

                <Dashboard setProjectState={this.setProjectState} />
              </Route>

            <Route
              path={'/addproject'}>
              <ProjectAdd history={this.history} test={'test value'} />
            </Route>

            <Route
              path={'/singleproject'}>
              <SingleProject history={this.history} test={'test value'} project={this.state.project} />
            </Route>
            
            <PrivateRoute
              path={'/updateproject'}
              component= {() => <UpdateProject history={this.history} project={this.state.project}/>}
            />
            <PublicOnlyRoute
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
      </UserProvider>
    )
  }
}
export default App
