import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: whitesmoke;
    box-shadow: 1px 1px 5px #fea8bf;
    padding: 0px 15px;
    border-radius: 4px;
    margin-bottom: 35px;
    height: 100px;
    width: 60%;    

    button {
        cursor: pointer;
        background: #de4231;
        border-radius: 4px;
        border: 0;
        padding: 5px;
        width: 50px;
        height: 50px;
        transition: all 0.5s;

        img {
            height: 40px;
        }

        :hover {
            transform: scale(0.92);
        }
    }

    div {
        display: flex;
        flex-direction: column;

        strong {
            color: #333;
            font-size: 18px;
            text-transform: uppercase;
            margin: 11px 0;
        }
    }
`