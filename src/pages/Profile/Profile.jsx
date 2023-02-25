import React from 'react';
import './profile.sass';
import Header from '../../components/header/Header';
import { useSelector} from "react-redux";

const Profile = () => {
  const login = useSelector(state => state.login.login );
  if (!login){
    window.location.assign('http://localhost:3000/Login');
  }
  return (
    <div>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">You are autorized success!</h2>  
        </div>  
      </section> 
    </div>
  )
}

export default Profile;