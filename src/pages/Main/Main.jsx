import React from 'react'
import './main.sass'
import Header from '../../components/header/Header'


const Main = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <div className="main__container">
          <h2 className='main__text'>Here you can registrate yourself, login or logout on corresponding page</h2>
        </div>
      </section>
    </div>
  )
}

export default Main