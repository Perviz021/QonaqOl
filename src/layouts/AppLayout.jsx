import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

function AppLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default AppLayout;
