import React from "react";
import Image from "next/image";

import LayoutComponents from "@/components/ui/layout-components";
import { Policy, USERS } from "@/lib/constant";

import ubuntu from "../../../../public/img/Ubuntu.png";

import { FaCheck } from "react-icons/fa6";
import { MeteorsComponent } from "@/components/ui/meteor-component";
const ContactSection = () => {
  return (
    <LayoutComponents className="bg-white dark:bg-neutral-900 h-full">
      <div className="grid grid-cols-12 mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16 gap-4">
        <div className={`col-span-6`}>
          <Image src={ubuntu} alt="Policy" width={500} height={500} />
        </div>
        <div className={`col-span-6`}>
          <h1 className="py-4">Testimonials</h1>
          {Policy.map((item, index) => (
            <div key={index} className="flex items-center gap-4 py-2">
              <FaCheck />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="animate-slide">
          {USERS.map((user, index) => (
            <div key={index} className="user-card">
              <MeteorsComponent name={user.name} message={user.message} />
            </div>
          ))}
          {USERS.map((user, index) => (
            <div key={index + USERS.length} className="user-card">
              <MeteorsComponent name={user.name} message={user.message} />
            </div>
          ))}
        </div>
      </div>
    </LayoutComponents>
  );
};

export default ContactSection;
