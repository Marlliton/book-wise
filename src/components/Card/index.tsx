"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { Avatar } from "../Avatar";

import li from "@/assets/book.png";
import { Star, StarHalf } from "phosphor-react";

interface CardProps {
  starQuantity: number;
  starHalf?: boolean;
  small?: boolean;
  showAvatar?: boolean;
}

export function Card({ starQuantity, starHalf, small, showAvatar }: CardProps) {
  const { data } = useSession();
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
          <Avatar urlImage={data?.user.avatar_url} alt="" />
          {renderStar()}
        </div>
      )}
      <div
        className={`grid gap-5 ${
          small ? "grid-cols-[64px_1fr]" : "grid-cols-[108px_1fr]"
        }`}
      >
        <Image src={li} alt="Capa do livro o programador pragmático" />
        <div className="flex flex-col justify-between">
          {!small && !showAvatar && (
            <div className="flex justify-between">
              <p>Hoje</p>
              {renderStar()}
            </div>
          )}
          <div>
            <h2 className="font-bold text-gray-100">Entendendo Algorítimos</h2>
            <p className="text-sm text-gray-400">Aditya Bhargava</p>
          </div>

          {!small ? (
            <p
              className={`overflow-hidden text-ellipsis ${
                showAvatar ? "line-clamp-4" : "line-clamp-2"
              }`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
              incidunt, eveniet voluptas, sit eaque, sed necessitatibus eum velit
              dignissimos dolore quia! Consectetur voluptatem perspiciatis, perferendis
              numquam at a repellendus suscipit.
            </p>
          ) : (
            renderStar()
          )}
        </div>
      </div>
    </div>
  );
}
