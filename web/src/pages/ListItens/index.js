import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import PigCoin from '../../assets/pig-coin.png'
import Item from '../../components/Item'
import api from '../../services/api'
import { Container, Header, Informations, List } from './styles'

const ListItens = () => {
  const [load, setLoad] = useState(true)
  const [itens, setItens] = useState()
  const [total, setTotal] = useState()

  useEffect(() => {
    async function load(){
      api.get('/item').then(function (response){
        setItens(response.data)
        let sum = 0
        response.data.map(item => (
          sum += +item.value
        ))
        setTotal(sum)
        setLoad(false)
      })
      .catch(function (error){
        toast("Erro ao listar itens, tente novamente mais tarde :[")
      })
    }
    load()
  }, [])

  return (
    <Container>
      {!load && (
        <>
          <Header>
            <img src={PigCoin} alt="pig and coin" />
            <Informations>
              <h1>Olá, como vai?</h1>
              <strong>Seu saldo atual é de</strong>
              <h2>R$ {total} reais</h2>
              <Link to="/additem" title="Adicionar item">Adicionar item</Link>
            </Informations>
          </Header>

          <List>
            <strong>Histórico de transações</strong>
            {itens.map(item => (
              <Item key={item.id} name={item.name} description={item.description} value={item.value} id={item.id}/>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}

export default ListItens;
