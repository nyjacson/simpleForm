import React from 'react'
import { Redirect } from 'react-router-dom'

function RedirectHOC(Component) {
  return function PP(props) {
      const { redirectFlag, ...rest } = props 
    const childComponent = redirectFlag ? <Component {...rest} /> : <Redirect to="/"/>
    return childComponent;
  }
}

export default RedirectHOC;
