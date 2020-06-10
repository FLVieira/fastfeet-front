import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import Select from 'react-select';
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

export default function PackagesRegister({ match }) {
  // From API
  const [recipients, setRecipients] = useState('');
  const [deliverymen, setDeliverymen] = useState('');
  // Selected ones
  const [selectedRecipient, setSelectedRecipient] = useState({});
  const [selectedDeliveryman, setSelectedDeliveryman] = useState({});
  // Checking if edit/register
  const { id } = match.params;

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
    async function loadOrderInfo() {
      const { data } = await api.get(`/orders/${id}`);
      setProduct(data.product);
      setSelectedRecipient({
        value: data.Recipient.id,
        label: data.Recipient.receiver_name,
      });
      setSelectedDeliveryman({
        value: data.Deliveryman.id,
        label: data.Deliveryman.name,
      });
    }
    loadRecipients();
    loadDeliverymen();
    if (id) {
      loadOrderInfo();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      recipient_id: selectedRecipient.value,
      deliveryman_id: selectedDeliveryman.value,
      product,
    };
    if (!id) {
      await api.post('/orders', submitData);
      toast.success('Encomenda cadastrada com sucesso!');
      return history.push('/packages');
    }
    await api.put(`/orders/${id}`, submitData);
    toast.success('Encomenda editada com sucesso!');
    return history.push('/packages');
  }

  return (
    <Container>
      <TopInfo>
        <LeftInfo>
          <h1>{id ? 'Edição de encomendas' : 'Cadastro de encomendas'}</h1>
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
            value={selectedRecipient}
          />
          <b>Entregador</b>
          <Select
            options={deliverymen}
            placeholder="Selecione o entregador"
            onChange={setSelectedDeliveryman}
            value={selectedDeliveryman}
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

PackagesRegister.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
