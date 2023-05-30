"use client";
import { Card } from "@/components/Card";
import { LinkTo } from "@/components/LinkTo";
import { dataFetch } from "@/lib/fetch";
import { CaretRight, ChartLineUp } from "phosphor-react";

interface Rating {
  id: string;
  rate: number;
  description: string;
  book: {
    name: string;
    author: string;
    summary: string;
    cover_url: string;
    total_pages: string;
  };
  user: {
    name: string;
    avatar_url: string;
  };
}

export default async function Home() {
  const ratings = await dataFetch<Rating[]>("/books/ratings");

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex w-full justify-start py-10 gap-2">
        <ChartLineUp className="text-green-100" size={32} />
        <h1 className="md:text-2xl font-bold">Início</h1>
      </header>
      <div className="grid grid-cols-[1fr_324px] gap-16">
        <main className="overflow-scroll max-h-[calc(100vh-10rem)] flex flex-col gap-4">
          <p>Avaliações mais recentes</p>
          {ratings.map(({ book, description, id, rate, user }) => (
            <Card
              key={id}
              showAvatar
              avatarUrl={user.avatar_url}
              author={book.author}
              coverUrl={book.cover_url}
              starQuantity={rate}
              summary={book.summary}
              title={book.name}
              className="max-w-full"
            />
          ))}
        </main>
        <aside className="">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold">Livros Populares</h2>
            <LinkTo href={""} noBackgroundHover>
              Ver todos <CaretRight />
            </LinkTo>
          </div>

          {Array.from({
            length: 4,
          }).map((_, i) => (
            <Card
              small
              key={`${ratings[i].id}-${i}`}
              author={ratings[i].book.author}
              title={ratings[i].book.name}
              coverUrl={ratings[i].book.cover_url}
              starQuantity={ratings[i].rate}
              summary={ratings[i].book.summary}
            />
          ))}
        </aside>
      </div>
    </div>
  );
}
