import styled from 'styled-components';

export const NewsItemFooterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;

    p {
        margin: 0;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.7);
    }

    .icon {
        color: #9143DF;
        cursor: pointer;

        :hover {
            color: #6B1FB6;
        }
    
        :active {
            color: #51188A;
        }
    }

    
`