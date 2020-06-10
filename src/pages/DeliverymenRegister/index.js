import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
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

export default function DeliverymenRegister({ match }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  // Checking if id/register
  const [initialEditData, setInitalEditData] = useState({});
  const { id } = match.params;

  useEffect(() => {
    async function loadDeliverymanInfo() {
      const { data } = await api.get(`/deliverymen/${id}`);
      setName(data.name);
      setEmail(data.email);
      if (data.avatar) {
        setPicture(data.avatar.url);
      }
      setInitalEditData(data);
    }
    if (id) {
      loadDeliverymanInfo();
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      try {
        if (initialEditData.avatar && picture === initialEditData.avatar.url) {
          await api.put(`/deliverymen/${id}`, {
            name,
            email,
          });
          toast.success('Entregador editado com sucesso!');
          return history.push('/deliverymen');
        }
      } catch (err) {
        return toast.error(err.response.data.error);
      }
      try {
        if (initialEditData.avatar && picture !== initialEditData.avatar.url) {
          const file = e.target.picture.files[0];
          const formData = new FormData();
          formData.append('file', file);
          const response = await api.post(`/files`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const avatar_id = response.data.id;
          await api.put(`/deliverymen/${id}`, {
            name,
            email,
            avatar_id,
          });
          toast.success('Entregador editado com sucesso!');
          return history.push('/deliverymen');
        }
      } catch (err) {
        return toast.error(err.response.data.error);
      }
      try {
        if (!initialEditData.avatar && picture === '') {
          await api.put(`/deliverymen/${id}`, {
            name,
            email,
          });
          toast.success('Entregador editado com sucesso!');
          return history.push('/deliverymen');
        }
      } catch (err) {
        return toast.error(err.response.data.error);
      }
      try {
        if (!initialEditData.avatar && picture !== '') {
          const file = e.target.picture.files[0];
          const formData = new FormData();
          formData.append('file', file);
          const response = await api.post(`/files`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const avatar_id = response.data.id;
          await api.put(`/deliverymen/${id}`, {
            name,
            email,
            avatar_id,
          });
          toast.success('Entregador editado com sucesso!');
          return history.push('/deliverymen');
        }
      } catch (err) {
        return toast.error(err.response.data.error);
      }
    }

    try {
      if (picture !== '') {
        // Posting the picture
        const file = e.target.picture.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const response = await api.post(`/files`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // Posting the deliveryman
        const avatar_id = response.data.id;
        await api.post('/deliverymen', {
          name,
          email,
          avatar_id,
        });
        toast.success('Entregador cadastrado com sucesso!');
        return history.push('/deliverymen');
      }
      await api.post('/deliverymen', {
        name,
        email,
      });
      toast.success('Entregador cadastrado com sucesso!');
      return history.push('/deliverymen');
    } catch (err) {
      return toast.error(err.response.data.error);
    }
  }

  async function handlePictureChange(e) {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setPicture(fileURL);
  }

  return (
    <Container>
      <TopInfo>
        <LeftInfo>
          <h1>{id ? 'Edição de entregadores' : 'Cadastro de entregadores'}</h1>
        </LeftInfo>

        <RightInfo>
          <Link to="/deliverymen">
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
          <label htmlFor="picture">
            {picture ? (
              <img src={picture} alt="Foto do aluno" />
            ) : (
              <FaUserCircle size={180} color="#909090" />
            )}
            <input
              type="file"
              id="picture"
              onChange={(e) => handlePictureChange(e)}
            />
          </label>

          <b>Nome</b>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
          <b>Email</b>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@rocketseat.com"
          />
        </Form>
      </FormArea>
    </Container>
  );
}

DeliverymenRegister.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
