import NextImage from "next/image";
import { ComponentProps } from "react";

interface ImageProps extends ComponentProps<typeof NextImage> {
  className?: string;
}

export function Image({ className, ...rest }: ImageProps) {
  return (
    <div
      className={`
         relative leading-[0] rounded overflow-hidden h-full w-full ${
           className && className
         }
    `}
    >
      <NextImage {...rest} />
    </div>
  );
}
