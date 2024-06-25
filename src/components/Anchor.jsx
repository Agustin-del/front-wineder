import React from 'react'
import { NavLink } from 'react-router-dom'

const Anchor = ({ href, text }) => {
  return (
    <NavLink to={href}>{text}</NavLink>
   
  )
}

export default Anchor