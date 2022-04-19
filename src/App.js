import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MyRoutes from "./Routers/MyRoutes";
import ScrollToTop from "./components/Features/ScrollToTop/ScrollToTop";
import RefreshPage from "./components/Features/ScrollToTop/RefreshPage";
import UpToTop from "./components/Features/Button/UpToTop";
import "./App.scss";

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
          <MyRoutes />
          {showUpToTop && <UpToTop />}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
