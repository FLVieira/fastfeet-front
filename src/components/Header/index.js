import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, StyledLink } from './styles';
import logo from '~/assets/images/logo.png';
import { signOutAlert } from '../ConfirmationAlerts';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function handleLogout(option, onClose) {
    if (option === true) {
      dispatch(signOut());
    }
    return onClose();
  }

  return isLoggedIn ? (
    <Container>
      <img src={logo} alt="Fast Feet" />
      <nav>
        <ul>
          <li>
            <StyledLink to="/packages">ENCOMENDAS</StyledLink>
          </li>
          <li>
            <StyledLink to="/deliverymen">ENTREGADORES</StyledLink>
          </li>
          <li>
            <StyledLink to="/recipients">DESTINATÁRIOS</StyledLink>
          </li>
          <li>
            <StyledLink to="/problems">PROBLEMAS</StyledLink>
          </li>
        </ul>
        <div>
          <b>Admin FastFeet</b>
          <button type="button" onClick={() => signOutAlert(handleLogout)}>
            sair do sistema
          </button>
        </div>
      </nav>
    </Container>
  ) : null;
}
