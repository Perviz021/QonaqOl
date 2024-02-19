import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";

function AppLayout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default AppLayout;
