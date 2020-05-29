import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';
import ConfirmationPopup from '../Popups/ConfirmationPopup';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);
  const [confirmationPopupVisible, setConfirmationPopupVisible] = useState(
    false
  );

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleShowConfirmationPopup() {
    setVisible(false);
    setConfirmationPopupVisible(true);
  }

  function handleDeleteDeliveryman(option) {
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
          handleDelete={handleDeleteDeliveryman}
        />
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
