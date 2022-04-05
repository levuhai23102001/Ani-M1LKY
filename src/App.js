import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Romance from "./pages/Romance";
import AllAnime from "./pages/AllAnime";
import Action from "./pages/Action";
import Genre from "./pages/Genre";
import Details from "./pages/Details/Details";
import ScrollToTop from "./components/Features/ScrollToTop/ScrollToTop";
import RefreshPage from "./components/Features/ScrollToTop/RefreshPage";
import UpToTop from "./components/Features/Button/UpToTop";
import "./App.scss";
import Rank from "./pages/Rank";
function App() {
  const [showUpToTop, setShowUpToTop] = useState(false);
  // show scroll to top
  useEffect(() => {
    const showScrollTop = () => {
      setShowUpToTop(window.scrollY >= 500);
    };

    window.addEventListener("scroll", showScrollTop);
    return () => {
      window.removeEventListener("scroll", showScrollTop);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="ani-main-content">
        <Sidebar />
        <div className="main-content-container">
          <ScrollToTop />
          <RefreshPage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Genre />}>
              <Route path="" element={<AllAnime />} />
              <Route path="romance" element={<Romance />} />
              <Route path="action" element={<Action />} />
            </Route>
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
          {showUpToTop && <UpToTop />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
