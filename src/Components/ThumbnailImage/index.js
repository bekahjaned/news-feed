import React from 'react';

import { ThumbnailImageWrap } from '../../Elements/ThumbnailImageWrap/'

import NYT_Logo from '../../images/new-york-times-square.png'

function ThumbnailImage({ src, alt }) {
    return (
        <ThumbnailImageWrap>
            <img src={src ? src : NYT_Logo} alt="" />
        </ThumbnailImageWrap>
    );
};

export default ThumbnailImage