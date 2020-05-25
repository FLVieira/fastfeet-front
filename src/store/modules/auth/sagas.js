import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as authActions from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(authActions.signInSuccess(token));
    history.push('/packages');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(authActions.signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  delete api.defaults.headers.Authorization;
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
