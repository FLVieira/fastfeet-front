import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, OptionsList, Option } from './styles';

import Popup from './Popup';

export default function Options({ data }) {
  const [visible, setVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  function handleShowPopup() {
    setPopupVisible(true);
    setVisible(false);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      {popupVisible ? (
        <Popup
          width="250px"
          height="150px"
          data={data}
          setPopupVisible={setPopupVisible}
        />
      ) : null}

      <Container>
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
          <Badge onClick={handleToggleVisible}>
            <b>...</b>
          </Badge>

          <OptionsList visible={visible}>
            <div>
              <Option type="button" onClick={handleShowPopup}>
                <MdEdit size={15} color="#0388fc" />
                <b>Visualizar</b>
              </Option>
              <Option type="button">
                <MdDeleteForever size={15} color="#d1281f" />
                <b>Cancelar encomenda</b>
              </Option>
            </div>
          </OptionsList>
        </OutsideClickHandler>
      </Container>
    </>
  );
}
