import React from 'react'
import { NavLink } from 'react-router-dom'

const Charts = () => {
  return (
    <div>
      <ul >
        <li><NavLink to='/chart'>Charging Status</NavLink></li>
      </ul>
    </div>
  )
}

export default Charts
