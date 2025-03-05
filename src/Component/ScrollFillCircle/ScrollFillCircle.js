import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollFillCircle = () => {
  const progressRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const circleSize = 29000; // Keep your original large circle size

  useEffect(() => {
    const updateProgress = () => {
      if (!contentRef.current) return;

      const content = contentRef.current;

      // Get how much the inner content has scrolled
      const scrollTop = content.scrollTop;
      const maxScroll = content.scrollHeight - content.clientHeight;

      // Calculate progress percentage
      const progress = (scrollTop / maxScroll) * 100;

      // Animate circle stroke
      gsap.to(progressRef.current, {
        strokeDashoffset: Math.PI * circleSize - (Math.PI * circleSize * progress) / 100,
        duration: 0.3,
      });
    };

    // Attach scroll listener to content div
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", updateProgress);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", updateProgress);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Sticky Section - Locks until content scrolls fully */}
      <div ref={sectionRef} className="h-screen flex flex-col items-center justify-center sticky top-0 bg-white">
        {/* SVG Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="absolute w-full h-full" viewBox={`0 0 ${circleSize} ${circleSize}`}>
            {/* Background Circle */}
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={circleSize / 2 - 20}
              stroke="#ddd"
              strokeWidth="30"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              ref={progressRef}
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={circleSize / 2 - 20}
              stroke="#4CAF50"
              strokeWidth="30"
              fill="none"
              strokeDasharray={Math.PI * circleSize}
              strokeDashoffset={Math.PI * circleSize}
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Scrollable Content */}
        <div
          ref={contentRef}
          className="relative z-10 w-[100%] h-[300px] overflow-y-auto bg-white p-6 rounded-md shadow-md"
        >
          <h2 className="text-xl font-bold text-center mb-4">Scrollable Content</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt libero, a vulputate nunc elementum eu. Sed bibendum lorem sed turpis suscipit, nec viverra mi hendrerit.
          </p>
          <p className="mb-4">
            Duis feugiat eros nec magna dignissim, ut dapibus nisi tincidunt. Integer accumsan metus non magna malesuada, eget vehicula purus bibendum.
          </p>
          <p className="mb-4">
            Morbi vehicula lacus eget orci maximus, nec eleifend lorem porttitor. Suspendisse potenti.
          </p>
          <p className="mb-4">
            Donec tincidunt eros sit amet eros tincidunt, id facilisis orci tincidunt. Nam condimentum nisi a arcu vehicula, eget elementum lacus efficitur.
          </p>
        </div>
      </div>

      {/* Next Section */}
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-3xl font-bold">Next Component</h1>
      </div>
    </div>
  );
};

export default ScrollFillCircle;
