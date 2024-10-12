import Link from "next/link";
import Image from "next/image";

type ProjectCard = {
  title: string;
  description: string;
  image: string;
  placeHolderImageData: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  placeHolderImageData,
  link,
}: ProjectCard) => {
  return (
    <Link
      href={link}
      className="flex flex-col rounded-2xl bg-surface-container overflow-hidden max-w-96 hover:ring-2 ring-primary"
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

export default function Projects() {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center w-fit mx-auto my-4">
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
