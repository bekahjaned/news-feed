import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SubHeaderWrap } from '../../Elements/SubHeaderWrap/'

function SubHeader({ text, count, icon, toggleMethod, className }) {
    return (
        <SubHeaderWrap>
            <h2>{text} <span className="count">({count})</span></h2>
            <FontAwesomeIcon className={className} onClick={toggleMethod} icon={icon} />
        </SubHeaderWrap>
    );
};

export default SubHeader