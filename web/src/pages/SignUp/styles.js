import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #fea8bf;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 120px 180px;

    img {
        height: 230px;
        width: 250px;
        margin-bottom: 25px;
    }

    input {
        color: #666;
        height: 50px;
        padding: 0 15px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 15px;

        &:focus{
            border: 1px solid #fc97b2;
        }
    }

    button {
        cursor: pointer;
        margin-top: 20px;
        height: 50px;
        border: 0;
        background: #fc97b2;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        transition: all 0.6s;

        :hover {
            background: #fc97b9;
            transform: scale(0.95);
        }
    }

    a {
        text-decoration: none;
        margin-top: 10px;
        text-align: center;
        font-size: 15px;
        color: #666;

        :hover {
            text-decoration: underline;
        }
    }
`