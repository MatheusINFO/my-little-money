import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../services/api'
import CoinIcon from '../../assets/pig-coin.png'
import history from '../../services/history'
import { Container, Form } from './styles'

const AddItem = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    api.post('/item', data).then(function (response){
      toast("Item adicionado com sucesso :]")
      history.push('/dashboard')
    })
    .catch(function (error){
      toast("Erro ao adicionar item, tente novamente mais tarde :[")
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={CoinIcon} alt="Pig and coin icon" />
        <input type="text" name="name" ref={register} placeholder="Digite o nome do item"/>
        <input type="text" name="description" ref={register} placeholder="Digite a descrição"/>
        <input type="number" name="value" ref={register} placeholder="Digite o valor"/>
        <button type="submit" title="Adicionar">Adicionar</button>
        <Link to="/dashboard">voltar para transações</Link>
      </Form>
    </Container>
  );
}

export default AddItem;
