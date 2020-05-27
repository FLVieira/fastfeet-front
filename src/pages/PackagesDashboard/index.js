import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import { Container, TopInfo, PackagesTable } from './styles';
import Status from './Status';
import Options from './Options';

import api from '~/services/api';

export default function PackagesDashboard() {
  const [packages, setPackages] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredPackages = packages.filter((pack) =>
    String(pack.id).includes(filter)
  );

  useEffect(() => {
    async function loadPackages() {
      const { data } = await api.get('/orders', {
        params: { product: '' },
      });
      const dataPlusStatus = data.map((pack) => {
        let status = 'pendente';
        if (pack.start_date !== null) {
          status = 'retirada';
        }
        if (pack.canceled_at !== null) {
          status = 'cancelada';
        }
        if (pack.end_date !== null) {
          status = 'entregue';
        }
        return {
          ...pack,
          status,
        };
      });
      setPackages(dataPlusStatus);
    }
    loadPackages();
  }, []);

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Buscar por encomendas"
          />
        </div>

        <Link to="/deliverymen/register">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </Link>
      </TopInfo>

      <PackagesTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th />
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredPackages.map((pack) => (
            <tr key={pack.id}>
              <td>
                <strong>#{pack.id}</strong>
              </td>
              <td>
                <strong>{pack.Recipient.receiver_name}</strong>
              </td>
              <td>
                <div>
                  <Avatar name={pack.Deliveryman.name} size={24} round />
                  <strong>{pack.Deliveryman.name}</strong>
                </div>
              </td>
              <td>
                <strong>{pack.Recipient.city}</strong>
              </td>
              <td>
                <strong>{pack.Recipient.state}</strong>
              </td>
              <td>
                <Status status={pack.status} />
              </td>
              <td />
              <td>
                <aside>
                  <Options data={pack} />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </PackagesTable>
    </Container>
  );
}
