import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import GoogleAuthButton from './GoogleAuthButton';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObj }) => {
    const { email, name } = profileObj;
    const newUser = {
      email,
      name,
      tokenId,
    };

    dispatch(authOperations.logIn(newUser));
  };

  // const loginError = error => {
  //   console.log(error);
  // };

  return (
    <GoogleLogin
      //TODO: clientId="441702863210-d6bc9fnvd7p92me9dedsb90r9fcsggdg.apps.googleusercontent.com"
      clientId="441702863210-l4pp0ege9b8jr3a3nqhos593eitars0j.apps.googleusercontent.com"
      render={({ onClick, disabled }) => (
        <GoogleAuthButton onClick={onClick} disabled={disabled} />
      )}
      onSuccess={successLogin}
      // onFailure={loginError}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleAuth;
