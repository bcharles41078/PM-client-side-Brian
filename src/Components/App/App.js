import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../landingPage/landingPage'
import SignInPage from '../signInPage/signInPage'
import SignUpPage from '../signUpPage/singUpPage'
import FirstView from '../firstView/firstView'
import ProjectAdd from '../projectAdd/projectAdd'
import ProjectView from '../projectView/projectView'
import TypeAdd from '../typeAdd/typeAdd'
import SingleList from '../singleList/singleList'
import GroupSelection from '../groupSelection/groupSelection'
// import ApiContext from '../../context/ApiContext'
// import config from '../../config'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
          <LandingPage />
        </header>
        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              componenet={Header}
            />
            <PublicOnlyRoute
              path={'/landing_page'}
              component={LandingPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={SignInPage}
            />
            <PublicOnlyRoute
              path={'/signup'}
              component={SignUpPage}
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
            <PrivateRoute
              path={'/singlelist'}
              componenet={SingleList}
            />
            <PrivateRoute
              path={'/addtype'}
              componenet={TypeAdd}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App
