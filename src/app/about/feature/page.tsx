import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "@/components/ui/card";
import LayoutComponents from "@/components/ui/layout-components";
import React from "react";

const FeatureSection = () => {
  return (
    <LayoutComponents className="bg-white dark:bg-neutral-700">
      <div className="grid grid-cols-12 mt-[40px] items-center justify-center px-4 md:px-8 lg:px-16 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={`col-span-6 lg:col-span-4`} key={index}>
            {index === 0 ? (
              <div>Another content for index 0</div>
            ) : (
              <Card>
                <CardSkeletonContainer>
                  <Skeleton />
                </CardSkeletonContainer>
                <CardTitle>Damn good card</CardTitle>
                <CardDescription>
                  A card that showcases a set of tools that you use to create
                  your product.
                </CardDescription>
              </Card>
            )}
          </div>
        ))}
      </div>
    </LayoutComponents>
  );
};

export default FeatureSection;
