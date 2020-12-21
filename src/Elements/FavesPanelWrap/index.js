import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const FavesPanelWrap = styled.div`
    display: none;

    ${media.desktop} {
        display: block;
        width: 40%;
        height: 100%;
        top: 0;
        bottom: 0;
        background-color: #91f0e0;
        position: fixed;
        overflow-x: scroll;
        overflow-y: scroll;

        h2 {
            margin-top: 130px;
        }
    }


`