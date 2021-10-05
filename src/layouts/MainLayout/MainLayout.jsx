import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import MainHeadPannel from '../../components/MainHeadPannel'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <LoginForm/>

      <MainHeadPannel />
      <div className="container">{children}</div>

    </>
  );
}
