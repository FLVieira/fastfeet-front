import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import { Container, TopInfo, DeliverymenTable } from './styles';
import Options from './Options';

import api from '~/services/api';

export default function DeliverymenDashboard() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredDeliverymen = deliverymen.filter((deliveryman) =>
    String(deliveryman.name).toLowerCase().includes(filter)
  );

  useEffect(() => {
    async function loadDeliverymen() {
      const { data } = await api.get('/deliverymen', {
        params: { name: '' },
      });
      setDeliverymen(data);
    }
    loadDeliverymen();
  }, []);

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Buscar por entregadores"
          />
        </div>

        <button type="button">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </button>
      </TopInfo>

      <DeliverymenTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredDeliverymen.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>
                <strong>#{deliveryman.id}</strong>
              </td>
              <td>
                <Avatar name={deliveryman.name} size={24} round />
              </td>
              <td>
                <strong>{deliveryman.name}</strong>
              </td>
              <td>
                <strong>{deliveryman.email}</strong>
              </td>
              <td>
                <aside>
                  <Options />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </DeliverymenTable>
    </Container>
  );
}
