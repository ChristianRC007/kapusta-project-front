import Header from '../../components/Header';
import MainHeadPannel from '../../components/MainHeadPannel';
import BackgroundMain from '../../components/Backgrounds/BackgroundMain'

export default function MainLayout({ children }) {
  return (
    <>
      <BackgroundMain/>
      <Header />
      <MainHeadPannel />
      <div className="container">{children}</div>
    </>
  );
}
