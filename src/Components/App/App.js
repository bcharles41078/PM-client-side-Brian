import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../landingPage/landingPage'
// import SignInPage from '../signInPage/signInPage'
// import SignUpPage from '../signUpPage/singUpPage'
import FirstView from '../firstView/firstView'
import ProjectAdd from '../projectAdd/projectAdd'
import ProjectView from '../projectView/projectView'
import TypeAdd from '../typeAdd/typeAdd'
import SingleList from '../singleList/singleList'
import GroupSelection from '../groupSelection/groupSelection'

import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
// import ApiContext from '../../context/ApiContext'
// import config from '../../config'
import './App.css'

class App extends Component {


  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          
            <Route
              exact
              path={'/'}
              component={Header}
            />
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
        </header>
        <main className='App__main'>
          <Switch>
            
            <Route
              path={'/login'}
              component={LoginPage}
            />
            <Route
              path={'/signup'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/firstview'}
              componenet={FirstView}
            />
            <PrivateRoute
              path={'/groupselection'}
              componenet={GroupSelection}
            />
            <PrivateRoute
              path={'/addproject'}
              componenet={ProjectAdd}
            />
            <PrivateRoute
              path={'/viewproject'}
              componenet={ProjectView}
            />
            <Route
              path={'/singlelist'}
              componenet={SingleList}
            />
            <PrivateRoute
              path={'/addtype'}
              componenet={TypeAdd}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App
