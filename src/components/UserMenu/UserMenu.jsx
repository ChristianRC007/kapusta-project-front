
import React from 'react';
import { connect } from 'react-redux';

import { authSelectors,authOperations } from '../../redux/auth';
import defaultAvatar from '../../assets/images/default-avatar.png'


const UserMenu = ({avatar,name,onLogout}) => (
    <div className='auth__header'>
        <div className='auth__header_logo'></div>
    <div className="auth__user_container">
        <img className='auth__user_logo'  src={avatar} alt="avatar"  width="32" />
        <p className='auth__user_name'> {name} </p>
        <button type='button' onClick={onLogout} className='button'>Вийти</button>
    </div>
    </div>
)

const mapStateToProps = state => ({
    name:authSelectors.getUserEmail(state),
    avatar:defaultAvatar
})

const mapDispatchToProps = {
    onLogout:authOperations.logOut
}



export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)