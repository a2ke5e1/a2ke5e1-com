import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// About Me Data
export const aboutMe = {
  name: "Apurv Ajay Kumar",
  aboutWebsite:
    "Crafted by Apurv, this portfolio showcases my expertise in web and app development, focusing on creating seamless, user-friendly experiences.",
  email: "aakapurv@gmail.com",
  experience: [
    {
      role: "SDE Intern",
      company: "duuet.care",
      duration: "Dec, 2023 - Jan, 2024",
    },
  ],
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
  languagesAndFrameworks: {
    languages: ["Kotlin", "Java", "Dart", "JavaScript", "TypeScript"],
    frameworks: ["Android SDK", "Flutter", "React", "Next.js"],
  },
  socialMedia: {
    github: "https://www.github.com/a2ke5e1",
    linkedin: "https://www.linkedin.com/in/a2ke5e1",
    x: "https://www.x.com/a2ke5e1",
    instagram: "https://www.instagram.com/a2ke5e1",
    youtube: "https://www.youtube.com/@a2ke5e1",
  },
};

// Metadata for the page
export const metadata: Metadata = {
  title: "About | a2ke5e1.com",
  description: "About Apurv",
};

// Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl flex gap-4 flex-col">
    <h2 className="text-headline-medium font-bold">{title}</h2>
    {children}
  </div>
);

// Experience Component
const Experience = () => (
  <Section title="Experience">
    <article className="text-title-medium text-on-surface-variant">
      <p>{aboutMe.experience[0].role}</p>
      <p className="text-body-medium">{aboutMe.experience[0].company}</p>
      <p className="text-body-small">{aboutMe.experience[0].duration}</p>
    </article>
  </Section>
);

// Education Component
const Education = () => (
  <Section title="Education">
    <article className="text-title-medium text-on-surface-variant">
      <p>{aboutMe.education.undergraduate.name}</p>
      <p className="text-body-medium">
        {aboutMe.education.undergraduate.institute}
      </p>
    </article>
  </Section>
);

// Languages & Frameworks Component
const LanguagesAndFrameworks = () => (
  <Section title="Languages & Frameworks">
    <article className="text-title-medium text-on-surface-variant">
      <p>Languages</p>
      <p className="text-body-medium">
        {aboutMe.languagesAndFrameworks.languages.join(", ")}
      </p>
    </article>
    <article className="text-title-medium text-on-surface-variant">
      <p>Frameworks</p>
      <p className="text-body-medium">
        {aboutMe.languagesAndFrameworks.frameworks.join(", ")}
      </p>
    </article>
  </Section>
);

// Main About Component
export default function About() {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2">
        <div className="bg-primary-container p-14 rounded-xl flex gap-1 flex-col justify-center">
          <h1 className="text-display-large font-bold">About</h1>
          <p className="text-title-large text-on-primary-container">
            Hi, I am Apurv, an Android App & Web Developer. Developer
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
        <Image
          className="bg-surface-container rounded-xl h-80 object-cover"
          src="/me.png"
          alt="Logo"
          width={800}
          height={800}
        />
      </div>
      <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-2 sm:gap-6 gap-10 w-fit mx-auto">
        <Experience />
        <Education />
        <LanguagesAndFrameworks />
      </div>
    </div>
  );
}
