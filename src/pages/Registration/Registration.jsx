import React from 'react'
import './registration.sass'
import Header from '../../components/header/Header'
import data from '../../assets/db.json'
import { useSelector} from "react-redux"

const Registration = () => {
  const login = useSelector(state => state.login.login )
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target[2].value !== e.target[3].value) {
      alert('password is not equal')
    } else {
      let arr = []
      for (let key in data.users) {
        if (data.users[key].login !== e.target[1].value) {
          arr.push('access')
        } else {
          arr.push('error')
          break
        }
      }
      if (arr.includes('error') !== true) {
        alert("Success! You've registered now")
      }else{
        alert('This user already exists')
      }

    }
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
            <input type="text" className="registration__field" placeholder='Enter your login...' />
            <h3 className="registration__field-title">Password</h3>
            <input type="text" className="registration__field" placeholder='Enter your password...' />
            <h3 className="registration__field-title">Repeat password</h3>
            <input type="text" className="registration__field" placeholder='Enter your password again...' />
            <input type="submit" className="registration__submit" value='sign up' />
          </form>
          <h3 className={`registration__description ${login ? 'registration__description_showed' : 'registration__description_hiden'}`}>You've already registred and logined. You don't need this.</h3>
        </div>
      </section>

    </div>
  )
}

export default Registration