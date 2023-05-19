interface TagProps {
  selected?: boolean;
}

export function Tag({ selected }: TagProps) {
  return (
    <div
      className={`
        py-1 px-3 border border-purple-100 text-purple-100 max-w-max rounded-full hover:bg-purple-100
        hover:text-gray-200 hover:border-gray-200 hover:transition-colors ${
          selected && "bg-purple-200 border-transparent"
        }
    `}
    >
      Computação
    </div>
  );
}
