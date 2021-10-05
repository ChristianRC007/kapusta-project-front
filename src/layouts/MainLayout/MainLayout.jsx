import Header from '../../components/Header';
import MainHeadPannel from '../../components/MainHeadPannel';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <MainHeadPannel />
      
      <div>{children}</div>
    </>
  );
}
