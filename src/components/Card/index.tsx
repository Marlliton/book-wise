"use client";
import Image from "next/image";

import li from "@/assets/book.png";
import { Star, StarHalf } from "phosphor-react";

interface CardProps {
  starQuantity: number;
  starHalf?: boolean;
  small?: boolean;
}

export function Card({ starQuantity, starHalf, small }: CardProps) {
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
      grid grid-cols-[108px_1fr] max-w-[600px] gap-5 text-gray-300 w-full bg-gray-600 
      rounded-lg py-5 px-6 border-2 border-transparent hover:border-gray-500 transition-all ${
        small && "grid-cols-[64px_1fr] max-w-[350px] bg-gray-700"
      }
    `}
    >
      <div className="">
        <Image src={li} alt="Capa do livro o programador pragmático" />
      </div>
      <div className="flex flex-col justify-between">
        {!small && (
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
          <p className="line-clamp-2 overflow-hidden text-ellipsis">
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus
            id vestibulum imperdiet a at imperdiet lectu lectu lectu lectu
          </p>
        ) : (
          renderStar()
        )}
      </div>
    </div>
  );
}
