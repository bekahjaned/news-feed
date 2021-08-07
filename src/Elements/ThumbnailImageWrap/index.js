import styled from 'styled-components';

const media = {
    desktop: "@media(min-width: 330px)",

};

export const ThumbnailImageWrap = styled.div`
    img {
        display: none;
    } 
    

    ${media.desktop} {
        padding-right: 15px;
        max-width: 110px;
        object-fit: cover;

        img {
            display: block;
            width: 100px;
        }
    }
`