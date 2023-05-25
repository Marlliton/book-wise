import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface LinkToProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  sm?: boolean;
  purple?: boolean;
  noBackgroundHover?: boolean;
}

export function LinkTo({
  children,
  sm,
  purple,
  noBackgroundHover,
  ...rest
}: LinkToProps) {
  return (
    <Link
      className={`py-1 w-full block px-3 flex gap-2 items-center justify-center max-w-max rounded 
      text-gray-400 hover:text-gray-200 hover:transition-all ${
        sm && "text-sm gap-1 leading-none"
      } ${
        !noBackgroundHover &&
        (!purple ? "hover:bg-gray-800" : "hover:bg-gray-800 text-purple-100")
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
