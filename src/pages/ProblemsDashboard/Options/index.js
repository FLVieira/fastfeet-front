import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever, MdErrorOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

import {
  Container,
  Badge,
  OptionsList,
  Option,
  InfoModalContainer,
  ConfirmationModalContainer,
  ModalHeader,
  ModalButtons,
} from './styles';

import Modal from '~/components/Modal';

export default function Options({ data, handleCancel, index }) {
  const [visible, setVisible] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleShowInfoModal() {
    setInfoModal(true);
    setVisible(false);
  }

  function handleShowConfirmationModal() {
    setConfirmationModal(true);
    setVisible(false);
  }

  function handleCancelOrder(option) {
    if (option === false) {
      setConfirmationModal(false);
    }
    if (option === true) {
      setConfirmationModal(false);
      handleCancel(data.id, index);
    }
  }

  return (
    <>
      {infoModal && (
        <Modal width="250px" height="150px" setModalVisible={setInfoModal}>
          <InfoModalContainer>
            <h1>VIZUALIZAR PROBLEMA</h1>
            <p>{data.description}</p>
          </InfoModalContainer>
        </Modal>
      )}

      {confirmationModal && (
        <Modal
          width="350px"
          height="250px"
          setModalVisible={setConfirmationModal}
        >
          <ConfirmationModalContainer>
            <ModalHeader>
              <MdErrorOutline size={70} color="#e09b24" />
              <h1>Você tem certeza?</h1>
              <h3>Para cancelar a entrega, confirme abaixo.</h3>
            </ModalHeader>
            <ModalButtons>
              <button type="button" onClick={() => handleCancelOrder(true)}>
                Sim
              </button>
              <button type="button" onClick={() => handleCancelOrder(false)}>
                Não
              </button>
            </ModalButtons>
          </ConfirmationModalContainer>
        </Modal>
      )}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={handleToggleVisible}>
            <b>...</b>
          </Badge>

          <OptionsList visible={visible}>
            <div>
              <Option type="button" onClick={handleShowInfoModal}>
                <MdEdit size={15} color="#0388fc" />
                <b>Visualizar</b>
              </Option>
              <Option type="button" onClick={handleShowConfirmationModal}>
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

Options.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleCancel: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
