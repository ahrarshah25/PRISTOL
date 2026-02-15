import React from "react";

const SliderImage = ({ imagePath }) => {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] lg:h-[520px] bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
          <div className="text-center">
            <img
              src={imagePath}
              alt="Slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
