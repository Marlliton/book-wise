"use client";
import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect, useState } from "react";

import { Avatar } from "../Avatar";

import logo from "@/assets/logo.svg";
import { Image } from "@/components/Image";

interface SideNavProps {
  children: ReactNode;
}

export function SideNav({ children }: SideNavProps) {
  const [selectedLink, setSelectedLink] = useState<number | null>(null);
  const { data } = useSession();

  useEffect(() => {
    if (!selectedLink && Array.isArray(children) && children.length) {
      setSelectedLink(0);
    }
  }, [children, selectedLink]);

  return (
    <aside className="flex flex-col justify-between p-10 w-full bg-gradient-to-bl from-purple-200/40 via-purple-200/40 to-gray-600/30 rounded-xl">
      <header className="flex flex-col gap-16">
        <Image src={logo} alt="Logo da aplicação escrito bookwise" />
        <nav className="flex flex-col items-center gap-4">
          {React.Children.map(children, (child, index) => {
            const linkStyles =
              index === selectedLink
                ? `before:content-[''] before:absolute before:h-5 before:w-1 before:transition-all
                  before:top-2/4 before:-translate-y-1/2 before:rounded-full before:bg-gradient-vertical`
                : "";

            return (
              <div
                key={index}
                className={`relative w-full ${linkStyles}`}
                onClick={() => setSelectedLink(index)}
              >
                {child}
              </div>
            );
          })}
        </nav>
      </header>

      <footer>
        <Avatar urlImage={data?.user.avatar_url} />
      </footer>
    </aside>
  );
}
