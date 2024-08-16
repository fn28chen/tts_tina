import LayoutComponents from "@/components/ui/layout-components";
import { Policy } from "@/lib/constant";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import ubuntu from "../../../../public/img/Ubuntu.png";
import { Button } from "@/components/ui/button";
const PolicySection = () => {
  return (
    <LayoutComponents className="bg-white dark:bg-neutral-700 h-full">
      <div className="grid grid-cols-12 mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16 gap-4">
        <div className={`col-span-6`}>
          <h1 className="py-4">Policy</h1>
          {Policy.map((item, index) => (
            <div key={index} className="flex items-center gap-4 py-2">
              <FaCheck />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className={`col-span-6`}>
          <Image src={ubuntu} alt="Policy" width={500} height={500} />
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16">
        <Button variant={`secondary`}>Check more privacy</Button>
      </div>
    </LayoutComponents>
  );
};

export default PolicySection;
