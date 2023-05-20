import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface LinkToProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  sm?: boolean;
  purple?: boolean;
}

export function LinkTo({ children, sm, purple, ...rest }: LinkToProps) {
  return (
    <Link
      className={`py-1 px-3 flex gap-2 items-center justify-center max-w-max rounded ${
        sm && "text-sm gap-1 leading-none"
      } ${!purple ? "hover:bg-gray-800" : "hover:bg-gray-800 text-purple-100"}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
