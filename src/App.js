import "./App.css";
import Header from "./components/Header/Header";
import ProductListing from "./components/ProductLIsting/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 page not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
