import { Footer } from "@/components/core/Footer/Footer";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { HeroBanner } from "@/components/core/HeroBanner";
import { Metadata, NextPage } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Renders",
  description: "Artwork and Renders by Apurv Ajay Kumar",
};

const RenderPage: NextPage = () => {
  return (
    <PageShell>
      <div className="mb-8 flex flex-col gap-4">
        <div className="mx-auto w-full p-2">
          <HeroBanner
            title="Renders"
            description="Artwork and Renders by Apurv Ajay Kumar"
            image={{ src: "/images/renders/test4.png", alt: "Donout with Tea" }}
          />
        </div>
        <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1 gap-2 mx-auto w-full max-w-4xl px-4 md:px-6 ">
          {artwork.map((item) => (
            <Image
              key={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-2xl aspect-video object-cover hover:ring-2 ring-tertiary"
              placeholder="blur"
              blurDataURL={item.blur}
            />
          ))}
        </div>
      </div>
      <Footer />
    </PageShell>
  );
};
export default RenderPage;

const artwork = [
  // {
  //   img: "/images/renders/test4.png",
  //   title: "Donout with Tea",
  //   blur: "/images/renders/blur/test4.jpg",
  // },
  {
    img: "/images/renders/donout3.png",
    title: "Donout 2",
    blur: "/images/renders/blur/donout3.jpg",
  },
  {
    img: "/images/renders/donout2.png",
    title: "Donout with Utils",
    blur: "/images/renders/blur/donout2.jpg",
  },
  {
    img: "/images/renders/donout.png",
    title: "Donout",
    blur: "/images/renders/blur/donout.jpg",
  },
  {
    img: "/images/renders/background.png",
    title: "Baxkground Artwork",
    blur: "/images/renders/blur/background.jpg",
  },
  {
    img: "/images/renders/glasses.png",
    title: "Glasses",
    blur: "/images/renders/blur/glasses.jpg",
  },
  {
    img: "/images/renders/dagger.png",
    title: "Dagger",
    blur: "/images/renders/blur/dagger.jpg",
  },
  {
    img: "/images/renders/knife.png",
    title: "Dagger 2",
    blur: "/images/renders/blur/knife.jpg",
  },
  {
    img: "/images/renders/ice_cream.jpg",
    title: "Ice Cream",
    blur: "/images/renders/blur/ice_cream.jpg",
  },
  {
    img: "/images/renders/image0005.png",
    title: "Logo V2",
    blur: "/images/renders/blur/image0005.jpg",
  },
  {
    img: "/images/renders/logo_wall.png",
    title: "Logo",
    blur: "/images/renders/blur/logo_wall.jpg",
  },
  {
    img: "/images/renders/room.jpg",
    title: "My Unfinised Room",
    blur: "/images/renders/blur/room.jpg",
  },
  {
    img: "/images/renders/phycalc3.png",
    title: "Physics Calculator Logo with Style",
    blur: "/images/renders/blur/phycalc3.jpg",
  },
];
