import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdErrorOutline } from 'react-icons/md';

import { Container } from './styles';

function SignOut(props) {
  // eslint-disable-next-line react/prop-types
  const { handler, onClose } = props;
  return (
    <Container>
      <MdErrorOutline size={70} color="#e09b24" />
      <h1>Você tem certeza?</h1>
      <h3>Para sair do sistema, confirme abaixo.</h3>
      <div>
        <button type="button" onClick={() => handler(true, onClose)}>
          Sim
        </button>
        <button type="button" onClick={() => handler(false, onClose)}>
          Não
        </button>
      </div>
    </Container>
  );
}

export function signOutAlert(handler) {
  return confirmAlert({
    // eslint-disable-next-line react/prop-types
    customUI: ({ onClose }) => <SignOut onClose={onClose} handler={handler} />,
    closeOnEscape: true,
    closeOnClickOutside: true,
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {},
  });
}
