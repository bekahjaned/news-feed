import styled from 'styled-components';

export const NewsItemWrap = styled.div`
    width: 85%;
    background-color: white;
    color: black;
    margin: 20px auto;
    text-align: left;
    padding: 15px 15px 0 15px;
    right: 0;
    border-radius: 5px;

    h3 {
        margin-top: 0;
    }

    a {
        color: #9143DF;

        :hover {
            color: #6B1FB6;
        }

        :active {
            color: #51188A;
        }
    }
`