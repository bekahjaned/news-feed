import React from 'react';

import { HeaderWrap } from "../../Elements/HeaderWrap/";

function Header({ text }) {

    return (
        <HeaderWrap>
            <h1>{text}</h1>
        </HeaderWrap>
    )
}

export default Header