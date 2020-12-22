import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const HeaderWrap = styled.div`
    background-color: #6B1FB6;
    display: flex;
    align-items: center;
    padding: 30px 0;
    z-index: 3000;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    color: white;

    h1 {
        margin: 0 auto;
        font-family: 'Adamina', serif;
        font-size: 24px;
    }

    ${media.desktop} {
        display: block;

        h1 {
            text-align: center;
            font-size: 36px;
        }
    }
    
    
`