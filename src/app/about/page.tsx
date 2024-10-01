import { Metadata } from "next";
import Link from "next/link";

const aboutMe = {
  projects: {
    yearlyProgress: {
      name: "Yearly Progress",
      link: "https://play.google.com/store/apps/details?id=com.a3.yearlyprogess",
    },
  },
};

export const metadata: Metadata = {
  title: "About | a2ke5e1.com",
  description: "About Apurv Ajay Kumar",
};

export default function About() {
  return (
    <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2">
      <div className="bg-primary-container p-14 rounded-xl flex gap-1 flex-col justify-center">
        <h1 className="text-display-large text-on-primary-fixed font-bold">
          About
        </h1>
        <p className="text-title-large text-on-primary-container">
          Hi, I am Apurv Ajay Kumar, an Android App & Web Developer. Developer
          of{" "}
          <Link
            href={aboutMe.projects.yearlyProgress.link}
            className="underline"
          >
            {aboutMe.projects.yearlyProgress.name}
          </Link>
          .
        </p>
      </div>
      <div className="bg-surface-bright rounded-xl h-80"></div>
    </div>
  );
}
