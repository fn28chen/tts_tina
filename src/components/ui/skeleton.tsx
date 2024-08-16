"use client";
import { useEffect } from "react";
import { animate } from "framer-motion";
import { Container } from "./container";
import { Sparkles } from "./sparkles";

import {
    MetaIconOutline,
    OpenAILogo,
    GeminiLogo,
    ClaudeLogo,
  } from "@/components/logo/logo";
import { GoCopilot } from "react-icons/go";

export const Skeleton = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];
  
    useEffect(() => {
      // @ts-ignore
      animate(sequence, {
        repeat: Infinity,
        repeatDelay: 1,
      });
    }, []);
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-8 w-8 circle-1">
            <ClaudeLogo className="h-4 w-4 " />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <GoCopilot className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="circle-3">
            <OpenAILogo className="h-8 w-8 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-4">
            <MetaIconOutline className="h-6 w-6 " />
          </Container>
          <Container className="h-8 w-8 circle-5">
            <GeminiLogo className="h-4 w-4 " />
          </Container>
        </div>
  
        <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <Sparkles />
          </div>
        </div>
      </div>
    );
  };