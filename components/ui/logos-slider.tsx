import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  {
    id: "logo-vercel",
    description: "Vercel",
    image: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png",
    className: "h-8 w-auto",
  },
  {
    id: "logo-google",
    description: "Google",
    image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-nextjs",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-figma",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-tailwind",
    description: "Tailwind CSS",
    image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
    className: "h-5 w-auto",
  },
  {
    id: "logo-supabase",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider() {
  return (
    <div className="relative h-[100px] w-full overflow-hidden rounded-xl border bg-white/30">
      <InfiniteSlider className="flex h-full w-full items-center" duration={35} gap={64}>
        {logos.map((logo) => (
          <div key={logo.id} className="flex w-36 items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.image} alt={logo.description} className={logo.className} />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-0 h-full w-[140px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-0 h-full w-[140px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
