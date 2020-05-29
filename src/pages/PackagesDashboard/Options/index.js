/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';
import InfoPopup from '../Popups/InfoPopup';
import ConfirmationPopup from '../Popups/ConfirmationPopup';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);
  const [orderInfoPopupVisible, setOrderInfoPopupVisible] = useState(false);
  const [confirmationPopupVisible, setConfirmationPopupVisible] = useState(
    false
  );

  function handleShowInfoPopup() {
    setOrderInfoPopupVisible(true);
    setVisible(false);
  }

  function handleShowConfirmationPopup() {
    setConfirmationPopupVisible(true);
    setVisible(false);
  }

  function handleDeletePackage(option) {
    if (option === false) {
      setConfirmationPopupVisible(false);
    }
    if (option === true) {
      setConfirmationPopupVisible(false);
      handleDelete(data.id, index);
    }
  }

  return (
    <>
      {confirmationPopupVisible ? (
        <ConfirmationPopup
          width="350px"
          height="250px"
          setPopupVisible={setConfirmationPopupVisible}
          handleDelete={handleDeletePackage}
        />
      ) : null}
      {orderInfoPopupVisible ? (
        <InfoPopup
          width="410px"
          height="320px"
          setPopupVisible={setOrderInfoPopupVisible}
          data={data}
        />
      ) : null}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={() => setVisible(!visible)}>
            <b>...</b>
          </Badge>
        </OutsideClickHandler>

        <OptionsList visible={visible}>
          <div>
            <Option type="button" onClick={handleShowInfoPopup}>
              <MdRemoveRedEye size={15} color="#7308c4" />
              <b>Vizualizar</b>
            </Option>
            <Link to={`/packages/edit/${data.id}`}>
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
      </Container>
    </>
  );
}
