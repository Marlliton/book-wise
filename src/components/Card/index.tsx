"use client";
import Image from "next/image";

import { Avatar } from "../Avatar";

import { Star, StarHalf } from "phosphor-react";

interface CardProps {
  title: string;
  author: string;
  summary: string;
  starQuantity: number;
  coverUrl: string;
  starHalf?: boolean;
  small?: boolean;
  showAvatar?: boolean;
  avatarUrl?: string;
}

export function Card({
  starQuantity,
  starHalf,
  small,
  showAvatar,
  title,
  author,
  summary,
  coverUrl,
  avatarUrl,
}: CardProps) {
  function renderStar() {
    return (
      <span className="flex gap-1 text-purple-100">
        {Array.from({
          length: 5,
        }).map((_, i) =>
          i + 1 <= starQuantity ? (
            // ------------------------------------
            starHalf && i + 1 === starQuantity ? (
              <StarHalf key={`star-${i}`} weight="fill" />
            ) : (
              <Star key={`star-${i}`} weight="fill" />
            ) // ------------------------------------
          ) : (
            <Star key={`star-${i}`} />
          ),
        )}
      </span>
    );
  }

  return (
    <div
      className={`
      flex flex-col gap-8 text-gray-300 w-full rounded-lg py-5 px-6 border-2 border-transparent hover:border-gray-500 
      transition-all ${small ? "max-w-[350px] bg-gray-700" : "max-w-[600px] bg-gray-600"}
    `}
    >
      {showAvatar && (
        <div className="flex justify-between items-start">
          <Avatar urlImage={avatarUrl} alt="" />
          {renderStar()}
        </div>
      )}
      <div
        className={`grid gap-5 ${
          small ? "grid-cols-[64px_1fr]" : "grid-cols-[108px_1fr]"
        }`}
      >
        <Image src={coverUrl} width={108} height={152} alt={`Capa do livro ${title}`} />
        <div className="flex flex-col justify-between">
          {!small && !showAvatar && (
            <div className="flex justify-between">
              <p>Hoje</p>
              {renderStar()}
            </div>
          )}
          <div>
            <h2 className="font-bold text-gray-100">{title}</h2>
            <p className="text-sm text-gray-400">{author}</p>
          </div>

          {!small ? (
            <span
              className={`overflow-hidden text-ellipsis ${
                showAvatar ? "line-clamp-4" : "line-clamp-2"
              }`}
            >
              {summary} <button>ver mais</button>
            </span>
          ) : (
            renderStar()
          )}
        </div>
      </div>
    </div>
  );
}
