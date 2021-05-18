import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background: #fea8bf;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: whitesmoke;  
    height: 300px;
    color: #333;
    margin-bottom: 25px;

    img {
        height: 300px;
    }
`

export const Informations = styled.div`
    text-align: center;

    h1 {
        font-size: 35px;
        margin-bottom: 25px;
    }

    strong {
        font-size: 25px;
    }

    h2 {
        font-size: 25px;
        margin-bottom: 25px;
    }

    a {
        background: #fea8bf;
        border-radius: 2px;
        padding: 10px;
        text-decoration: none;
        text-align: center;
        font-size: 15px;
        color: #fff;
        font-weight: bold;
        
        :hover {
            background: #fab4c7;
        }
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        color: #333;
        font-size: 22px;
        margin-bottom: 25px;
    }
`