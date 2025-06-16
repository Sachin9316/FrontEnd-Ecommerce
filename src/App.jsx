import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Navbar from "./components/Navbar";
const LazyCategory = React.lazy(() => import("./pages/Category"));
const LazyProducts = React.lazy(() => import("./pages/Products"));
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-600 to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<LazyProducts />} />
          <Route path="/category" element={<LazyCategory />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
