import React from 'react';

import { ThumbnailImageWrap } from '../../Elements/ThumbnailImageWrap/'

function ThumbnailImage({src, alt}) {
    return (
        <ThumbnailImageWrap>
            <img src={src} alt={alt} />
        </ThumbnailImageWrap>
    );
};

export default ThumbnailImage