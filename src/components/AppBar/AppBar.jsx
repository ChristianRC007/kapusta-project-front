
import React from 'react'
import { connect } from 'react-redux'

import AuthNav from '../AuthNav'
import UserMenu from '../UserMenu'

import { authSelectors } from '../../redux/auth'


const AppBar = ({ isAuthenticated }) => (
    <header className='user__header'>
   {isAuthenticated ? <UserMenu/>:<div className='header_logo'></div>}
  </header>  
)

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
 
})

export default connect(mapStateToProps)(AppBar);