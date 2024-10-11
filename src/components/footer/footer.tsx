import Link from "next/link";

export const SwigglyLine = () => {
  return (
    <svg
      _ngcontent-evd-c22=""
      aria-hidden="true"
      width="100%"
      height="8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        _ngcontent-evd-c22=""
        id="a"
        width="91"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <g _ngcontent-evd-c22="" clipPath="url(#clip0_2426_11367)">
          <path
            _ngcontent-evd-c22=""
            d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
            stroke="#E1E3E1"
            strokeLinecap="square"
          ></path>
        </g>
      </pattern>
      <rect
        _ngcontent-evd-c22=""
        width="100%"
        height="100%"
        fill="url(#a)"
      ></rect>
    </svg>
  );
};

export const Footer = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex flex-col my-8">
        <Link
          href={"https://www.a2ke5e1.com/"}
          className="text-title-medium font-bold"
        >
          a2ke5e1.com
        </Link>
        <Link
          href="mailto:aakapurv@gmail.com"
          className="hover:underline hover:underline-offset-2 text-body-medium -mt-1"
        >
          aakapurv@gmail.com
        </Link>
      </div>
      <div className="flex flex-col my-8 col-span-2"></div>
      <div className="flex flex-col my-8">
        <a className="text-title-small font-bold">{"Build with"}</a>
        <p className="text-body-medium">
          {"Next.js, Tailwind CSS, Material Web and TypeScript. "}
          <Link
            href="https://github.com/a2ke5e1/a2ke5e1-com"
            className="hover:underline hover:underline-offset-2 text-tertiary font-bold text-label-small"
          >
            https://github.com/a2ke5e1/a2ke5e1-com
          </Link>
        </p>
      </div>
    </div>
  );
};
