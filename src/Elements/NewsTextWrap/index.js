import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const NewsTextWrap = styled.div`
    h3 {
        margin-top: 0;
        font-size: 16px;
    }

    p {
        font-size: 14px;
    }

    a {
        color: #9143DF;
        font-size: 14px;

        :hover {
            color: #6B1FB6;
        }

        :active {
            color: #51188A;
        }
    }

    ${media.desktop} {
        h3 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }
    
        a {
            font-size: 16px;
        } 
    }
`