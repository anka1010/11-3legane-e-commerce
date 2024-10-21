import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Promo from "./Promo";

function AppLayout() {
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="container">
      {showPromo && <Promo setShowPromo={setShowPromo} />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
