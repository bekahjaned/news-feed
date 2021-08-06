import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const DateWrap = styled.div`
    p {
        margin: 0;
        font-size: 12px;
        color: #D9D9D9;
    }   

    ${media.desktop} {
        p {
            font-size: 14px;
        } 
    }
`