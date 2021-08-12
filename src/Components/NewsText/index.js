import React from 'react';

import { NewsTextWrap } from '../../Elements/NewsTextWrap/'

function NewsText({ title, description, url }) {
    return (
        <NewsTextWrap>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noreferrer">Go to article</a>
        </NewsTextWrap>
    );
};

export default NewsText;