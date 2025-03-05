import FindProduct from './Component/FindProduct/FindProduct';
import Footer from './Component/Footer/Footer';
import GalleryEffect from './Component/GalleryEffect/GalleryEffect';
import SmokeEffectBanner from './Component/HeroSection/SmokeEffectBanner';
import HowItWorks from './Component/HowItWorks/HowItWorks';
import LandingHero from './Component/LandingHero/LandingHero';
import Navbar from './Component/Navbar/Navbar'
import { PickProduct } from './Component/PickProduct/PickProduct';
import RocketShapeSection from './Component/RocketShapeSection/RocketShapeSection';
import SignupForm from './Component/SignupForm/SignupForm';
import SplitScroll from './Component/SplitScroll/SplitScroll';
function App() {
  return (
    <div>
     <Navbar/>
     <SmokeEffectBanner/>
     <GalleryEffect/>
     <PickProduct/>
     <RocketShapeSection/>
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
