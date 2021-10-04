import Header from '../../components/Header';
import BackgroundLogin from '../../components/Backgrounds/BackgroundLogin'

export default function LoginLayout({ children }) {
  return (
    <>
      <BackgroundLogin />
      <Header />
      <div>{children}</div>
    </>
  );
}
