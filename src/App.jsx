import logo from "./logo.svg";
import "./App.css";
import HeaderBannerSmall from "./components/HeaderBannerSmall/HeaderBannerSmall";
import Header from "./components/Header/Header";
import PageBody from "./components/PageBody/PageBody";

function App() {
  return (
    <>
      <Header />
      <HeaderBannerSmall />
      <PageBody />
    </>
  );
}

export default App;
