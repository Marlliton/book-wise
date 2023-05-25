"use client";
import { Card } from "@/components/Card";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export function Content() {
  const { sm, md } = useWindowWidth();
  return (
    <div className="flex flex-col gap-2">
      <Card small starQuantity={3} />
      <Card small starQuantity={3} />
      <Card small starQuantity={3} />
      <Card showAvatar small={sm || md} starQuantity={3} />
      <Card small={sm || md} starQuantity={3} />
      <Card small={sm || md} starQuantity={3} />
    </div>
  );
}
