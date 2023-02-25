import React, { useState } from 'react';
import './registration.sass';
import Header from '../../components/header/Header';
import data from '../../assets/db.json';
import { useSelector } from "react-redux";

const Registration = () => {
  const login = useSelector(state => state.login.login);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [secondPasswordValue, setSecondPasswordValue] = useState('');

  const { users: usersById } = data;
  const users = Object.values(usersById);

  function findUser(login) {
    return users.find(user => user.login === login);
  }

  function checkPasswords(firstPassword, secondPassword) {
    return firstPassword === secondPassword;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = findUser(loginValue);
    if (user) {
      alert('This user already exists');
      return;
    }
    const isPasswordSimilar = checkPasswords(passwordValue, secondPasswordValue);
    if (!isPasswordSimilar) {
      alert('Passwords are not similar');
      return;
    }
    alert("Success! You've registered now, but in my task I don't have to insert your account in database, cause you can't use this data.");
  }
  return (
    <div>
      <Header />
      <section className="registraion">
        <div className="registration__container">
          <h2 className='registration__title'>Registration</h2>
          <form onSubmit={handleSubmit} className={`registration__form ${login ? 'registration__form_hiden' : 'registration__form_showed'}`}>
            <h3 className="registration__field-title">Name</h3>
            <input type="text" className="registration__field" placeholder='Enter your name...' />
            <h3 className="registration__field-title">Login</h3>
            <input type="text" className="registration__field" placeholder='Enter your login...' onChange={(e) => setLoginValue(e.target.value)} value={loginValue} />
            <h3 className="registration__field-title">Password</h3>
            <input type="text" className="registration__field" placeholder='Enter your password...' onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} />
            <h3 className="registration__field-title">Repeat password</h3>
            <input type="text" className="registration__field" placeholder='Enter your password again...' onChange={(e) => setSecondPasswordValue(e.target.value)} value={secondPasswordValue} />
            <input type="submit" className="registration__submit" value='sign up' />
          </form>
          <h3 className={`registration__description ${login ? 'registration__description_showed' : 'registration__description_hiden'}`}>You've already registred and logined. You don't need this.</h3>
        </div>
      </section>

    </div>
  )
}

export default Registration;