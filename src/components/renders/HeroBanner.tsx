import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="grid grid-flow-row gap-2 sm:grid-cols-2 grid-cols-1 *:min-h-48!">
      <div className="bg-primary-container rounded-xl p-10 sm:p-14 flex flex-col justify-center gap-1">
        <h1 className="text-display-large font-bold text-on-primary-container">
          Renders
        </h1>
      </div>
      <Image
        className="bg-surface-container rounded-xl md:h-138.5 w-full object-cover"
        width={800}
        height={800}
        loading="lazy"
        src={"/images/renders/test4.png"}
        alt="Donout with Tea"
        blurDataURL={"/images/renders/blur/test4.jpg"}
      />
    </div>
  );
}
