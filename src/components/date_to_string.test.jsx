import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import DateComp from './DateComp'

describe ('DateComp', () => {
    it('shuld render result', () => {
        const datecomp = DateComp;

        const wrapper = shallow(<DateComp />);
        const text = wrapper.find('h1')
        expect(wrapper.text.text()).toBe('20 January 1980');
    })
})