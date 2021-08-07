import styled from 'styled-components';

const media = {
    desktop: "@media(min-width: 1080px)",
    ipad: "@media(min-width: 768px)",
    mobile: "@media(min-width: 320px)"
};

export const HeaderWrap = styled.div`
    background-color: #121212;
    display: flex;
    align-items: center;
    padding: 30px 0;
    z-index: 3000;
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    color: #FAFAFA;

    h1 {
        margin: 0 auto;
        font-family: 'Adamina', serif;
    }

    ${media.ipad} {
        h1 {
            font-size: 2rem;
        }
    }

    ${media.desktop} {
        display: block;

        h1 {
            text-align: center;
            font-size: 3rem;
        }
    }
    
    
`