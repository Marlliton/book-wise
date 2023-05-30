"use client";
import { ReactNode } from "react";

import { LinkTo } from "@/components/LinkTo";
import { SideNav } from "@/components/SideNav";
import { Binoculars, ChartLineUp } from "phosphor-react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[232px_1fr] gap-24 h-full overflow-hidden relative">
      <SideNav>
        <LinkTo noBackgroundHover href={"/home"}>
          <ChartLineUp size={24} />
          Início
        </LinkTo>
        <LinkTo noBackgroundHover href={"explore"}>
          <Binoculars size={24} />
          Explorar
        </LinkTo>
      </SideNav>
      {children}
    </div>
  );
}
