import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
