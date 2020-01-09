import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <div class = "z-depth-3">
          <ProjectSummary project={project} key={project.id} />
          </div>
        )
      })}  
    </div>
  )
}

export default ProjectList
