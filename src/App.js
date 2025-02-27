import GalleryEffect from './Component/GalleryEffect/GalleryEffect';
import SmokeEffectBanner from './Component/HeroSection/SmokeEffectBanner';
import HowItWorks from './Component/HowItWorks/HowItWorks';
import Navbar from './Component/Navbar/Navbar'
import RocketShapeSection from './Component/RocketShapeSection/RocketShapeSection';
import SplitScroll from './Component/SplitScroll/SplitScroll';
function App() {
  return (
    <div>
     <Navbar/>
     <SmokeEffectBanner/>
     <GalleryEffect/>
     {/* <RocketShapeSection/> */}
     {/* <SplitScroll/> */}
     <HowItWorks/>
    </div>
  );
}

export default App;
