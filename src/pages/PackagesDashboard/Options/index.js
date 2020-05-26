/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import OutsideClickHandler from 'react-outside-click-handler';
import { MdRemoveRedEye, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';

import Popup from './Popup';

export default function Options({ data }) {
  const [visible, setVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  function handleShowPopup() {
    setPopupVisible(true);
    setVisible(false);
  }

  return (
    <>
      {popupVisible ? (
        <Popup
          width="410px"
          height="320px"
          data={data}
          setPopupVisible={setPopupVisible}
        />
      ) : null}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)} />
        <Badge onClick={() => setVisible(!visible)}>
          <b>...</b>
        </Badge>

        <OptionsList visible={visible}>
          <div>
            <Option type="button" onClick={handleShowPopup}>
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
      </Container>
    </>
  );
}
