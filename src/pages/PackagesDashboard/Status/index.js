import React from 'react';

import { Background, Circle } from './styles';

export default function Status(props) {
  // eslint-disable-next-line react/prop-types
  const { status } = props;
  let theme = '#eee';
  let statusText;
  if (status === 'entregue') {
    theme = '#4feb34';
    statusText = 'Entregue';
  } else if (status === 'pendente') {
    theme = '#d8de33';
    statusText = 'Pendente';
  } else if (status === 'cancelada') {
    theme = '#d1281f';
    statusText = 'Cancelada';
  } else if (status === 'retirada') {
    theme = '#0388fc';
    statusText = 'Retirada';
  }

  return (
    <Background theme={theme} status={status}>
      <Circle theme={theme} />
      <b theme={theme}>{statusText}</b>
    </Background>
  );
}
