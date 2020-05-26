import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, StyledLink } from './styles';
import logo from '~/assets/images/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import Popup from './Popup';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [confirmationPopup, setConfirmationPopup] = useState(false);

  function handleLogout(option) {
    if (option === false) {
      setConfirmationPopup(false);
    }
    if (option === true) {
      setConfirmationPopup(false);
      dispatch(signOut());
    }
  }

  return isLoggedIn ? (
    <>
      {confirmationPopup ? (
        <Popup
          width="350px"
          height="250px"
          setPopupVisible={setConfirmationPopup}
          handleLogout={handleLogout}
        />
      ) : null}

      <Container>
        <Link to="/packages">
          <img src={logo} alt="Fast Feet" />
        </Link>
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
            <button type="button" onClick={() => setConfirmationPopup(true)}>
              sair do sistema
            </button>
          </div>
        </nav>
      </Container>
    </>
  ) : null;
}
