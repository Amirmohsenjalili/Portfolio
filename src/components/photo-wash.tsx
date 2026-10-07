import Image from "next/image";

export function PhotoWash() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-y-0 end-0 w-[72%]">
        <Image
          src="/portrait.jpg"
          alt=""
          fill
          sizes="80vw"
          className="object-cover opacity-80 blur-2xl dark:opacity-55"
        />
      </div>
      <div className="photo-fade absolute inset-0" />
    </div>
  );
}
