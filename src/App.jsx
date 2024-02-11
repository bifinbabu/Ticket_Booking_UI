// import logo from "./logo.svg";
import "./App.css";
import HeaderBannerSmall from "./components/HeaderBannerSmall/HeaderBannerSmall";
import Header from "./components/Header/Header";
import PageBody from "./components/PageBody/PageBody";
import Footer from "./components/Footer/Footer";
// import PaymentForm from "./components/PaymentForm/PaymentForm";

function App() {
  return (
    <>
      <Header />
      <HeaderBannerSmall />
      <PageBody />
      <Footer />
      {/* <PaymentForm /> */}
    </>
  );
}

export default App;
