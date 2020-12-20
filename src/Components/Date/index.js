import React from 'react';

import { DateWrap } from '../../Elements/DateWrap/'

function Date({date}) {
    return (
        <DateWrap>
            <p>{date}</p>
        </DateWrap>
    );
};

export default Date