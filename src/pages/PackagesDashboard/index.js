import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import Avatar from 'react-avatar';

import { Container, TopInfo, PackagesTable } from './styles';
import Status from './Status';
import Options from './Options';

export default function PackagesDashboard() {
  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      <TopInfo>
        <div>
          <MdSearch color="#909090" size={20} />
          <input type="text" placeholder="Buscar por encomendas" />
        </div>

        <button type="button">
          <MdAdd size={24} color="#fff" />
          <b>CADASTRAR</b>
        </button>
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
          <tr>
            <td>
              <strong>#01</strong>
            </td>
            <td>
              <div>
                <Avatar name="Ludwig Van" size={24} round />
                <strong>Ludwig van Beethoven</strong>
              </div>
            </td>
            <td>
              <strong>John Doe</strong>
            </td>
            <td>
              <strong>Rio do sul</strong>
            </td>
            <td>
              <strong>Santa Catarina</strong>
            </td>
            <td>
              <Status status="entregue" />
            </td>
            <td />
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
              <div>
                <Avatar name="Edson Muniz" size={24} round />
                <strong>Edson Muniz</strong>
              </div>
            </td>
            <td>
              <strong>João Bobo</strong>
            </td>
            <td>
              <strong>Ituiutaba</strong>
            </td>
            <td>
              <strong>Minas Gerais</strong>
            </td>
            <td>
              <Status status="pendente" />
            </td>
            <td />
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
              <div>
                <Avatar name="Igor Lourenço" size={24} round />
                <strong>Igor Lourenço</strong>
              </div>
            </td>
            <td>
              <strong>Maria Silveira</strong>
            </td>
            <td>
              <strong>Uberlândia</strong>
            </td>
            <td>
              <strong>Minas Gerais</strong>
            </td>
            <td>
              <Status status="cancelada" />
            </td>
            <td />
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
              <div>
                <Avatar name="Jõao Souza" size={24} round />
                <strong>Jõao Souza</strong>
              </div>
            </td>
            <td>
              <strong>Naira Castro</strong>
            </td>
            <td>
              <strong>Rio Verde</strong>
            </td>
            <td>
              <strong>Goiás</strong>
            </td>
            <td>
              <Status status="retirada" />
            </td>
            <td />
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
              <div>
                <Avatar name="Ludwig Van" size={24} round />
                <strong>Ludwig van Beethoven</strong>
              </div>
            </td>
            <td>
              <strong>John Doe</strong>
            </td>
            <td>
              <strong>Rio do sul</strong>
            </td>
            <td>
              <strong>Santa Catarina</strong>
            </td>
            <td>
              <Status status="entregue" />
            </td>
            <td />
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
              <div>
                <Avatar name="Edson Muniz" size={24} round />
                <strong>Edson Muniz</strong>
              </div>
            </td>
            <td>
              <strong>João Bobo</strong>
            </td>
            <td>
              <strong>Ituiutaba</strong>
            </td>
            <td>
              <strong>Minas Gerais</strong>
            </td>
            <td>
              <Status status="pendente" />
            </td>
            <td />
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
              <div>
                <Avatar name="Igor Lourenço" size={24} round />
                <strong>Igor Lourenço</strong>
              </div>
            </td>
            <td>
              <strong>Maria Silveira</strong>
            </td>
            <td>
              <strong>Uberlândia</strong>
            </td>
            <td>
              <strong>Minas Gerais</strong>
            </td>
            <td>
              <Status status="cancelada" />
            </td>
            <td />
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
              <div>
                <Avatar name="Jõao Souza" size={24} round />
                <strong>Jõao Souza</strong>
              </div>
            </td>
            <td>
              <strong>Naira Castro</strong>
            </td>
            <td>
              <strong>Rio Verde</strong>
            </td>
            <td>
              <strong>Goiás</strong>
            </td>
            <td>
              <Status status="retirada" />
            </td>
            <td />
            <td>
              <aside>
                <Options />
              </aside>
            </td>
          </tr>
        </tbody>
      </PackagesTable>
    </Container>
  );
}
