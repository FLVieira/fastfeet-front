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

  async function handleCancelOrder(id, index) {
    await api.delete(`/problem/${id}/cancel-delivery`);
    const newProblems = [...problems];
    newProblems.splice(index, 1);
    setProblems(newProblems);
  }

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
          {problems.map((problem, index) => (
            <tr key={problem.id}>
              <td>
                <strong>#{problem.id}</strong>
              </td>
              <td>
                <strong>{problem.description}</strong>
              </td>
              <td>
                <aside>
                  <Options
                    data={problem}
                    index={index}
                    handleCancel={handleCancelOrder}
                  />
                </aside>
              </td>
            </tr>
          ))}
        </tbody>
      </ProblemsTable>
    </Container>
  );
}
