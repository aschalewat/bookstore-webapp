import React from 'react'
import {shallow} from 'enzyme'
import EditBook from './EditBook'
import AddBook from './AddBook'
import Books from './Books'

describe('EditBook',  () => {
    it('should show text', () => {
        const wrapper = shallow(<Books />);
    });
});