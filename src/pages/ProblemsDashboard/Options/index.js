import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import {
  Container,
  Badge,
  OptionsList,
  Option,
  ModalContainer,
} from './styles';

import Modal from '~/components/Modal';

export default function Options({ data }) {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleShowModal() {
    setModalVisible(true);
    setVisible(false);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      {modalVisible && (
        <Modal
          width="250px"
          height="150px"
          data={data}
          setModalVisible={setModalVisible}
        >
          <ModalContainer>
            <h1>VIZUALIZAR PROBLEMA</h1>
            <p>{data.description}</p>
          </ModalContainer>
        </Modal>
      )}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={handleToggleVisible}>
            <b>...</b>
          </Badge>

          <OptionsList visible={visible}>
            <div>
              <Option type="button" onClick={handleShowModal}>
                <MdEdit size={15} color="#0388fc" />
                <b>Visualizar</b>
              </Option>
              <Option type="button">
                <MdDeleteForever size={15} color="#d1281f" />
                <b>Cancelar encomenda</b>
              </Option>
            </div>
          </OptionsList>
        </OutsideClickHandler>
      </Container>
    </>
  );
}
