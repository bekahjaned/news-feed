import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const FavesPanelWrap = styled.div`
    background-color: #91f0e0;

    div.hide {
        display: none;
    }    

    div.show {
        display: block;
    }

    ${media.desktop} {
        width: 40%;
        top: 0;
        bottom: 0;
        position: fixed;

        div {
            display: block;
            height: 100%;
            background-color: #91f0e0;
            overflow-x: scroll;
            overflow-y: scroll;
        }
            
        h2 {
            margin-top: 130px;
            margin-bottom: 0;
        }
    }


`