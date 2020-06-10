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
  ModalHeader,
  ModalButtons,
} from './styles';

import Modal from '~/components/Modal';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleShowConfirmationPopup() {
    setVisible(false);
    setConfirmationModal(true);
  }

  function handleDeleteDeliveryman(option) {
    if (option === false) {
      setConfirmationModal(false);
    }
    if (option === true) {
      setConfirmationModal(false);
      handleDelete(data.id, index);
    }
  }

  return (
    <>
      {confirmationModal ? (
        <Modal
          width="350px"
          height="250px"
          setModalVisible={setConfirmationModal}
        >
          <ModalContainer>
            <ModalHeader>
              <MdErrorOutline size={70} color="#e09b24" />
              <h1>Você tem certeza?</h1>
              <h3>Para excluir o entregador, confirme abaixo.</h3>
            </ModalHeader>
            <ModalButtons>
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
            </ModalButtons>
          </ModalContainer>
        </Modal>
      ) : null}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={handleToggleVisible}>
            <b>...</b>
          </Badge>

          <OptionsList visible={visible}>
            <div>
              <Link to={`/deliverymen/edit/${data.id}`}>
                <Option type="button">
                  <MdEdit size={15} color="#0388fc" />
                  <b>Editar</b>
                </Option>
              </Link>
              <Option type="button" onClick={handleShowConfirmationPopup}>
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
