import Image, { StaticImageData } from "next/image";
import React from "react";

interface AboutImageProps {
  src: string | StaticImageData;
  title: string;
  content: string[];
  index: number;
}
const AboutImage = ({ src, title, content, index }: AboutImageProps) => {
  return (
    <div
      className={`col-span-12 about-image-container grid grid-cols-12 gap-4`}
    >
      <ul className={`col-span-6 list-disc list-inside ${index % 2 !== 0 ? "order-2" : "order-1"}`}>
        {title}
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Image
        src={src}
        width={500}
        height={500}
        alt="about"
        className={`col-span-6 hover-scale ${index % 2 !== 0 ? "order-1" : "order-2"}`}
      />
    </div>
  );
};

export default AboutImage;
