/* eslint-disable react/prop-types */
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Container, ConfirmationContainer } from './styles';

export default function Popup(props) {
  const { width, height, setModalVisible, children } = props;

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setModalVisible(false)}>
        <ConfirmationContainer width={String(width)} height={String(height)}>
          {children}
        </ConfirmationContainer>
      </OutsideClickHandler>
    </Container>
  );
}
