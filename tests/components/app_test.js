import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import App from '../../src/components/App'

describe('<App />', () => {
    it('Hello World Exists', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('h1').length).to.equal(1)
        expect(wrapper.text()).to.contain('Hello World')
    });
})