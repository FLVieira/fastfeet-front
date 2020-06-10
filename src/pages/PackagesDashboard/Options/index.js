import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {
  MdRemoveRedEye,
  MdEdit,
  MdDeleteForever,
  MdErrorOutline,
  MdWarning,
} from 'react-icons/md';

import {
  Container,
  Badge,
  OptionsList,
  Option,
  ConfirmationModalContainer,
  InfoModalContainer,
  OrderInfo,
  OrderDates,
  OrderSignature,
} from './styles';

import Modal from '~/components/Modal';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);
  const [orderInfoModal, setOrderInfoModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  let formattedDates;
  if (data.start_date !== null) {
    formattedDates = {
      start_date: format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
    };
  }
  if (data.start_date !== null && data.end_date !== null) {
    formattedDates = {
      start_date: format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
      end_date: format(parseISO(data.end_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
    };
  }

  function handleShowInfoModal() {
    setOrderInfoModal(true);
    setVisible(false);
  }

  function handleShowConfirmationModal() {
    setConfirmationModal(true);
    setVisible(false);
  }

  function handleDeletePackage(option) {
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
      {confirmationModal && (
        <Modal
          width="350px"
          height="250px"
          setModalVisible={setConfirmationModal}
        >
          <ConfirmationModalContainer>
            <MdErrorOutline size={70} color="#e09b24" />
            <h1>Você tem certeza?</h1>
            <h3>Para excluir a encomenda, confirme abaixo.</h3>
            <div>
              <button type="button" onClick={() => handleDeletePackage(true)}>
                Sim
              </button>
              <button type="button" onClick={() => handleDeletePackage(false)}>
                Não
              </button>
            </div>
          </ConfirmationModalContainer>
        </Modal>
      )}

      {orderInfoModal && (
        <Modal width="410px" height="320px" setModalVisible={setOrderInfoModal}>
          <InfoModalContainer>
            <OrderInfo>
              <b>Informações da encomenda -</b>
              <h4>{data.Recipient.street}</h4>
              <h4>
                {data.Recipient.city} - {data.Recipient.state}
              </h4>
              <h4>{data.Recipient.postal_code}</h4>
            </OrderInfo>
            <OrderDates>
              <b>Datas -</b>
              <h4>
                {' '}
                <b>Retirada:</b> {data.start_date && formattedDates.start_date}
              </h4>
              <h4>
                {' '}
                <b>Entrega:</b> {data.end_date && formattedDates.end_date}{' '}
              </h4>
            </OrderDates>
            <OrderSignature>
              <b>Assinatura do destinatário</b>
              {data.signature_picture ? (
                <img src={data.signature_picture.url} alt="Assinatura" />
              ) : (
                <MdWarning size={50} color="#d8de33" />
              )}
            </OrderSignature>
          </InfoModalContainer>
        </Modal>
      )}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={() => setVisible(!visible)}>
            <b>...</b>
          </Badge>
        </OutsideClickHandler>

        <OptionsList visible={visible}>
          <div>
            <Option type="button" onClick={handleShowInfoModal}>
              <MdRemoveRedEye size={15} color="#7308c4" />
              <b>Vizualizar</b>
            </Option>
            <Link to={`/packages/edit/${data.id}`}>
              <Option type="button">
                <MdEdit size={15} color="#0388fc" />
                <b>Editar</b>
              </Option>
            </Link>
            <Option type="button" onClick={handleShowConfirmationModal}>
              <MdDeleteForever size={15} color="#d1281f" />
              <b>Excluir</b>
            </Option>
          </div>
        </OptionsList>
      </Container>
    </>
  );
}

Options.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    Recipient: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postal_code: PropTypes.string.isRequired,
    }).isRequired,
    signature_picture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
