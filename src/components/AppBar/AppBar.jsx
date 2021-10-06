
import React from 'react'
import { connect } from 'react-redux'

// import UserMenu from '../UserMenu'
import Header from '../Header/Header'

import { authSelectors } from '../../redux/auth'
import kapustaLogo from '../../assets/img/logo.png'

const AppBar = ({ isAuthenticated }) => (
    <header >
    {true ? <Header/>:
     <div className='header__container'><img className='header__logo' src={kapustaLogo} alt="foto" width='90px' height="31px" /></div> }
  </header>  
)

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
 
})

export default connect(mapStateToProps)(AppBar);