
import MainHeadPannel from '../../components/MainHeadPannel';
import BackgroundMain from '../../components/Backgrounds/BackgroundMain'
import Header from '../../components/Header/Header';
import MounthAmountsButton from '../../components/MounthAmountsButton';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <BackgroundMain />
      <MounthAmountsButton/>
      <MainHeadPannel />
      <div className="container">{children}</div>
    </>
  );
}
