import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { NewsItemWrap } from '../../Elements/NewsItemWrap/';
import { NewsItemFooterWrap } from '../../Elements/NewsItemFooterWrap/';

function FaveNewsItem({title, description, url, date, onClick}) {
    return (
        <NewsItemWrap>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noreferrer">More info here</a>
            <NewsItemFooterWrap>
                <p>{date}</p>
                <div>
                    <FontAwesomeIcon onClick={onClick} className="icon" icon={faTrash} />
                </div>  
            </NewsItemFooterWrap>
        </NewsItemWrap>
    );
};

export default FaveNewsItem;