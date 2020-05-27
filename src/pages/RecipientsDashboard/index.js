import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, TopInfo, RecipientsTable } from './styles';
import Options from './Options';

import api from '~/services/api';

export default function RecipientsDashboard() {
  const [recipients, setRecipients] = useState([]);
  const [filteredRecipients, setFilteredRecipients] = useState([]);

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
      setFilteredRecipients(dataPlusFormattedAdress);
    }
    loadRecipients();
  }, []);

  function handleFilterChange(e) {
    setFilteredRecipients(
      recipients.filter((recipient) =>
        String(recipient.receiver_name).includes(e.target.value)
      )
    );
  }

  async function handleDeleteRecipient(id, index) {
    await api.delete(`/recipients/${id}`);
    const newRecipients = [...filteredRecipients];
    newRecipients.splice(index, 1);
    setFilteredRecipients(newRecipients);
  }

  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input
            onChange={(e) => handleFilterChange(e)}
            type="text"
            placeholder="Buscar por destinatários"
          />
        </div>

        <Link to="/recipients/register">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </Link>
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
          {filteredRecipients.map((recipient, index) => (
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
                  <Options
                    data={recipient}
                    index={index}
                    handleDelete={handleDeleteRecipient}
                  />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </RecipientsTable>
    </Container>
  );
}
