import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';

import { Container, ConfirmationContainer } from './styles';

export default function Modal(props) {
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

Modal.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  children: PropTypes.PropTypes.element.isRequired,
};
