import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ChartList from './components/ChartFolder/ChartList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/chart' component={ChartList} />
          </Switch>
          <footer class="page-footer grey darken-3">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5>About Me</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Connect</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="#">Facebook</a></li>
                    <li><a class="grey-text text-lighten-3" href="#">Twitter</a></li>
                    <li><a class="grey-text text-lighten-3" href="#">Linked In</a></li>
                    <li><a class="grey-text text-lighten-3" href="#">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright grey darken-4">
              <div class="container center-align">&copy; 2020 Grido.co</div>
            </div>
          </footer>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
