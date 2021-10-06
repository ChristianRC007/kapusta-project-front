// import Header from '../../components/Header';
import AppBar from '../../components/AppBar/AppBar';
import BackgroundLogin from '../../components/Backgrounds/BackgroundLogin';

export default function LoginLayout({ children }) {
  return (
    <>
      <AppBar />
      <BackgroundLogin />
      <div className="container">{children}</div>
    </>
  );
}
