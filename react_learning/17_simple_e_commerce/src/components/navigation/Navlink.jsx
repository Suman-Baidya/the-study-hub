import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({navText, navLink}) => {
  return (
    <NavLink
        to={navLink}
        style={({isActive})=>({
            color: isActive ? "red" : "black"
        })}
    >
        {navText}
    </NavLink>
  )
}

export default Navlink
