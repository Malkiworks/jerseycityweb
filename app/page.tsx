import { HomeScrollExperience } from "@/components/home/HomeScrollExperience";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Jersey City Web — solo web developer Joshua Malki. Fast, local, precise websites for Jersey City businesses.",
  path: "/",
});

export default function HomePage() {
  return <HomeScrollExperience />;
}
