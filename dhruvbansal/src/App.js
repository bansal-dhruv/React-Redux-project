import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Dashboard from './components/dashboard/Dashboard'
import AxiosExample from './components/dashboard/AxiosExample'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ChartList from './components/ChartFolder/ChartList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
          <div className="App">  
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/chart' component={ChartList} />
            <Route path='/axios' component={AxiosExample} />
          </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default (App);
