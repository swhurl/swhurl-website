import React from 'react'
import styled from 'styled-components'
import H1 from '../elements/H1.js'
import Nav from '../blocks/Nav'

export default () => {
  return (
    <div>
      <Nav/>
      <H1>swhurl.com</H1>
      <p>Example next.js app, including:</p>
      <ul>
        <li>styled components</li>
      </ul>
    </div>
  )
}