import FindProduct from './Component/FindProduct/FindProduct';
import Footer from './Component/Footer/Footer';
import GalleryEffect from './Component/GalleryEffect/GalleryEffect';
import SmokeEffectBanner from './Component/HeroSection/SmokeEffectBanner';
import HowItWorks from './Component/HowItWorks/HowItWorks';
import LandingHero from './Component/LandingHero/LandingHero';
import Navbar from './Component/Navbar/Navbar'
import { PickProduct } from './Component/PickProduct/PickProduct';
import RocketSectionScrollEffect from './Component/RocketShapeSection/RocketSectionScrollEffect';
import RocketShapeSection from './Component/RocketShapeSection/RocketShapeSection';
import SignupForm from './Component/SignupForm/SignupForm';
import SplitScroll from './Component/SplitScroll/SplitScroll';
function App() {
  return (
    <div>
     <Navbar/>
     <SmokeEffectBanner/>
     <GalleryEffect/>
     <RocketShapeSection/>
     <RocketSectionScrollEffect/>
     <LandingHero/>
     <SplitScroll/>
     <HowItWorks/>
     <FindProduct/>
     <Footer/>
     <SignupForm/>
    </div>
  );
}

export default App;
