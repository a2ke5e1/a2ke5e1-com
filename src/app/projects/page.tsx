import Link from "next/link";
import Image from "next/image";

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
        <div className="text-headline-large font-semibold text-on-surface">
          {title}
        </div>
        <div className="text-body-medium text-on-surface">{description}</div>
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
    <div className="flex flex-col gap-4 my-8">
      <div className="grid md:grid-flow-col grid-flow-row md:gap-4 gap-2 mx-auto w-fit my-8">
        <Image
          src="https://www.a3group.co.in/yearly-progress/images/cover.webp"
          alt="Yearly Progress Cover"
          width={400}
          height={225}
          className="rounded-2xl md:w-[400px] w-full"
        />
        <div className="max-w-2xl">
          <h1 className="font-semibold md:text-4xl text-3xl text-blue-800 dark:text-blue-600">
            {YearlyProgressInfo.name}
          </h1>
          <p className="text-gray-800 md:ml-2 ml-1 mt-1 md:text-base text-sm dark:text-gray-300">
            {YearlyProgressInfo.desc.about}
            <span className="text-blue-500 dark:text-blue-800">
              <Link href="/yearly-progress#about-yearly-progress">
                {" "}
                Learn More
              </Link>
            </span>
          </p>
          <p className="text-gray-800 dark:text-gray-300 mt-5 md:ml-2 ml-1 md:text-base text-sm gap-2 flex flex-col">
            <span>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.a3.yearlyprogess"
                }
              >
                Get Play Store
              </Link>
            </span>
            <span>
              <Link href={"https://github.com/a2ke5e1/yearly-progress-cli-py"}>
                Get on Terminal
              </Link>
            </span>
            <span>
              <Link href={"/yearly-progress/web-app"} className="">
                Get on Web
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-2 sm:gap-6 gap-10 w-fit mx-auto">
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
  );
}
