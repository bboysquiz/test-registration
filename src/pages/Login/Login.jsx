import React, {useState} from 'react';
import './login.sass';
import Header from '../../components/header/Header';
import data from '../../assets/db.json';
import { setLogin } from '../../store/loginSlice';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.login);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { users: usersById } = data;
  const users = Object.values(usersById);

  function findUser(login) {
    return users.find(user => user.login === login);
  }

  function checkPassword(user, password) {
    return user.password === password;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = findUser(loginValue);

    if (!user) {
      alert('User not found');
      return;
    }

    const isPasswordCorrect = checkPassword(user, passwordValue);

    if (!isPasswordCorrect) {
      alert('This password is not correct');
      return;
    }
    dispatch(setLogin());
    window.location.assign('http://localhost:3000/Profile');
  }
  return (
    <div>
      <Header />
      <section className="login">
        <div className="login__container">
          <h2 className="login__title">Autorisation</h2>
          <form onSubmit={handleSubmit} className={`login__form ${isLogin ? 'login__form_hiden' : 'login__form_showed'} `}>
            <input
              type="text"
              className="login__username"
              placeholder="Enter your login"
              value={loginValue}
              onChange={(event) => setLoginValue(event.target.value)}
            />
            <input
              type="password"
              className="login__password"
              placeholder="Enter your password"
              value={passwordValue}
              onChange={(event) => setPasswordValue(event.target.value)}
            />
            <input type="submit" className="login__submit" value='sign in' />
          </form>
          <h3 className={`login__description ${isLogin ? 'login__description_showed' : 'login__description_hiden'} `}>You've already logined. You don't need this now.</h3>
        </div>
      </section>
    </div>
  )
}


export default Login;