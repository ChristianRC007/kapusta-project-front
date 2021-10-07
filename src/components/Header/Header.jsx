import React, { useState } from 'react';
import { connect } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth';

import Modal from '../Modal';
import MainButton from '../MainButton';

import kapustaLogo from '../../assets/img/logo.png'
import defaultAvatar from '../../assets/images/default-avatar.png'
import logOut from '../../assets/img/logout.png'

const Header=()=> {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='header__container'>
      <div className='header__logo'><img src={kapustaLogo} alt="foto" width='90px' height="31px" /></div>
      
      <div className='auth__user_container'>
        <img src={defaultAvatar} alt="avatar" className='auth__user_logo' width='32px' height='32px'/>
        <p className='auth__user_name'>userName</p><div className='auth__user_div'></div>
        <button onClick={toggleModal} className='auth__user_btn'>Выйти</button>
        <button onClick={toggleModal} className='auth__user_btn_mobile'>
          <img src={logOut} alt="exit"/></button>
      </div>
      
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
    </div>
  );
}
const mapStateToProps = state => ({
    name:authSelectors.getUserEmail(state),
    avatar:defaultAvatar
})
    // name:authSelectors.getUserEmail(state) тут у майбутньому треба буде змінити на getUserName

const mapDispatchToProps = {
    onLogout:authOperations.logOut
}



export default connect(mapStateToProps,mapDispatchToProps)(Header)
