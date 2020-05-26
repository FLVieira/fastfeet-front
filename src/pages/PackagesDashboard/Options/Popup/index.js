/* eslint-disable react/prop-types */
import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdWarning } from 'react-icons/md';

import { Container } from './styles';

export default function Popup(props) {
  const { width, height, data, setPopupVisible } = props;

  let formattedDates;
  if (data.start_date !== null) {
    formattedDates = {
      start_date: format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
    };
  }
  if (data.start_date !== null && data.end_date !== null) {
    formattedDates = {
      start_date: format(parseISO(data.start_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
      end_date: format(parseISO(data.end_date), "dd'/0'M'/'yyyy", {
        locale: pt,
      }),
    };
  }

  return (
    <Container width={String(width)} height={String(height)}>
      <OutsideClickHandler onOutsideClick={() => setPopupVisible(false)} />
      <section>
        <div>
          <div style={{ textAlign: 'left' }}>
            <strong>Informações da encomenda</strong>
            <p>
              {data.Recipient.street} <br />
              {data.Recipient.city} - {data.Recipient.state} <br />
              {data.Recipient.postal_code}
            </p>
          </div>
          <div>
            <strong>Datas</strong>
            <p>
              <b>Retirada:</b> {data.start_date && formattedDates.start_date}
              <br />
              <b>Entrega:</b> {data.end_date && formattedDates.end_date}
            </p>
          </div>
          <div>
            <strong>Assinatura do destinatário</strong>
            {data.signature_picture ? (
              <img src={data.signature_picture.url} alt="Assinatura" />
            ) : (
              <MdWarning size={50} color="#d8de33" />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
