// import Nav from './Nav'
import styles from "../styles/Layout.module.css";
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
