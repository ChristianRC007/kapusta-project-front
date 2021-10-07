import React, { useState } from 'react';
import { connect } from 'react-redux'
import Avatar from 'react-avatar';

import { authSelectors, authOperations } from '../../redux/auth';
import Modal from '../Modal';
import MainButton from '../MainButton';


import kapustaLogo from '../../assets/img/logo.png'

import logOut from '../../assets/img/logout.png'

const Header=({ isAuthenticated,name })=> {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  isAuthenticated = true;
  name = "Kleopatra"
  
  return (
    <header >
      {isAuthenticated ?    
        <div className='header__container'>
           <div className='header__logo'>
    <img src={kapustaLogo} alt="foto"  width='90px' height="31px" />
    </div>
    <div className='auth__user_container'>
        <Avatar name={name} size="32" color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue','orange'])} className='auth__user_logo'/>
        <p className='auth__user_name'>{name}</p><div className='auth__user_div'></div>
        <button onClick={toggleModal} className='auth__user_btn'>Выйти</button>
        <button onClick={toggleModal} className='auth__user_btn_mobile'>
          <img src={logOut} alt="exit"/></button>
      </div>
        </div> : <div className='header__container'><img className='header__logo' src={kapustaLogo} alt="foto" width='90px' height="31px" /></div>
      }
      {showModal && (
        <Modal onClose={toggleModal} text="Вы действительно хотите выйти?">
          <MainButton type="submit" text="Да" className="main-btn" accent />
          <MainButton
            onClick={toggleModal}
            type="button"
            text="Нет"
            className="main-btn"
          />
        </Modal>
      )}
    </header>
  );
}
const mapStateToProps = state => ({
  name: authSelectors.getUserEmail(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})
 
const mapDispatchToProps = {
    onLogout:authOperations.logOut
}



export default connect(mapStateToProps,mapDispatchToProps)(Header)
