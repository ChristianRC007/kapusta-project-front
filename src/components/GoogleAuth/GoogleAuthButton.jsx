import { ReactComponent as GoogleIcon } from '../../assets/img/google.svg';

const GoogleAuthButton = ({ onClick, disabled }) => (
  <button className="button_google" onClick={onClick} disabled={disabled}>
    <GoogleIcon className="googleSvg" />
    Google
  </button>
);

export default GoogleAuthButton;
