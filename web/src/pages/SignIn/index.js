import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import PigIcon from '../../assets/pigicon.png'
import { signInRequest } from '../../store/modules/auth/actions'
import { Container, Form } from './styles'

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    dispatch(signInRequest(data))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <img src={PigIcon} alt="Pig icon" />
        <input type="text" name="username" ref={register} placeholder="Digite seu usuário"/>
        <input type="password" name="password" ref={register} placeholder="Digite sua senha"/>
        <button type="submit" title="Cadastrar">Acessar</button>
        <Link to="/signup">não tenho conta</Link>
      </Form>
    </Container>
  );
}

export default SignIn;
