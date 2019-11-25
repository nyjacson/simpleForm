import React from 'react'
import { Redirect } from 'react-router-dom'

function RedirectHOC(Component) {
  return function PP(props) {
      const { data, ...rest } = props 
    //   const component = props.
    const childComponent = data ? <Component {...rest} /> : <Redirect to="/"/>
    return childComponent;
  }
}

export default RedirectHOC;
