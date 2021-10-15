import { ToastContainer } from 'react-toastify';
import MainHeadPannel from '../../components/MainHeadPannel';
import BackgroundMain from '../../components/Backgrounds/BackgroundMain';
import Header from '../../components/Header/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <BackgroundMain />
      <MainHeadPannel />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className="container">{children}</div>
    </>
  );
}
