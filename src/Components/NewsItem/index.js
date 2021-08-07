import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NewsItemWrap } from '../../Elements/NewsItemWrap/';
import { NewsItemBodyWrap } from '../../Elements/NewsItemBodyWrap/'
import { NewsItemFooterWrap } from '../../Elements/NewsItemFooterWrap/';

import ThumbnailImage from '../ThumbnailImage/'
import NewsText from '../NewsText/'
import Date from '../Date/'

function NewsItem({ image, title, description, url, date, icon, onClick }) {

    return (
        <NewsItemWrap>
            <NewsItemBodyWrap>
                <ThumbnailImage
                    src={image}
                    alt={title}
                />
                <NewsText
                    title={title}
                    description={description}
                    url={url}
                />
            </NewsItemBodyWrap>
            <NewsItemFooterWrap>
                <Date
                    date={date}
                />
                <div className="mask" onClick={onClick}>
                    <FontAwesomeIcon
                        className="icon"
                        icon={icon} />
                </div>
            </NewsItemFooterWrap>
        </NewsItemWrap>
    );
};

export default NewsItem;