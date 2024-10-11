import { Metadata } from "next";
import Link from "next/link";

const aboutMe = {
  education: {
    undergraduate: {
      name: "B.Tech in Information Technology",
      institute: "Haldia Institute of Technology, Haldia",
      year: "2021 - 2025",
    },
  },
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
    <div className="flex flex-col gap-2">
      <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="bg-primary-container p-14 rounded-xl flex gap-1 flex-col justify-center">
          <h1 className="text-display-large font-bold">About</h1>
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
      </div>{" "}
      <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="bg-tertiary-container p-14 rounded-xl flex gap-1 flex-col justify-center">
          <h2 className="text-display-small font-bold text-tertiary ">Education</h2>
          <article className="text-title-large text-on-tertiary-container">
            <p>{aboutMe.education.undergraduate.name}</p>
            <p className="text-title-small">
              {aboutMe.education.undergraduate.institute}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
