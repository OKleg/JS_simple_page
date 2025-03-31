import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../../../reducers/authSlice';

import styles from './Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === '12345') {
      dispatch(loginSuccess());
      navigate('/profile');
    } else {
      dispatch(loginFailure('Имя пользователя или пароль введены не верно'));
    }
  };

  return (
    <div className={styles.login_container} >
       {error && <p className={styles.error}>{error}</p>}
      <h2>Вход</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Логин :</label>
          <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <label>Пароль:</label>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}