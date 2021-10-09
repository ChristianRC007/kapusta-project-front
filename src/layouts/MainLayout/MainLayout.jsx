
import MainHeadPannel from '../../components/MainHeadPannel';
import BackgroundMain from '../../components/Backgrounds/BackgroundMain'
import Header from '../../components/Header/Header';
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <BackgroundMain/>
      <MainHeadPannel />
      <div className="container">{children}</div>
    </>
  );
}
