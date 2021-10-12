import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';

import { authSelectors, authOperations } from '../../redux/auth';
import Modal from '../Modal';
import MainButton from '../MainButton';

import kapustaLogo from '../../assets/img/logo.png';

const Header = ({ isAuthenticated, userName, onLogout }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      {isAuthenticated ? (
        <div className="header__container">
          <div className="header__logo">
            <img src={kapustaLogo} alt="foto" width="90px" height="31px" />
          </div>
          <div className="auth__user_container">
            <Avatar
              name={userName}
              size="32"
              color={Avatar.getRandomColor('sitebase', [
                'red',
                'green',
                'blue',
                'orange',
              ])}
              className="auth__user_logo"
            />
            <p className="auth__user_name">{userName}</p>
            <div className="auth__user_div"></div>
            <button onClick={toggleModal} className="auth__user_btn">
              Выйти
            </button>
            <button onClick={toggleModal} className="auth__user_btn_mobile">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M9.99998 14H1.99998V1.99998H9.99998V2.99998H12V0H0V16H12V13H10V14H9.99998Z"
                    fill="#CBCCD0"
                  />
                  <path
                    d="M12.293 4.29297L10.8789 5.70702L12.1719 6.99998H7V8.99999H12.1719L10.8789 10.293L12.293 11.707L16 7.99997L12.293 4.29297Z"
                    fill="#CBCCD0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="header__container">
          <img
            className="header__logo"
            src={kapustaLogo}
            alt="foto"
            width="90px"
            height="31px"
          />
        </div>
      )}
      {showModal && (
        <Modal onClose={toggleModal} text="Вы действительно хотите выйти?">
          <MainButton
            type="submit"
            text="Да"
            className="main-btn"
            accent
            onClick={() => onLogout()}
          />
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
};
const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
