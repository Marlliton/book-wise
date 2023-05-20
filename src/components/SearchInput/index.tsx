import { ComponentProps } from "react";

import { MagnifyingGlass } from "phosphor-react";

interface SearchInputProps extends ComponentProps<"input"> {
  containerStyles?: string;
}

export function SearchInput({ containerStyles, ...rest }: SearchInputProps) {
  return (
    <div
      className={`
        flex gap-3 px-5 py-3 border-2 border-gray-800 text-gray-200 rounded focus-within:border-green-200
        group ${!!containerStyles && containerStyles}
    `}
    >
      <input
        className={`
          flex-1 placeholder:text-gray-600 outline-none bg-transparent focus:caret-green-200
      `}
        {...rest}
      />
      <MagnifyingGlass
        size={20}
        className="text-gray-600 group-focus-within:text-green-200"
      />
    </div>
  );
}
