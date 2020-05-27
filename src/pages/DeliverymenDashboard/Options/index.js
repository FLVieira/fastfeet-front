import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';

export default function Options({ data, handleDelete, index }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <Badge onClick={handleToggleVisible}>
          <b>...</b>
        </Badge>

        <OptionsList visible={visible}>
          <div>
            <Option type="button">
              <MdEdit size={15} color="#0388fc" />
              <b>Editar</b>
            </Option>
            <Option type="button" onClick={() => handleDelete(data.id, index)}>
              <MdDeleteForever size={15} color="#d1281f" />
              <b>Excluir</b>
            </Option>
          </div>
        </OptionsList>
      </OutsideClickHandler>
    </Container>
  );
}
