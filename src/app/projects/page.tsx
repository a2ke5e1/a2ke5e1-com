import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | a2ke5e1.com",
  description: "Projects worked on by Apurv Ajay Kumar",
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  placeHolderImageData: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  placeHolderImageData,
  link,
}) => {
  return (
    <Link
      href={link}
      className="flex flex-col rounded-2xl bg-surface-container overflow-hidden hover:ring-2 ring-primary max-w-96"
    >
      <Image
        className="w-full aspect-video rounded-2xl object-cover"
        height={180}
        width={320}
        src={image}
        alt={title}
        loading="lazy"
        placeholder="blur"
        blurDataURL={placeHolderImageData}
      />
      <div className="p-4 flex flex-col gap-2">
        <div
          className="text-headline-medium font-semibold text-on-surface line-clamp-1"
          title={title}
        >
          {title}
        </div>
        <div
          className="text-body-medium text-on-surface-variant line-clamp-2"
          title={description}
        >
          {description}
        </div>
      </div>
    </Link>
  );
};

const YearlyProgressInfo = {
  name: "Yearly Progress",
  desc: {
    about:
      "Yearly Progress is an android app which provides beautiful widgets, which shows the progress of day, week, month and year.",
  },
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="bg-primary-container sm:p-14 p-8 rounded-xl flex gap-1 flex-col justify-center items-center text-center">
        <h1 className="font-bold sm:text-display-large text-display-small font">
          {"Projects"}
        </h1>
        <p className="sm:text-title-small text-body-small text-on-primary-container">
          Some of the projects I have worked on and completed
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="sm:px-14 py-8 px-8 rounded-xl flex gap-1 flex-col justify-center items-center text-center">
          <h1
            className="font-bold sm:text-display-small text-title-large font"
            id="android"
          >
            {"Android Apps"}
          </h1>
          <p className="sm:text-body-large text-body-small text-on-tertiary-container">
            Some of the android apps I have developed
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-2 sm:gap-6 gap-2 w-fit mx-auto">
          <ProjectCard
            title="Yearly Progress"
            description="An android app which shows progress of the day, month and year."
            image="https://www.a3group.co.in/yearly-progress/images/cover.webp"
            link="https://www.a3group.co.in/yearly-progress"
            placeHolderImageData="https://www.a3group.co.in/yearly-progress/images/cover.webp"
          />
          <ProjectCard
            title="Sound Profile Scheduler"
            description="A versatile audio profile scheduler app, designed to give you full control over your device's sound settings with precision."
            image="https://www.a3group.co.in/sound-profile-scheduler/images/cover.png"
            link="https://www.a3group.co.in/sound-profile-scheduler"
            placeHolderImageData="https://www.a3group.co.in/sound-profile-scheduler/images/cover.png"
          />
          <ProjectCard
            title="OnePlus Weather Widget"
            description="An attempt to clone OnePlus's Classic Weather Widget with android 12 theme support."
            image="/images/oneplus-weather-widget/a12.jpg"
            link="https://github.com/a2ke5e1/OnePlus_Weather_Widget"
            placeHolderImageData="/images/oneplus-weather-widget/blur/a12.jpg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-16">
        <div className="sm:px-14 py-8 px-8 rounded-xl flex gap-1 flex-col justify-center items-center text-center">
          <h1
            className="font-bold sm:text-display-small text-title-large font"
            id="ux"
          >
            {"UX/UI Designs"}
          </h1>
          <p className="sm:text-title-small text-body-small  text-on-tertiary-container">
            Some of the UX/UI designs I have created while completing my Google
            UX Design Professional Certificate
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-2 sm:gap-6 gap-2 w-fit mx-auto">
          <ProjectCard
            title="Foody"
            description="A mobile food ordering app designed for a local restaurant."
            image="/images/project0/cover.png"
            placeHolderImageData="/images/project0/blur/cover.jpg"
            link="/projects/foody"
          />
          <ProjectCard
            title="Logo"
            description="An educational website for learning programming by finding and viewing coding tutorials."
            image="/images/project1/cover.png"
            placeHolderImageData="/images/project1/blur/cover.jpg"
            link="/projects/logo"
          />
          <ProjectCard
            title="Medk"
            description="A tool for communities to ensure that everyone has access to necessary medicine."
            image="/images/project2/cover.png"
            placeHolderImageData="/images/project2/blur/cover.jpg"
            link="/projects/medk"
          />
        </div>
      </div>
    </div>
  );
}
