import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    
    const { projects } = this.props;
    
    return (
      <div>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"  >
            <ProjectList  projects={projects} />
          </div>   
         </div>      
        </div>
        <br/>  <br/>  <br/> <br/>  <br/>  <br/>  <br/>  <br/>  <br/>   <br/>  <br/>
        <div class="container section" id="photos">
          <div class="row">
            <div class="col s12 l4">
              <img src="img/portrait.jpg" alt="" class="responsive-img materialboxed"></img>
            </div>
            <div class="col s12 l6 offset-l1">
              <h2 class="indigo-text text-darken-4">OurMoto</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s12 l4 offset-l1 push-l7">
                <img src="img/city.jpg" alt="" class="responsive-img materialboxed"></img>
            </div>
            <div class="col s12 l6 offset-l1 pull-l5 right-align">
              <h2 class="indigo-text text-darken-4">Innovation</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            </div>
          </div>
          <div class="row">
            <div class="col s12 l4">
                <img src="img/nature.jpg" alt="" class="responsive-img materialboxed"></img>
            </div>
            <div class="col s12 l6 offset-l1">
              <h2 class="indigo-text text-darken-4">Nature</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            </div>
          </div>
        </div>
      </div>
      
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
