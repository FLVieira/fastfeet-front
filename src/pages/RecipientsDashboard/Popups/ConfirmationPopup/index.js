/* eslint-disable react/prop-types */
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdErrorOutline } from 'react-icons/md';

import { Container, ConfirmationContainer } from './styles';

export default function Popup(props) {
  const { width, height, setPopupVisible, handleDelete } = props;

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setPopupVisible(false)}>
        <ConfirmationContainer width={String(width)} height={String(height)}>
          <div>
            <MdErrorOutline size={70} color="#e09b24" />
            <h1>Você tem certeza?</h1>
            <h3>Para excluir o destinatário, confirme abaixo.</h3>
            <div>
              <button type="button" onClick={() => handleDelete(true)}>
                Sim
              </button>
              <button type="button" onClick={() => handleDelete(false)}>
                Não
              </button>
            </div>
          </div>
        </ConfirmationContainer>
      </OutsideClickHandler>
    </Container>
  );
}
