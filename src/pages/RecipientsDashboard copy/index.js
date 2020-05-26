import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import { Container, TopInfo, DeliverymenTable } from './styles';
import Options from './Options';

export default function RecipientsDashboard() {
  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input type="text" placeholder="Buscar por destinatários" />
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
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>#01</strong>
            </td>
            <td>
              <strong>Ludwig Van Beethoven</strong>
            </td>
            <td>
              <strong>Rua Beethoven, 1729, Diadema - São Paulo</strong>
            </td>
            <td>
              <aside>
                <Options />
              </aside>
            </td>
          </tr>
          <tr>
            <td>
              <strong>#01</strong>
            </td>
            <td>
              <strong>Ludwig Van Beethoven</strong>
            </td>
            <td>
              <strong>Rua Beethoven, 1729, Diadema - São Paulo</strong>
            </td>
            <td>
              <aside>
                <Options />
              </aside>
            </td>
          </tr>
          <tr>
            <td>
              <strong>#01</strong>
            </td>
            <td>
              <strong>Ludwig Van Beethoven</strong>
            </td>
            <td>
              <strong>Rua Beethoven, 1729, Diadema - São Paulo</strong>
            </td>
            <td>
              <aside>
                <Options />
              </aside>
            </td>
          </tr>
          <tr>
            <td>
              <strong>#01</strong>
            </td>
            <td>
              <strong>Ludwig Van Beethoven</strong>
            </td>
            <td>
              <strong>Rua Beethoven, 1729, Diadema - São Paulo</strong>
            </td>
            <td>
              <aside>
                <Options />
              </aside>
            </td>
          </tr>
        </tbody>
      </DeliverymenTable>
    </Container>
  );
}
