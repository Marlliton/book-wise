import { Card } from "@/components/Card";
import { dataFetch } from "@/lib/fetch";

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
  const ratings = await dataFetch<Rating[]>("/books/ratings", {
    cache: "no-store", // TODO: Remover após o desenvolvimento
  });

  return (
    <div
      className={`
        grid grid-cols-[1fr_330px] overflow-auto
  `}
    >
      <main className="flex justify-center overflow-auto">
        <div className="flex flex-col gap-2">
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
            />
          ))}
        </div>
      </main>
      <aside className="bg-purple-100">aside</aside>
    </div>
  );
}
