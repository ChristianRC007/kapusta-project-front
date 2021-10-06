
import MainHeadPannel from '../../components/MainHeadPannel';
import BackgroundMain from '../../components/Backgrounds/BackgroundMain'
import AppBar from '../../components/AppBar/AppBar';

export default function MainLayout({ children }) {
  return (
    <>
      <BackgroundMain/>
      <AppBar />
      <MainHeadPannel />
      <div className="container">{children}</div>
    </>
  );
}
