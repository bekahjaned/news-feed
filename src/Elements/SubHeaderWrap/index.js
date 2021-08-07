import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const SubHeaderWrap = styled.div`
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1E1E1E;
    color: #FAFAFA;

    h2 { 
        padding-right: 8px;
        font-size: 1.3rem;
    }

    svg {
        cursor: pointer;
    }

    svg.pivot {
        cursor: pointer;
        transform: rotate(180deg) 
    }


    ${media.desktop} {
        h2 {
            font-size: 1.5rem;
            margin-bottom: 0;
            margin-top: 130px;
        }

        svg {
            margin-top: 130px;
            display: none;
        }

        span.count {
            display: none;
        }
    }
`