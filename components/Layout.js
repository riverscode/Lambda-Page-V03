import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PromotionHeader from "components/PromotionHeader";
const Layout = ({ children }) => {
  return (
    <div>
      <PromotionHeader />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <footer className="left-0 right-0 bottom-0 py-8 px-4 bg-gradient-to-b from-gray-900/80 to-teal-900/60 mt-32">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
