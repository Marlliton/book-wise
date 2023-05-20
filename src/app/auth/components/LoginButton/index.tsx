import { ComponentProps, ReactNode } from "react";

interface LoginButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function LoginButton({ children, ...rest }: LoginButtonProps) {
  return (
    <button
      className={`
        flex justify-start gap-3 items-center p-5 bg-gray-600 rounded leading-[0px]
        w-full sm:w-96 hover:brightness-110 hover:transition-colors
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
