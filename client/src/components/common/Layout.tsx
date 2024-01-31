import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
