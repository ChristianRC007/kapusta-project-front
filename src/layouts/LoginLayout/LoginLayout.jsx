
import Header from '../../components/Header/Header';
import BackgroundLogin from '../../components/Backgrounds/BackgroundLogin';
import MounthAmountsButton from '../../components/MounthAmountsButton';
export default function LoginLayout({ children }) {
  return (
    <>
      <Header />
      <MounthAmountsButton/>
      <BackgroundLogin />
      <div className="container">{children}</div>
    </>
  );
}
