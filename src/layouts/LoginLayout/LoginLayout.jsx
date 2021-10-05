import Header from '../../components/Header';
import BackgroundLogin from '../../components/Backgrounds/BackgroundLogin'
import MainTitle from '../../components/MainTitle/MainTitle';

export default function LoginLayout({ children }) {
  return (
    <>
      <BackgroundLogin />
      <MainTitle/>
      <Header />
      <div>{children}</div>
    </>
  );
}
