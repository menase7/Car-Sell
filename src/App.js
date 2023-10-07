import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cars from "./components/Cars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestCar from "./components/LatestCar";
import Main from "./components/Main";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import Home from "./components/Home";
import { Switch } from "react-router-dom";
import Cart from "./components/Cart";
import { ShopContextProvider } from "./Context/Shop-context";
import Register from "./components/Register";
import Login from "./components/Login";
import Forgetpassword from "./components/Forgetpassword";
import Search from "./components/Search";
import OrderPage from "./components/OrderPage";
import Morecars from "./components/Morecars";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/morecars" element={<Morecars />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
