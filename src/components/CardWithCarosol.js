import Image from "next/image";
import React from "react";

function CardWithCarousel() {
  const images = [
    "/1.avif",
    "/2.avif",
    "/3.avif",
    "/4.avif",
    "/5.avif",
    "/6.avif",
  ];

  return (
    <div className="md:min-h-screen grid md:grid-cols-2 gap-6 md:w-4/5 mx-auto py-10">
      <div>
        <Image
          src="/card1.avif"
          alt="main-card"
          width={800}
          height={800}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between bg-gray-100 p-6 rounded-lg">
        <div className="">
          <p className="mb-3 inline-block rounded-full bg-gray-300 px-3 py-1 text-xs font-medium text-gray-800">
            Ready to automate?
          </p>
          <h2 className="text-5xl font-bold text-gray-800">
            Stay on top of your recurring payments with ease
          </h2>
        </div>

        <div className="mt-6">
          <div className="carousel carousel-center rounded-box space-x-4 w-full auto-scroll ">
            {images.map((src, index) => (
              <div key={index} className="carousel-item">
                <Image
                  src={src}
                  alt={`image-${index + 1}`}
                  width={220}
                  height={220}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithCarousel;
