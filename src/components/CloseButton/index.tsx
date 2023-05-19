import { ComponentProps } from "react";

import { X } from "phosphor-react";

interface CloseButtonProps extends ComponentProps<"button"> {
  iconSize?: number;
}

export function CloseButton({ iconSize, ...rest }: CloseButtonProps) {
  return (
    <button
      className="text-purple-100 bg-gray-600 rounded p-2 hover:transition-colors hover:bg-gray-500"
      {...rest}
    >
      <X size={iconSize ?? 20} />
    </button>
  );
}
