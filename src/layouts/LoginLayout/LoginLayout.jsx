import Header from '../../components/Header';

export default function LoginLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
}
