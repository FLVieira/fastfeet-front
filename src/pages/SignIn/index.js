import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, Background } from './styles';
import logo from '~/assets/images/logo.png';

import * as authActions from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(authActions.signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <img src={logo} alt="Fast Feet" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <b>SEU E-MAIL</b> <br />
          <Input name="email" type="email" placeholder="exemplo@gmail.com" />
          <b>SUA SENHA</b> <br />
          <Input name="password" type="password" placeholder="*********" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Container>
    </Background>
  );
}

export default SignIn;
