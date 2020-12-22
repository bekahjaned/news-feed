import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const DateWrap = styled.div`
    p {
        margin: 0;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.7);
    }   

    ${media.desktop} {
        p {
            font-size: 14px;
        } 
    }
`