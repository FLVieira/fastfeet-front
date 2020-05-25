import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';

export default function Options() {
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
              <MdRemoveRedEye size={15} color="#7308c4" />
              <b>Vizualizar</b>
            </Option>
            <Option type="button">
              <MdEdit size={15} color="#0388fc" />
              <b>Editar</b>
            </Option>
            <Option type="button">
              <MdDeleteForever size={15} color="#d1281f" />
              <b>Excluir</b>
            </Option>
          </div>
        </OptionsList>
      </OutsideClickHandler>
    </Container>
  );
}
