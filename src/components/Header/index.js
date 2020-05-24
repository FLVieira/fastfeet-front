import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <Container>
      <div>Hello Word </div>
      <div>Oi Header</div>
    </Container>
  ) : null;
}
