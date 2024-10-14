import { Metadata, NextPage } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Medk - Projects | a2ke5e1.com",
  description:
    "A tool for communities to ensure that everyone has access to necessary medicine",
};

const project2: NextPage = () => {
  // Project data object containing all text-related content
  const projectData = {
    title: "Medk",
    description:
      "A tool for communities to ensure that everyone has access to necessary medicine",
    role: {
      heading: "My Role",
      content:
        "  I was working alone on this project, hence I was the lead UX Designer and Researcher throught the whole project.",
    },
    goal: {
      heading: "Project Goal",
      content:
        "This products aims to help people find their medicine in locality or order them online.",
    },
    audience: {
      heading: "Target Audience",
      content:
        " This projects aims to target elderly people. Especially people who have limited motor function.",
    },
    challenges: {
      heading: "Key challenges & Constraints",
      content:
        "Key challenges were to provide a respomsive design to mobile and web to find medicine. Many people needs medicine that they can’t find in their locality.",
    },
    initialDesign: {
      heading: "Initial design concepts",
      content:
        "I did a quick ideation exercise to come up with ideas for how to address gaps identified in the competitive audit. My focus was specially on size on the actions and minimum clicks to complete a task.",
    },
    testingResults: {
      heading: "User Testing Results",
      content:
        "After lot of user feedback and testing. I have conclude it easier to removed reminder and have bigger cards to see stores.",
    },
    takeaways: {
      heading: "Takeaways",
      content: [
        "While doing this project I have increase my knowledge and experience on using Adobe XD to create prototypes for my upcoming project. I also learned to create responsive web design.",
        "While working on this project i have learned various skills and importance of accessibility. Usability studies and peers feedback was one of the most important inflactal in each iteration of the app’s look and feel.",
        "While doing this project I have increase my knowledge and experience on using Adobe XD to create prototypes for my upcoming project. I also learned to create responsive web design.",
      ],
    },
  };

  // Image paths
  const cover = "/images/project2/cover.png";
  const coverBlur = "/images/project2/blur/cover.png";
  const paperWireframe = "/images/project2/paper_wireframe.jpg";
  const paperWireframeBlur = "/images/project2/blur/paper_wireframe.jpg";
  const l1 = "/images/project2/wireframe/1.png";
  const l1Blur = "/images/project2/blur/1.png";
  const l2 = "/images/project2/wireframe/2.png";
  const l2Blur = "/images/project2/blur/2.png";
  const l3 = "/images/project2/wireframe/3.png";
  const l3Blur = "/images/project2/blur/3.png";

  return (
    <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-display-large font-bold">{projectData.title}</h1>
        <p className="mb-3 text-body-large">{projectData.description}</p>
      </div>
      <Image
        src={cover}
        alt="Foody"
        loading="lazy"
        width={1280}
        height={720}
        className="rounded-2xl object-contain bg-[#eceef2] ring-tertiary w-full h-96"
        placeholder="blur"
        blurDataURL={coverBlur}
      />
      <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="rounded-lg bg-surface-container">
          <div className="flex flex-col gap-1 p-4">
            <h5 className="text-title-small text-tertiary">
              {projectData.role.heading}
            </h5>
            <p className="text-body-small text-on-surface">
              {projectData.role.content}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-surface-container">
          <div className="flex flex-col gap-1 p-4">
            <h5 className="text-title-small text-tertiary">
              {projectData.goal.heading}
            </h5>
            <p className="text-body-small text-on-surface">
              {projectData.goal.content}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-surface-container">
          <div className="flex flex-col gap-1 p-4">
            <h5 className="text-title-small text-tertiary">
              {projectData.audience.heading}
            </h5>
            <p className="text-body-small text-on-surface">
              {projectData.audience.content}
            </p>
          </div>
        </div>
      </div>

      {/* Challenges & Initial Design */}
      <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8">
        <div className="flex flex-col gap-2 rounded-2xl">
          <h4 className="text-title-large text-primary font-bold">
            {projectData.challenges.heading}
          </h4>
          <p className="text-on-surface text-body-large">
            {projectData.challenges.content}
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl">
          <h4 className="text-title-large text-primary font-bold">
            {projectData.initialDesign.heading}
          </h4>
          <p className="text-on-surface text-body-large">
            {projectData.initialDesign.content}
          </p>
        </div>
        <Image
          src={paperWireframe}
          alt="Wireframe"
          placeholder="blur"
          blurDataURL={paperWireframeBlur}
          className="bg-tertiary-container ring-2 ring-primary rounded-2xl w-full h-72 object-cover"
          height={800}
          width={800}
        />
      </div>

      {/* Wireframes */}
      <div className="flex flex-col gap-4">
        <h4 className="text-title-large text-primary font-bold">Wireframes</h4>
        <div className="flex flex-wrap justify-between items-center bg-surface-container p-8 rounded-2xl gap-4">
          <Image
            src={l1}
            alt="Wireframe"
            placeholder="blur"
            blurDataURL={l1Blur}
            width={350}
            height={600}
            className="rounded-2xl"
          />
          <Image
            src={l2}
            alt="Wireframe"
            placeholder="blur"
            blurDataURL={l2Blur}
            width={350}
            height={600}
            className="rounded-2xl"
          />
          <Image
            src={l3}
            alt="Wireframe"
            width={350}
            placeholder="blur"
            blurDataURL={l3Blur}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* User Testing Results */}
      <div className="flex flex-col gap-4 my-8">
        <h4 className="text-title-large text-primary font-bold">
          {projectData.testingResults.heading}
        </h4>
        <p className="text-body-large text-on-surface">
          {projectData.testingResults.content}
        </p>
      </div>

      {/* High-fidelity Prototypes */}
      <div className="flex flex-col gap-4">
        <h4 className="text-title-large text-primary font-bold">
          High-fidelity prototypes
        </h4>
        <iframe
          className="rounded-2xl ring-2 ring-primary"
          src="https://xd.adobe.com/embed/10c0dcb1-1ef9-4708-b20b-443772350c10-4593/"
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
      </div>

      {/* Takeaways */}
      <div className="flex flex-col gap-4 my-8">
        <h4 className="text-title-large text-primary font-bold">
          {projectData.takeaways.heading}
        </h4>
        <p className="">
          {projectData.takeaways.content.map((line, i) => (
            <span key={i}>
              {line}
              <br /> <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default project2;
