/* eslint-disable react/prop-types */
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { Container } from './styles';

export default function Popup(props) {
  const { width, height, data, setPopupVisible } = props;

  return (
    <Container width={String(width)} height={String(height)}>
      <OutsideClickHandler onOutsideClick={() => setPopupVisible(false)}>
        <section>
          <div>
            <h1>VIZUALIZAR PROBLEMA</h1>
            <p>{data.description}</p>
          </div>
        </section>
      </OutsideClickHandler>
    </Container>
  );
}
