"use client";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

import { CaretRight } from "phosphor-react";

interface LinkToProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  sm?: boolean;
  className?: string;
}

export function LinkTo({ children, sm, className, ...rest }: LinkToProps) {
  return (
    <Link
      className={`py-1 px-3 flex gap-2 items-center justify-center hover:bg-gray-800`}
      {...rest}
    >
      {children}
      <CaretRight size={20} />
    </Link>
  );
}
