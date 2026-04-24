import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-900">
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none text-[32vw] font-extrabold leading-none tracking-tighter text-white/5"
      >
        ATUL
      </span>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 md:px-16 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            We build digital experiences that move people.
          </h1>
          <p className="mt-6 max-w-xl text-base text-neutral-200 md:text-lg">
            A creative studio crafting brands, websites, and products with purpose.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
