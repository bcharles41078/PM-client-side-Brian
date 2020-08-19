import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../landingPage/landingPage'
// import SignInPage from '../signInPage/signInPage'
// import SignUpPage from '../signUpPage/singUpPage'
import FirstView from '../firstView/firstView'
import ProjectAdd from '../projectAdd/projectAdd'
import ProjectView from '../projectView/projectView'
import SingleList from '../singleList/singleList'
import GroupSelection from '../groupSelection/groupSelection'

import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import TokenService from '../../services/token-service'
import { UserProvider } from '../../context/UserContext';
import services from '../../services/auth-api-service'
// import ApiContext from '../../context/ApiContext'
// import config from '../../config'
import './App.css'

class App extends Component {

  state = {
    user: {},
    loggedIn: false
  };

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
              path={'/signup'}
              component={RegistrationPage}
            />
            <Route
              path={'/firstview'}
              component={FirstView}
            />
            <PrivateRoute
              path={'/groupselection'}
              component={GroupSelection}
            />
            <PrivateRoute
              path={'/addproject'}
              component={ProjectAdd}
            />
            <PrivateRoute
              path={'/viewproject'}
              component={ProjectView}
            />
            <PrivateRoute
              path={'/singlelist'}
              component={SingleList}
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
