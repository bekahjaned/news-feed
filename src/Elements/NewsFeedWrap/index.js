import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const NewsFeedWrap = styled.div`
    background-color: #D4F9F3;
    width: 100%;
    padding-bottom: 40px;

    ${media.desktop} {
        width: 60%;
        padding-bottom: 40px;
        margin-left: 40%
    }

`