import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NewsItemWrap } from '../../Elements/NewsItemWrap/';
import { NewsItemBodyWrap } from '../../Elements/NewsItemBodyWrap/'
import { NewsItemFooterWrap } from '../../Elements/NewsItemFooterWrap/';

import ThumbnailImage from '../ThumbnailImage/'

function NewsItem({image, title, description, url, date, icon, onClick}) {
    
   
    return (
        <NewsItemWrap>
            <NewsItemBodyWrap>
                <ThumbnailImage 
                    src={image} 
                    alt={description} 
                />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noreferrer">More info here</a>
                </div>
            </NewsItemBodyWrap>
            <NewsItemFooterWrap>
                <p>{date}</p>
                <div>
                    <FontAwesomeIcon onClick={onClick} className="icon" icon={icon} />
                </div>  
            </NewsItemFooterWrap>
        </NewsItemWrap>
    );
};

export default NewsItem;