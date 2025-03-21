
import { useEffect, useRef } from "react";
import { setupGalleryAnimation } from "./galleryAnimations";

const GalleryEffect = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const cleanup = setupGalleryAnimation(imageRef, containerRef);
    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className="flex h-screen w-full relative">
      <div className="absolute inset-0 z-10">
        <img
          ref={imageRef}
          src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670639dbae39c46d0d5b0734_11.avif"
          alt="Main Background Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 text-white relative overflow-hidden">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233f07893279d4d563d6_6.avif" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-white">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e125bfc12ceb1feee177_raugraf_a_model_browsing_in_a_canabis_dispensary_3665e24c-432a-4eac-9ada-89df1ef89150-p-800.avif" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-[2] flex flex-col relative">
        <div className="flex-1 text-white relative overflow-hidden">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e14a6d8d681f65bc9c7e_23.avif" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
        <div className="flex-[2] text-white relative overflow-hidden"></div>
        <div className="flex-1 text-white relative overflow-hidden">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4283cac0a73c842e08a3a_16.avif" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 flex flex-col relative">
        <div className="flex-1 text-white relative overflow-hidden">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bf9_clear-cannabis-DtOtpCVkuoQ-unsplash.webp" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
        <div className="flex-1 text-white relative overflow-hidden">
          <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash-p-800.png" alt="Image" className="p-1 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GalleryEffect;
