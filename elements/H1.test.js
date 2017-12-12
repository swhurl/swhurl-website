/* eslint-env jest */

import React from 'react'
import { render, shallow, mount } from 'enzyme'

import H1 from './H1.js'

describe('With Snapshot Testing', () => {
  it('H1 shows "swhurl.com"', () => {
      const wrapper = render(<H1>shwurl.com</H1>)
      expect(wrapper).toMatchSnapshot()
    })
})

