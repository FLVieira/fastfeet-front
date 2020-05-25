import React, { useState } from 'react';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';

export default function Options() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <b>...</b>
      </Badge>
    </Container>
  );
}

/*
<OptionsList visible={visible}>
        <Option>
          <button type="button">
            <MdRemoveRedEye size={15} color="#7308c4" />
            <b>Vizualizar</b>
          </button>
        </Option>
        <Option>
          <button type="button">
            <MdEdit size={15} color="#0388fc" />
            <b>Editar</b>
          </button>
        </Option>
        <Option>
          <button type="button">
            <MdDeleteForever size={15} color="#d1281f" />
            <b>Excluir</b>
          </button>
        </Option>
      </OptionsList>
*/
