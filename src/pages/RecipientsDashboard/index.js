import React, { useEffect, useState } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, TopInfo, RecipientsTable } from './styles';
import Options from './Options';

import api from '~/services/api';

export default function RecipientsDashboard() {
  const [recipients, setRecipients] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredRecipients = recipients.filter((recipient) =>
    String(recipient.receiver_name).toLowerCase().includes(filter)
  );

  useEffect(() => {
    async function loadRecipients() {
      const { data } = await api.get('/recipients', {
        params: { name: '' },
      });
      const dataPlusFormattedAdress = data.map((recipient) => {
        const formattedAdress = `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`;
        return {
          ...recipient,
          formattedAdress,
        };
      });
      setRecipients(dataPlusFormattedAdress);
    }
    loadRecipients();
  }, []);

  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Buscar por destinatários"
          />
        </div>

        <button type="button">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </button>
      </TopInfo>

      <RecipientsTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>
                <strong>#{recipient.id}</strong>
              </td>
              <td>
                <strong>{recipient.receiver_name}</strong>
              </td>
              <td>
                <strong>{recipient.formattedAdress}</strong>
              </td>
              <td>
                <aside>
                  <Options />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </RecipientsTable>
    </Container>
  );
}
