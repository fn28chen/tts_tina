import React from "react";
import Image from "next/image";

import LayoutComponents from "@/components/ui/layout-components";
import { Button } from "@/components/ui/button";

import { FaCheck } from "react-icons/fa6";
import ts from "../../../../public/img/TypeScript.png";
import Link from "next/link";

const HeroContent = [
  "Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi",
  "Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi",
  "Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi",
  "Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi",
];

const HeroSection = () => {
  return (
    <LayoutComponents className="bg-blue-100 dark:bg-neutral-900 h-full">
      <div className="relative flex flex-col items-center justify-start z-10 mt-16">
        <h1 className="font-semibold text-4xl">
          Thay đổi cách quản lý công việc
        </h1>
        <h1 className="font-bold text-6xl">Mapping Your Success</h1>
        {HeroContent.map((content, index) => (
          <div key={index} className="flex items-center px-4 py-6 gap-4">
            <FaCheck />
            <p>{content}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Button>Xem Profile</Button>
        <Link href="/auth/login">
          <Button
            variant="default"
            className="bg-white text-black dark:bg-neutral-600 dark:text-white hover-scale"
          >
            Trải nghiệm ngay
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full h-full mt-10">
        <div className="w-3/5 h-3/5">
          <Image
            src={ts}
            alt="Hero Image"
            width={600}
            height={600}
            layout="responsive"
            className="object-contain"
          />
        </div>
      </div>
    </LayoutComponents>
  );
};

export default HeroSection;
