import Image from "next/image";
import React from "react";

function CardCircle() {
  const images = ["/1.avif", "/2.avif", "/3.avif", "/4.avif", "/5.avif", "/6.avif"];

  return (
    <div className="h-min-screen grid md:grid-cols-6 justify-center items-center gap-5 py-10">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`image-${index + 1}`}
          width={200}
          height={200}
          className="rounded-lg w-64 h-64"
        />
      ))}
    </div>
  );
}

export default CardCircle;
