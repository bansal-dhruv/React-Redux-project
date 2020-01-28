import React from 'react';
import { Route } from 'react-router-dom'
import { IndexRoute } from 'react-router';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import ChartList from './components/ChartFolder/ChartList'
import AxiosExample from './components/dashboard/AxiosExample'

export default (
    <Route exact path="/" component={App}> 
        <IndexRoute component = {Dashboard} />
        <Route path='project/:id' component={ProjectDetails} ></Route>
        <Route path='signin' component={SignIn} ></Route>
        <Route path='signup' component={SignUp} ></Route>
        <Route path='create' component={CreateProject} ></Route>
        <Route path='chart' component={ChartList} ></Route> 
        <Route path='axios' component={AxiosExample} ></Route> 
    </Route> 
);