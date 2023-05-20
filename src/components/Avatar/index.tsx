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

  return (
    <>
      {!fallback ? (
        <Image
          onError={() => setFallback(true)}
          priority
          src={urlImage}
          alt={alt ?? ""}
          width={40}
          height={40}
          roundedFull
          borderGradient
        />
      ) : (
        <div className="flex justify-center items-center rounded-full w-10 h-10 bg-gray-700/90">
          <User size={24} />
        </div>
      )}
    </>
  );
}
