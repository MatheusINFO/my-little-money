import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import api from '../../services/api'
import history from '../../services/history'
import PigIcon from '../../assets/pigicon.png'
import { Container, Form } from './styles'

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    api.post('/signup', data)
    .then(function (response){
      toast("Conta criado com sucesso :]")
      history.push('/')
    })
    .catch(function (error){
      toast("Erro ao cadastrar, tente novamente mais tarde :[")
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={PigIcon} alt="Pig icon" />
        <input type="text" name="name" ref={register} placeholder="Digite seu nome"/>
        <input type="text" name="username" ref={register} placeholder="Digite seu usuário"/>
        <input type="password" name="password" ref={register} placeholder="Digite sua senha"/>
        <button type="submit" title="Cadastrar">Cadastrar</button>
        <Link to="/">já tenho conta</Link>
      </Form>
    </Container>
  );
}

export default SignUp;
