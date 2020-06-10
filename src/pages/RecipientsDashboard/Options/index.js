import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever, MdErrorOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

import {
  Container,
  Badge,
  OptionsList,
  Option,
  ModalContainer,
} from './styles';
import Modal from '~/components/Modal';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleShowModal() {
    setVisible(false);
    setModalVisible(true);
  }

  function handleDeleteDeliveryman(option) {
    if (option === false) {
      setModalVisible(false);
    }
    if (option === true) {
      setModalVisible(false);
      handleDelete(data.id, index);
    }
  }

  return (
    <>
      {modalVisible && (
        <Modal width="350px" height="250px" setModalVisible={setModalVisible}>
          <ModalContainer>
            <MdErrorOutline size={70} color="#e09b24" />
            <h1>Você tem certeza?</h1>
            <h3>Para excluir o destinatário, confirme abaixo.</h3>
            <div>
              <button
                type="button"
                onClick={() => handleDeleteDeliveryman(true)}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => handleDeleteDeliveryman(false)}
              >
                Não
              </button>
            </div>
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
              <Link to={`/recipients/edit/${data.id}`}>
                <Option type="button">
                  <MdEdit size={15} color="#0388fc" />
                  <b>Editar</b>
                </Option>
              </Link>
              <Option type="button" onClick={handleShowModal}>
                <MdDeleteForever size={15} color="#d1281f" />
                <b>Excluir</b>
              </Option>
            </div>
          </OptionsList>
        </OutsideClickHandler>
      </Container>
    </>
  );
}

Options.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
