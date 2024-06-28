import React from 'react'
import { NavLink } from 'react-router-dom'

const Anchor = ({ href, text }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        ` ${
          isActive ? 'text-black font-bold' : 'text-white'
        }  hover:text-green-300 hover:font-bold`
      }
    >
      {text}
    </NavLink>
   
  )
}

export default Anchor