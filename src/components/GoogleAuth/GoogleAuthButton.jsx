import { ReactComponent as GoogleIcon } from './google-symbol.svg';

const GoogleAuthButton = ({ onClick, disabled }) => (
  <button className="btn" onClick={onClick} disabled={disabled}>
    <GoogleIcon className="googleSvg" />
    Google
  </button>
);

export default GoogleAuthButton;
