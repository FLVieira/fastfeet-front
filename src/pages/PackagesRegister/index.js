import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import Select from 'react-select';
import { toast } from 'react-toastify';

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
  // From API
  const [recipients, setRecipients] = useState('');
  const [deliverymen, setDeliverymen] = useState('');
  // Selected ones
  const [selectedRecipient, setSelectedRecipient] = useState({});
  const [selectedDeliveryman, setSelectedDeliveryman] = useState({});

  const [product, setProduct] = useState('');

  useEffect(() => {
    async function loadRecipients() {
      const { data } = await api.get('/recipients', {
        params: {
          name: '',
        },
      });
      const usableData = data.map((r) => {
        return {
          value: r.id,
          label: r.receiver_name,
        };
      });
      setRecipients(usableData);
    }
    async function loadDeliverymen() {
      const { data } = await api.get('/deliverymen', {
        params: {
          name: '',
        },
      });
      const usableData = data.map((r) => {
        return {
          value: r.id,
          label: r.name,
        };
      });
      setDeliverymen(usableData);
    }
    loadRecipients();
    loadDeliverymen();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      recipient_id: selectedRecipient.value,
      deliveryman_id: selectedDeliveryman.value,
      product,
    };
    await api.post('/orders', submitData);
    toast.success('Encomenda cadastrada com sucesso!');
    history.push('/packages');
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
          <Select
            options={recipients}
            placeholder="Selecione o destinatário"
            onChange={setSelectedRecipient}
          />
          <b>Entregador</b>
          <Select
            options={deliverymen}
            placeholder="Selecione o entregador"
            onChange={setSelectedDeliveryman}
          />
          <b>Nome do produto</b>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Profile Unity RTA"
          />
        </Form>
      </FormArea>
    </Container>
  );
}
