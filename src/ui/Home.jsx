import Articles from "./Home/Articles";
import BannerCTA from "./Home/BannerCTA";
import HeroSlider from "./Home/HeroSlider";
import HomeHeader from "./Home/HomeHeader";
import NewArrivals from "./Home/NewArrivals";
import Newsletter from "./Home/Newsletter";
import Rooms from "./Home/Rooms";
import Values from "./Home/Values";
import Promo from "./Promo";

function Home() {
  return (
    <main>
      <HeroSlider />
      <HomeHeader />
      <Rooms />
      <NewArrivals />
      <Values />
      <BannerCTA />
      <Articles />
      <Newsletter />
    </main>
  );
}

export default Home;
