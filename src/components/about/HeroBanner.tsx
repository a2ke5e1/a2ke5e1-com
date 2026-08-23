import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="grid grid-flow-row gap-2 sm:grid-cols-2 grid-cols-1 *:min-h-48!">
      <div className="bg-primary-container rounded-xl p-10 sm:p-14 flex flex-col justify-center gap-1">
        <h1 className="text-display-large font-bold text-on-primary-container">
          About
        </h1>
      </div>
      <Image
        className="bg-surface-container rounded-xl md:h-138.5 w-full object-cover"
        src="/me.png"
        alt="Apurv Kumar"
        width={800}
        height={800}
        loading="eager"
      />
    </div>
  );
}
