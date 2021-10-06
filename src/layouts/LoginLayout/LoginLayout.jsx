import Header from '../../components/Header';
import BackgroundLogin from '../../components/Backgrounds/BackgroundLogin';

export default function LoginLayout({ children }) {
  return (
    <>
      <Header />
      <BackgroundLogin />
      <div className="container">{children}</div>
    </>
  );
}
