import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
import Classes from '../styles/layoutStyle/layoutStyle.module.css';
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className={Classes.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;