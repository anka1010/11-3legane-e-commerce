import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Promo from "./Promo";

function AppLayout() {
  const [showPromo, setShowPromo] = useState(true);

  useEffect(() => {
    const promo = localStorage.getItem("showPromo");
    if (promo) {
      setShowPromo(JSON.parse(promo));
    }
  }, []);

  return (
    <div className="app container">
      {showPromo && <Promo setShowPromo={setShowPromo} />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
