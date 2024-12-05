import { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutMe } from "./about/page";
import { FilledButton, FilledTonalButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";

export const metadata: Metadata = {
  title: "Home | a2ke5e1.com",
  description: "A portfolio website for a2ke5e1.",
};

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-[68vh] flex flex-col justify-center my-8">
      <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="sm:p-14 p-4 rounded-xl flex gap-1 flex-col justify-center">
          <h1 className="text-display-large font-bold text-primary">Hello!</h1>
          <p className="text-headline-large text-on-primary-container mt-4">
            I am <span className="font-bold text-tertiary">Apurv</span>
          </p>
          <p className="text-body-medium -mt-1">
            {"A passionate Android App & Web Developer. "}
            <span className="text-primary hover:underline">
              <Link href={"/about"}>{"Learn More"}</Link>
            </span>
          </p>
          <div className="flex flex-row gap-2 my-8">
            <FilledButton className="w-fit" href={"/projects"}>
              Projects
              <Icon slot="icon">explore</Icon>
            </FilledButton>
            <FilledTonalButton className="w-fit" href={"/renders"}>
              Renders
              <Icon slot="icon">deployed_code</Icon>
            </FilledTonalButton>
          </div>
        </div>
        <Image
          className="bg-tertiary-container p-4 rounded-xl object-cover hidden sm:block"
          src="/me.png"
          alt="Logo"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
}
