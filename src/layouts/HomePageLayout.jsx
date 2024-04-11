import Footer from "../components/common/Footer";

const HomePageLayout = ({ children }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default HomePageLayout;
