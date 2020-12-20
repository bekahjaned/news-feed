import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NewsItemWrap } from '../../Elements/NewsItemWrap/';
import { NewsItemBodyWrap } from '../../Elements/NewsItemBodyWrap/'
import { NewsItemFooterWrap } from '../../Elements/NewsItemFooterWrap/';

import ThumbnailImage from '../ThumbnailImage/'
import NewsText from '../NewsText/'

function NewsItem({image, title, description, url, date, icon, onClick}) {
    
   
    return (
        <NewsItemWrap>
            <NewsItemBodyWrap>
                <ThumbnailImage 
                    src={image} 
                    alt={description} 
                />
                <NewsText 
                    title={title}
                    description={description}
                    url={url}
                />
            </NewsItemBodyWrap>
            <NewsItemFooterWrap>
                <p>{date}</p>
                <FontAwesomeIcon 
                    onClick={onClick} 
                    className="icon" 
                    icon={icon} /> 
            </NewsItemFooterWrap>
        </NewsItemWrap>
    );
};

export default NewsItem;