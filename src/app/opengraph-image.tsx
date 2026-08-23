import { ImageResponse } from "next/og";

export const alt = "A2K — web and mobile products, backend systems, and APIs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#415f91",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "96px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          A2K
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: "36px",
            opacity: 0.9,
            maxWidth: "900px",
          }}
        >
          Web and mobile products, backend systems, and APIs.
        </div>
      </div>
    ),
    size
  );
}