import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

import {
  Container,
  TopInfo,
  LeftInfo,
  RightInfo,
  FormArea,
  Form,
} from './styles';

import axios from '~/services/api';
import history from '~/services/history';

export default function DeliverymenRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // Posting the picture
    if (picture !== '') {
      const file = e.target.picture.files[0];
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`/files`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Posting the deliveryman
      const avatar_id = response.data.id;
      await axios.post('/deliverymen', {
        name,
        email,
        avatar_id,
      });
      history.push('/deliverymen');
    }
    await axios.post('/deliverymen', {
      name,
      email,
    });
    history.push('/deliverymen');
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
          <h1>Cadastro de entregadores</h1>
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

/*
{id ? (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      ) : null}
      */
