import styled from 'styled-components';

const media = { desktop: "@media(min-width: 800px)" };

export const FavesPanelWrap = styled.div`
    background-color: #1E1E1E;

    div.hide {
        display: none;
    }    

    div.show {
        display: block;
    }

    ${media.desktop} {
        width: 40%;
        display: flex;
        flex-direction: column;
        top: 0;
        bottom: 0;
        position: fixed;
        

        div.show {
            display: block;
            height: 100%;
            background-color: #1E1E1E;
            overflow-x: scroll;
            overflow-y: scroll;
        }

        div.hide {
            display: block;
            height: 100%;
            background-color: #1E1E1E;
            overflow-x: scroll;
            overflow-y: scroll;
        }
            
        h2 {
            margin-top: 130px;
            margin-bottom: 0;
        }
    }


`