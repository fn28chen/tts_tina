import React from "react";
import Image from "next/image";

import LayoutComponents from "@/components/ui/layout-components";

import AboutImage from "@/components/ui/about-image";
import { About } from "@/lib/constant";

const AboutSection = () => {
  return (
    <LayoutComponents className="bg-white dark:bg-neutral-700 h-full">
      <div className="grid grid-cols-12 mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16 gap-4">
        {About.map((item, index) => (
          <AboutImage
            key={index}
            src={item.src}
            title={item.title}
            content={item.content}
            index={index}
          />
        ))}
      </div>
    </LayoutComponents>
  );
};

export default AboutSection;
