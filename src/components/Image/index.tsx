import NextImage from "next/image";
import { ComponentProps } from "react";

interface ImageProps extends ComponentProps<typeof NextImage> {
  /**
   * Os estilos aqui inseridos vão estilizar o container da imagem e não a imagem em si.
   * Para estilizar a imagem utilize "className"
   */
  containerStyles?: string;
  roundedFull?: boolean;
  borderGradient?: boolean;
}

export function Image({
  borderGradient,
  roundedFull,
  containerStyles,
  ...rest
}: ImageProps) {
  return (
    <div
      className={`rounded overflow-hidden flex justify-center items-center max-w-max ${
        borderGradient && "bg-gradient-vertical p-[2px]"
      } ${roundedFull && "rounded-full"} ${!!containerStyles && containerStyles}`}
    >
      <div
        className={`
          leading-[0] rounded overflow-hidden ${roundedFull && "rounded-full"}
    `}
      >
        <NextImage {...rest} style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
