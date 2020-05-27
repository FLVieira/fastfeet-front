import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import { Container, TopInfo, DeliverymenTable } from './styles';
import Options from './Options';

import api from '~/services/api';

export default function DeliverymenDashboard() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [filteredDeliverymen, setFilteredDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const { data } = await api.get('/deliverymen', {
        params: { name: '' },
      });
      setDeliverymen(data);
      setFilteredDeliverymen(data);
    }
    loadDeliverymen();
  }, []);

  function handleFilterChange(e) {
    setFilteredDeliverymen(
      deliverymen.filter((deliveryman) =>
        String(deliveryman.name).includes(e.target.value)
      )
    );
  }

  async function handleDeleteDeliveryman(id, index) {
    await api.delete(`/deliverymen/${id}`);
    const newDeliverymen = [...filteredDeliverymen];
    newDeliverymen.splice(index, 1);
    setFilteredDeliverymen(newDeliverymen);
  }

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input
            onChange={(e) => handleFilterChange(e)}
            type="text"
            placeholder="Buscar por entregadores"
          />
        </div>

        <Link to="/deliverymen/register">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </Link>
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
          {filteredDeliverymen.map((deliveryman, index) => (
            <tr key={deliveryman.id}>
              <td>
                <strong>#{deliveryman.id}</strong>
              </td>
              <td>
                {deliveryman.avatar ? (
                  <img src={deliveryman.avatar.url} alt="Imagem" />
                ) : (
                  <Avatar name={deliveryman.name} size={24} round />
                )}
              </td>
              <td>
                <strong>{deliveryman.name}</strong>
              </td>
              <td>
                <strong>{deliveryman.email}</strong>
              </td>
              <td>
                <aside>
                  <Options
                    data={deliveryman}
                    index={index}
                    handleDelete={handleDeleteDeliveryman}
                  />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </DeliverymenTable>
    </Container>
  );
}
