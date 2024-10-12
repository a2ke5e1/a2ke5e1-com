import { Metadata, NextPage } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Renders | a2ke5e1.com",
  description: "Artwork and Renders by Apurv Ajay Kumar",
};

const RenderPage: NextPage = () => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <div className="bg-tertiary-container sm:p-14 p-8 rounded-xl flex gap-1 flex-col justify-center items-center text-center">
          <h1 className="sm:font-bold sm:text-display-large text-display-small">
            {"Renders & Artworks"}
          </h1>
          <p className="sm:text-title-small text-body-small text-on-tertiary-container">
            Some wallpapers, logos and other artwork I have created while
            learning Blender
          </p>
        </div>
        <div className="grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          {artwork.map((item) => (
            <Image
              key={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-2xl aspect-video object-cover"
              placeholder="blur"
              blurDataURL={item.blur}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default RenderPage;

const artwork = [
  {
    img: "/images/renders/test4.png",
    title: "Donout with Tea",
    blur: "/images/renders/blur/test4.jpg",
  },
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
