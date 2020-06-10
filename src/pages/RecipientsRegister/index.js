import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

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

export default function RecipientsRegister({ match }) {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const { id } = match.params;

  useEffect(() => {
    async function loadRecipient() {
      const { data } = await api.get(`/recipients/${id}`);
      setName(data.receiver_name);
      setStreet(data.street);
      setNumber(data.number);
      setComplement(data.adress_complement);
      setCity(data.city);
      setState(data.state);
      setPostalCode(data.postal_code);
    }
    if (id) {
      loadRecipient();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      receiver_name: name,
      street,
      number,
      adress_complement: complement,
      city,
      state,
      postal_code: postalCode,
    };
    if (!id) {
      await api.post('/recipients', submitData);
      toast.success('Destinatário cadastrado com sucesso!');
      return history.push('/recipients');
    }
    await api.put(`/recipients/${id}`, submitData);
    toast.success('Destinatário editado com sucesso!');
    return history.push('/recipients');
  }

  return (
    <Container>
      <TopInfo>
        <LeftInfo>
          <h1>
            {id ? 'Edição de destinatários' : 'Cadastro de destinatários'}
          </h1>
        </LeftInfo>

        <RightInfo>
          <Link to="/recipients">
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
          <div>
            <b>Nome</b>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
            <b>Rua</b>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Rua Beethoven"
            />
            <b>Número</b>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="1729"
            />
            <b>Complemento</b>
            <input
              type="text"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              placeholder="Casa"
            />
          </div>
          <div>
            <b>Cidade</b>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Diadema"
            />
            <b>Estado</b>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="São Paulo"
            />
            <b>CEP</b>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="09960-580"
            />
          </div>
        </Form>
      </FormArea>
    </Container>
  );
}

RecipientsRegister.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
