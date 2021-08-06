import styled from 'styled-components';

export const NewsItemFooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
    margin-left: 115px;

    .mask {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;

        .icon {
            color: #B864FA;
        } 
        :hover {
            background: rgba(184, 100, 250, 0.2);
        }

        :active {
            background: rgba(184, 100, 250, 0.1);
        }
    }
     
`