"use client";
import { signIn, useSession } from "next-auth/react";

import { LoginButton } from "./components/LoginButton";

import authImage from "@/assets/auth-image.svg";
import gitHubImage from "@/assets/github.svg";
import googleImage from "@/assets/google.svg";
import logoImage from "@/assets/logo.svg";
import rocketImage from "@/assets/rocket-launch.svg";
import { Image } from "@/components/Image";

export default function Auth() {
  const session = useSession();
  return (
    <div
      className={`h-screen grid grid-rows-[75px_1fr] md:grid-rows-1 md:grid-cols-[40%_1fr] p-5`}
    >
      <header className="flex justify-center md:hidden">
        <Image src={logoImage} alt="Logo da aplicação escrito Book Wise" width={200} />
      </header>
      <div className="hidden md:flex justify-center items-center">
        <Image src={authImage} alt="Imagem de uma mulher lendo com o logo do book wise" />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Boas Vindas</h1>
          <p className="mb-3 text-gray-400">Faça seu login ou acesse como visitante.</p>
          {JSON.stringify(session.data)}
          <LoginButton onClick={() => signIn("google")}>
            <Image src={googleImage} alt="Simbolo do Google para login" />
            Acessar como visitante
          </LoginButton>
          <LoginButton>
            <Image src={gitHubImage} alt="Simbolo do GitHub para login" />
            Acessar como visitante
          </LoginButton>
          <LoginButton>
            <Image
              src={rocketImage}
              alt="Simbolo de um foguete para entrar como visitante"
            />
            Acessar como visitante
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
