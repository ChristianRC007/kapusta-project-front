import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';


export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <LoginForm/>
 
      <div>{children}</div>
    </>
  );
}
