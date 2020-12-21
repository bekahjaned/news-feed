import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { HeaderWrap } from "../../Elements/HeaderWrap/";

function Header({text}) {
    return (
        <HeaderWrap>
            <FontAwesomeIcon className="menu" icon={faBars} size="lg" />
            <h1>{text}</h1>
        </HeaderWrap> 
    )
}

export default Header