import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import {
  Container,
  TopInfo,
  LeftInfo,
  RightInfo,
  FormArea,
  Form,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function DeliverymenRegister() {
  const [recipient, setRecipient] = useState('');
  const [deliveryman, setDeliveryman] = useState('');
  const [product, setProduct] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <TopInfo>
        <LeftInfo>
          <h1>Cadastro de encomendas</h1>
        </LeftInfo>

        <RightInfo>
          <Link to="/packages">
            <MdKeyboardArrowLeft size={24} color="#fff" />
            <b>VOLTAR</b>
          </Link>
          <button type="submit" form="my-form">
            <MdDone size={24} color="#fff" />
            <b>SALVAR</b>
          </button>
        </RightInfo>
      </TopInfo>

      <FormArea>
        <Form onSubmit={(e) => handleSubmit(e)} id="my-form">
          <b>Destinatário</b>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="John Doe"
          />
          <b>Entregador</b>
          <input
            type="text"
            value={deliveryman}
            onChange={(e) => setDeliveryman(e.target.value)}
            placeholder="John Doe"
          />
          <b>Nome do produto</b>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="John Doe"
          />
        </Form>
      </FormArea>
    </Container>
  );
}
