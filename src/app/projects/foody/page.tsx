import type { Metadata, NextPage } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Foody - Projects | a2ke5e1.com",
  description: "A mobile food ordering app for a Restaurant.",
};

const Project0: NextPage = () => {
  const cover = "/images/project0/cover.png";
  const coverBlur = "/images/project0/blur/cover.png";
  const paperWireframe = "/images/project0/paper_wfireframe.jpg";
  const paperWireframeBlur = "/images/project0/blur/paper_wfireframe.jpg";
  const l1 = "/images/project0/wireframe/1.png";
  const l1Blur = "/images/project0/blur/1.png";
  const l2 = "/images/project0/wireframe/2.png";
  const l2Blur = "/images/project0/blur/2.png";
  const l3 = "/images/project0/wireframe/3.png";
  const l3Blur = "/images/project0/blur/3.png";

  return (
    <>
      <div className="flex flex-col gap-4 max-w-(--breakpoint-xl) mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-display-large font-bold">Foody</h1>
          <p className="mb-3 text-body-large">
            {"A mobile food ordering app for a Restaurant."}
          </p>
        </div>
        <Image
          src={cover}
          alt={"Foody"}
          loading="lazy"
          width={1280}
          height={720}
          className="rounded-2xl object-contain bg-[#e2e9f7] ring-tertiary w-full h-96"
          placeholder="blur"
          blurDataURL={coverBlur}
        />
        <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="rounded-lg bg-surface-container">
            <div className="flex flex-col gap-1 p-4">
              <h5 className="text-title-small text-tertiary">{"My Role"}</h5>
              <p className="text-body-small text-on-surface">
                {
                  "I was working alone on this project, hence I was the lead UX Designer and Researcher throughout the whole project."
                }
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container">
            <div className="flex flex-col gap-1 p-4">
              <h5 className="text-title-small text-tertiary">
                {"Project Goal"}
              </h5>
              <p className="text-body-small text-on-surface">
                {
                  "Create a smooth experience between opening an app for the first time to ordering their favorite food without wasting time."
                }
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container">
            <div className="flex flex-col gap-1 p-4">
              <h5 className="text-title-small text-tertiary">
                {"Target Audience"}
              </h5>
              <p className="text-body-small text-on-surface">
                {
                  " This project aims to target people of all age groups, especially those who are busy and can't cook their own food."
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-8">
          <div className="flex flex-col gap-2 rounded-2xl">
            <h4 className="text-title-large text-primary font-bold">
              {"Key challenges & Constraints"}
            </h4>
            <p className="text-on-surface text-body-large">
              {
                "Key challenges were to provide a good user experience for the next billion users."
              }
            </p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl">
            <h4 className="text-title-large text-primary font-bold">
              {"Initial design concepts"}
            </h4>
            <p className="text-on-surface text-body-large">
              {
                " I did a quick ideation exercise to come up with ideas to address gaps identified in the competitive audit. My focus was especially on the size of the actions and minimizing clicks to complete a task."
              }
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

        <div className="flex flex-col gap-4">
          <h4 className="text-title-large text-primary font-bold">
            Wireframes
          </h4>
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

        <div className="flex flex-col gap-4 my-8">
          <h4 className="text-title-large text-primary font-bold">
            User Testing Results
          </h4>
          <h6 className="text-title-medium text-secondary font-light">
            Round 1
          </h6>
          <ul className="list-disc ml-5">
            <li className="">
              3 out of 5 participants found it difficult to find their orders
              from the home screen.
            </li>
            <li className="">
              4 out of 5 participants found it difficult to fill their address.
            </li>
            <li className="">
              4 out of 5 participants opened the cart screen instead of
              selecting their food.
            </li>
          </ul>

          <h6 className="text-title-medium text-secondary font-light">
            Round 2
          </h6>
          <ul className="list-disc ml-5">
            <li className="">
              5 out of 5 participants want to filter food recommendations based
              on type such as western, veg, etc.
            </li>
            <li className="">
              4 out of 5 participants wanted to choose the size of the food.
            </li>
            <li className="">
              4 out of 5 people wanted an option to choose from multiple
              addresses.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-title-large text-primary font-bold">Mockups</h4>
          <iframe
            className="rounded-2xl ring-2 ring-primary"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/WJ0W8g4n5uRZyh19wLX5xh/Foody?node-id=301%3A817"
            width="100%"
            height="800px"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-2xl ring-2 ring-primary"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/WJ0W8g4n5uRZyh19wLX5xh/Foody?node-id=307%3A498&scaling=scale-down&page-id=301%3A817&starting-point-node-id=307%3A498&show-proto-sidebar=1"
            width="100%"
            height="800px"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col gap-4 my-8">
          <h4 className="text-title-large text-primary font-bold">Takeaways</h4>
          <p className="">
            {
              "While working on this project, I learned various skills and the importance of accessibility. Usability studies and peer feedback were crucial in each iteration of the app’s look and feel."
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default Project0;
