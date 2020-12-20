import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { NewsItemWrap } from '../../Elements/NewsItemWrap/';
import { NewsItemBodyWrap } from '../../Elements/NewsItemBodyWrap/'
import { NewsItemFooterWrap } from '../../Elements/NewsItemFooterWrap/';

function NewsItem({image, title, description, url, date, onClick}) {
    
   
    return (
        <NewsItemWrap>
            <NewsItemBodyWrap>
                <img src={image} alt={description} />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noreferrer">More info here</a>
                </div>
            </NewsItemBodyWrap>
            <NewsItemFooterWrap>
                <p>{date}</p>
                <div>
                    <FontAwesomeIcon onClick={onClick} className="icon" icon={faHeart} />
                </div>  
            </NewsItemFooterWrap>
        </NewsItemWrap>
    );
};

export default NewsItem;