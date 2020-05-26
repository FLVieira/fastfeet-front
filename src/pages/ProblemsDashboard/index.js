import React, { useEffect, useState } from 'react';

import { Container, ProblemsTable } from './styles';
import Options from './Options';

import api from '~/services/api';

export default function ProblemsDashboard() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const { data } = await api.get('/delivery/problems');
      setProblems(data);
    }
    loadProblems();
  }, []);

  return (
    <Container>
      <h1>Problemas na entrega</h1>

      <ProblemsTable>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>
                <strong>#{problem.id}</strong>
              </td>
              <td>
                <strong>{problem.description}</strong>
              </td>
              <td>
                <aside>
                  <Options />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </ProblemsTable>
    </Container>
  );
}
