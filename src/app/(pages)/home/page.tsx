import { Content } from "./components/Content";

export default function Home() {
  return (
    <div
      className={`
        grid grid-cols-[1fr_330px] overflow-auto
  `}
    >
      <main className="flex justify-center overflow-auto">
        <Content />
      </main>
      <aside className="bg-purple-100">aside</aside>
    </div>
  );
}
