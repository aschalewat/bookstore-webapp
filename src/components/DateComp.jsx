import React, { Component } from 'react';
import { dateOfBirthToString} from './date_to_string'

class DateComp extends Component {
    render() { 
        return (
            <div>
                <h1>{dateOfBirthToString('1980,01,20')}</h1>
            </div>
        );
    }
}

export default DateComp;