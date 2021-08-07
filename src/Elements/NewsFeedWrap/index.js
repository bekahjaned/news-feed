import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const NewsFeedWrap = styled.div`
    background-color: #121212;
    width: 100%;
    padding-bottom: 40px;
    color: #FAFAFA;

    h2 {
        font-size: 1.3rem;
    }

    ${media.desktop} {
        h2 {
            font-size: 1.5rem;
        }
        
        width: 60%;
        padding-bottom: 40px;
        margin-left: 40%
    }

`