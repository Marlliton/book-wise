"use client";
import { useState } from "react";

import { Image } from "../Image";

import { User } from "phosphor-react";

interface AvatarProps {
  urlImage: any;
  alt?: string;
}

export function Avatar({ urlImage, alt }: AvatarProps) {
  const [fallback, setFallback] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleOnLoad() {
    setImageLoaded(true);
  }

  return (
    <div
      className={`p-[2px] flex justify-center items-center rounded-full 
      h-10 w-10 ${fallback ? "bg-gray-700/90" : imageLoaded && "bg-gradient-horizontal"}`}
    >
      {!fallback ? (
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            onError={() => setFallback(true)}
            priority
            src={urlImage}
            alt={alt ?? ""}
            fill
            style={{ objectFit: "cover" }}
            onLoad={handleOnLoad}
          />
        </div>
      ) : (
        <User size={24} />
      )}
    </div>
  );
}
