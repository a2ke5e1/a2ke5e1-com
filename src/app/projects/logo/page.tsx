import { Metadata, NextPage } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "LOGO - Projects | a2ke5e1.com",
  description: "A website for finding and viewing coding tutorials",
};
const Project1: NextPage = () => {
  // Project data object containing all text-related content
  const projectData = {
    title: "LOGO",
    description: "A website for finding and viewing coding tutorials",
    role: {
      heading: "My Role",
      content:
        "I was working alone on this project, hence I was the lead UX Designer and Researcher throughout the whole project.",
    },
    goal: {
      heading: "Project Goal",
      content:
        "Goal of project to provide high quality tutorials and to have a discussion for better understanding.",
    },
    audience: {
      heading: "Target Audience",
      content:
        "This project aims to target people of all age groups, especially those who are learning programming.",
    },
    challenges: {
      heading: "Key challenges & Constraints",
      content:
        "Key challenges were to provide a responsive design to mobile and web to find coding tutorials. This project aims to solve difficulties faced during learning programming.",
    },
    initialDesign: {
      heading: "Initial design concepts",
      content:
        "I did a quick ideation exercise to come up with ideas to address gaps identified in the competitive audit. My focus was especially on the size of the actions and minimizing clicks to complete a task.",
    },
    testingResults: {
      heading: "User Testing Results",
      content:
        "After User Testing, we found that people wanted a way to copy code from videos. So we added a sidebar to copy code presented in the video.",
    },
    takeaways: {
      heading: "Takeaways",
      content:
        "While working on this project, I have learned various skills and the importance of accessibility. Usability studies and peer feedback were instrumental in each iteration of the app’s look and feel. I also increased my knowledge of using Adobe XD to create prototypes and learned to create responsive web design.",
    },
  };

  // Image paths
  const cover = "/images/project1/cover.png";
  const coverBlur = "/images/project1/blur/cover.png";
  const paperWireframe = "/images/project1/paper_wireframe.png";
  const paperWireframeBlur = "/images/project1/blur/paper_wireframe.jpg";
  const l1 = "/images/project1/wireframe/1.png";
  const l1Blur = "/images/project1/blur/1.png";
  const l2 = "/images/project1/wireframe/2.png";
  const l2Blur = "/images/project1/blur/2.png";
  const l3 = "/images/project1/wireframe/3.png";
  const l3Blur = "/images/project1/blur/3.png";

  return (
    <div className="flex flex-col gap-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-display-large font-bold">{projectData.title}</h1>
        <p className="mb-3 text-body-large">{projectData.description}</p>
      </div>
      <Image
        src={cover}
        alt="Foody"
        loading="lazy"
        width={1280}
        height={720}
        className="rounded-2xl object-contain bg-[#f3f9fe] ring-tertiary w-full h-96"
        placeholder="blur"
        blurDataURL={coverBlur}
      />
      <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="rounded-lg bg-surface-container">
          <div className="flex flex-col gap-1 p-4 text-center">
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
          src="https://xd.adobe.com/embed/dc775c83-f017-4bc9-b330-ea90572f5820-8924/"
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
        <iframe
          className="rounded-2xl ring-2 ring-primary"
          src="https://xd.adobe.com/embed/476470df-3c3b-4f26-9ab0-bdfd79775582-1237/"
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
          {projectData.takeaways.content}
        </p>
      </div>
    </div>
  );
};

export default Project1;
