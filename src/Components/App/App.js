import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/header'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
// import LandingPage from '../landingPage/landingPage'
import SignInPage from '../signInPage/signInPage'
import SignUpPage from '../signUpPage/singUpPage'
import FirstView from '../firstView/firstView'
import ProjectAdd from '../projectAdd/projectAdd'
import ProjectView from '../projectView/projectView'
import TypeAdd from '../typeAdd/typeAdd'
import SingleList from '../singleList/singleList'
import GroupSelection from '../groupSelection/groupSelection'
// import ApiContext from '../../context/ApiContext'
import config from '../../config'
import './App.css'

class App extends Component {
  state = {
    projects: [],
    types: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/projects`),
      fetch(`${config.API_ENDPOINT}/types`)
    ])
      .then(([projectsRes, typeRes]) => {
        if (!projectsRes.ok)
          return projectsRes.json().then(e => Promise.reject(e))
        if (!typeRes.ok)
          return typeRes.json().then(e => Promise.reject(e))

        return Promise.all([
          projectsRes.json(),
          typeRes.json(),
        ])
      })
      .then(([projects, types]) => {
        this.setState({ projects, types })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleTypeAdd = type => {
    this.setState({
      types: [
        ...this.state.types,
        type
      ]
    })
  }

  handleProjectAdd = project => {
    this.setState({
      projects: [
        ...this.state.projects,
        project
      ]
    })
  }

  handleProjectDelete = projectId => {
    this.setState({
      projects: this.state.projects.filter(project => project.id !== projectId)
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              componenet={Header}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={SignInPage}
            />
            <Route
              path={'/signup'}
              component={SignUpPage}
            />
            <PrivateRoute
              path={'/firstview'}
              componenet={FirstView}
            />
            <Route
              path={'/groupselection'}
              componenet={GroupSelection}
            />
            <Route
              path={'/addproject'}
              componenet={ProjectAdd}
            />
            <Route
              path={'/viewproject'}
              componenet={ProjectView}
            />
            <Route
              path={'/singlelist'}
              componenet={SingleList}
            />
            <Route
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
