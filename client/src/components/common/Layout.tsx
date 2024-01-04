import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div className="container-fluid flex-grow-1">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
