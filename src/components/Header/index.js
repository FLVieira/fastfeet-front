import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdErrorOutline } from 'react-icons/md';

import { Container, StyledLink, ModalContainer } from './styles';
import logo from '~/assets/images/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import Modal from '../Modal';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [confirmationModal, setConfirmationModal] = useState(false);

  function handleLogout(option) {
    if (option === false) {
      setConfirmationModal(false);
    }
    if (option === true) {
      setConfirmationModal(false);
      dispatch(signOut());
    }
  }

  return isLoggedIn ? (
    <>
      {confirmationModal ? (
        <Modal
          width="350px"
          height="250px"
          setModalVisible={setConfirmationModal}
        >
          <ModalContainer>
            <MdErrorOutline
              size={70}
              color="#e09b24"
              style={{ marginTop: 10 }}
            />
            <h1>Você tem certeza?</h1>
            <h3>Para sair do sistema, confirme abaixo.</h3>
            <div>
              <button type="button" onClick={() => handleLogout(true)}>
                Sim
              </button>
              <button type="button" onClick={() => handleLogout(false)}>
                Não
              </button>
            </div>
          </ModalContainer>
        </Modal>
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
            <button type="button" onClick={() => setConfirmationModal(true)}>
              sair do sistema
            </button>
          </div>
        </nav>
      </Container>
    </>
  ) : null;
}
