import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const SubHeaderWrap = styled.div`
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #91f0e0;

    h2 { 
        padding-right: 8px;
        font-size: 20px;
    }

    svg.pivot {
        cursor: pointer;
        transform: rotate(180deg) 
    }

    svg {
        cursor: pointer;
    }


    ${media.desktop} {
        h2 {
            padding: 0;
            font-size: 24px;
        }

        svg {
            display: none;
        }
    }
`