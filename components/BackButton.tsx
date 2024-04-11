"use client";
import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="flex gap-x-1 items-center bg-white hover:bg-accent text-darkest hover:text-white font-bold px-2.5 py-1 self-start rounded-full transition-all duration-150 ease-in-out shadow-sm"
    >
      <IconArrowLeft stroke={2} size={18} />
      Back
    </button>
  );
};
