import {
  BASE_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL
} from "@/config/config";
import Image from "next/image";
import Link from "next/link";

const SwigglyLine = () => {
  return (
    <svg
      _ngcontent-evd-c22=""
      aria-hidden="true"
      width="100%"
      height="8"
      fill="none"
      style={{
        paddingInline: 16
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
        <g clipPath="url(#clip0_2426_11367)">
          <path
            d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
            stroke="#E1E3E1"
            className="stroke-surface-container-highest"
            strokeLinecap="square"
          ></path>
        </g>
      </pattern>
      <rect width="100%" height="100%" fill="url(#a)"></rect>
    </svg>
  );
};

export const Footer = () => {
  return (
    <>
      <SwigglyLine />
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-8 sm:gap-2 gap-4 mx-auto w-full max-w-4xl px-4 md:px-6">
          <Link href={BASE_URL} className="text-title-medium font-bold flex flex-col gap-2">
            <Image
              src={"/favicon-48x48.png"}
              width={32}
              height={32}
              alt="my logo"
            />
            a2ke5e1
          </Link>
        <div className="flex flex-col"></div>
        <div className="flex flex-col">
          <a className="text-title-small font-bold">{"Let's Connect"}</a>
          <div className="flex flex-col gap-1 my-2">
            {Object.entries({
              Email: EMAIL_URL,
              Linkedin: LINKEDIN_URL,
              Github: GITHUB_URL,
              X: TWITTER_URL,
            }).map(([key, value]) => (
              <Link
                href={value}
                key={key}
                className="underline text-primary text-label-large font-semibold"
              >
                {key}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <a className="text-title-small font-bold">{"Build with"}</a>
          <p className="text-body-medium! mt-2">
            {"Next.js, Tailwind CSS and TypeScript. View "}
            <Link
              href="https://github.com/a2ke5e1/a2ke5e1-com"
              className="text-body-medium text-primary underline"
            >
              source code
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
