/// <reference types="vite/client" />

declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";
  import { Options } from "@splidejs/splide";

  interface SplideProps {
    options?: Options;
    "aria-label"?: string;
    children?: ReactNode;
    [key: string]: unknown;
  }

  interface SplideSlideProps {
    children?: ReactNode;
    [key: string]: unknown;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
