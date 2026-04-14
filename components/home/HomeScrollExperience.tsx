"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import { ContactForm } from "@/components/ContactForm";
import { SERVICES, ServiceIcon } from "@/lib/services";
import { SITE } from "@/lib/site";
import { useActiveScene } from "@/hooks/useActiveScene";
import { SectionBreak } from "@/components/story/SectionBreak";
import { StoryTypingSearch } from "@/components/story/StoryTypingSearch";
import { HeroSketchfabEmbed } from "@/components/home/HeroSketchfabEmbed";
import { storyItem, storyReveal, storyStagger } from "@/lib/motion";

const HeroScrollCanvas = dynamic(
  () => import("./HeroScrollCanvas").then((m) => m.HeroScrollCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="pointer-events-none fixed inset-0 z-0 bg-neutral-50" />
    ),
  }
);

const values = [
  {
    title: "Found",
    body: "Structured data, fast pages, and clear titles so you actually show up when neighbors search.",
  },
  {
    title: "Trusted",
    body: "A real site — not a PDF — with hours, proof, and contact paths that work on every phone.",
  },
  {
    title: "Action",
    body: "Maps, directions, and calls to action that turn a search into a visit or a lead.",
  },
];

const skills = ["React", "Next.js", "Tailwind CSS", "Node.js", "Figma", "SEO"];

export function HomeScrollExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const activePhase = useActiveScene(scrollRef);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.38,
  });

  const progressFor3d = reduce ? scrollYProgress : smoothProgress;

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }));
    }
  }, [reduce]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.12, 0.28], [1, 0.95, 0]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.32], [0, reduce ? 0 : 58]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, reduce ? 0 : -48]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, reduce ? 1 : 0.88]);
  const bridgeOpacity = useTransform(scrollYProgress, [0.18, 0.32, 0.48, 0.58], [0, 1, 1, 0]);
  const bridgeScale = useTransform(scrollYProgress, [0.2, 0.45], [0.92, 1]);

  const sublineOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.9, 0.96, 1], [1, 1, 0.15, 0]);
  return (
    <div ref={scrollRef} className="relative min-h-[1080vh]">
      <motion.div style={{ opacity: canvasOpacity }}>
        <HeroScrollCanvas scrollProgress={progressFor3d} activePhase={activePhase} />
      </motion.div>

      <div className="relative z-10">
        <section
          id="hero"
          data-scene="hero"
          className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
        >
          <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
            <HeroSketchfabEmbed />
          </motion.div>
          <div
            className="relative z-10 mx-auto w-full max-w-6xl"
            style={{ perspective: reduce ? "none" : "1400px" }}
          >
            <motion.div
              style={{
                rotateX: heroRotateX,
                y: heroY,
                scale: heroScale,
                opacity: heroOpacity,
                transformStyle: "preserve-3d",
                transformOrigin: "center 45%",
              }}
              className="will-change-transform"
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {SITE.name}
              </p>
              <h1 className="text-balance text-4xl font-bold leading-[1.02] tracking-tight text-foreground drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Be the answer when Jersey City searches
              </h1>
              <motion.p
                style={{ opacity: sublineOpacity }}
                className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)] sm:text-xl"
              >
                Websites that turn “near me” into calls, visits, and directions — built here, for
                businesses here.
              </motion.p>
              <motion.div style={{ opacity: heroOpacity }} className="mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Start a project
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            aria-hidden
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
              Scroll the story
            </span>
            <span className="h-12 w-px bg-gradient-to-b from-accent/60 to-transparent" />
          </motion.div>
        </section>

        <section
          data-scene="search"
          className="relative flex min-h-[75svh] items-center justify-center px-4 py-32 sm:px-6 md:py-40"
        >
          <motion.div
            style={{ opacity: bridgeOpacity, scale: bridgeScale }}
            className="max-w-3xl text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              How a site earns foot traffic
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Search → screen → sidewalk
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-sm font-light leading-relaxed text-muted sm:text-base">
              The 3D behind you isn’t decoration — it follows three beats: someone searches, your
              business lands on their phone, they route to your door. Then we show the work, the
              offer, and how to reach you.
            </p>
          </motion.div>
        </section>

        <SectionBreak />

        <section
          id="search"
          data-scene="search"
          className="scroll-mt-24 flex min-h-[min(100svh,920px)] flex-col justify-center px-4 py-32 md:py-48 sm:px-6 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px", amount: 0.35 }}
            variants={storyStagger}
            className="mx-auto w-full max-w-4xl"
          >
            <motion.p
              variants={storyItem}
              className="text-center text-xs font-medium uppercase tracking-[0.28em] text-accent"
            >
              Beat 1 · Discovery
            </motion.p>
            <motion.h2
              variants={storyItem}
              className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              They type what they need. You want to be the tap.
            </motion.h2>
            <motion.p
              variants={storyItem}
              className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-muted sm:text-lg"
            >
              Good SEO isn’t magic — it’s fast pages, clear titles, and structured info so Google
              can confidently show your bakery, gym, or studio when someone nearby searches.
            </motion.p>
            <motion.div variants={storyReveal} className="mt-14">
              <StoryTypingSearch />
            </motion.div>
          </motion.div>
        </section>

        <SectionBreak />

        <MotionSection
          variant="story"
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="grid gap-14 md:grid-cols-3 md:gap-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="border-t border-neutral-200/90 bg-white/50 pt-10 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold tracking-tight">{v.title}</h3>
                <p className="mt-5 text-sm font-light leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </MotionSection>

        <SectionBreak />

        <section
          id="phone"
          data-scene="phone"
          className="scroll-mt-24 flex min-h-[min(100svh,920px)] flex-col justify-center px-4 py-32 md:py-48 sm:px-6 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px", amount: 0.35 }}
            variants={storyStagger}
            className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20"
          >
            <div>
              <motion.p
                variants={storyItem}
                className="text-xs font-medium uppercase tracking-[0.28em] text-accent"
              >
                Beat 2 · Your business on their phone
              </motion.p>
              <motion.h2
                variants={storyItem}
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                Hours, map, and proof — readable in one thumb scroll
              </motion.h2>
              <motion.p
                variants={storyItem}
                className="mt-6 text-base font-light leading-relaxed text-muted sm:text-lg"
              >
                On the bus, walking Grove — people decide in seconds. Your site should load fast,
                show what you do, and make calling or booking obvious. That&apos;s the bar for local
                Jersey City competition.
              </motion.p>
            </div>
            <motion.div
              variants={storyReveal}
              className="relative mx-auto aspect-[9/16] w-full max-w-[260px] rounded-[2rem] border border-neutral-200/90 bg-gradient-to-b from-neutral-900 to-neutral-950 p-3 shadow-2xl shadow-neutral-900/25"
            >
              <div className="flex h-full flex-col rounded-[1.5rem] bg-neutral-950 p-4">
                <div className="mx-auto h-1 w-10 rounded-full bg-neutral-700" />
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-2/3 rounded bg-neutral-800" />
                  <div className="h-3 w-full rounded bg-neutral-800/80" />
                  <div className="h-3 w-5/6 rounded bg-neutral-800/80" />
                </div>
                <div className="mt-6 flex flex-1 flex-col gap-2">
                  <motion.div
                    className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-xs font-medium text-accent">Your listing</p>
                    <p className="mt-1 text-sm font-light text-neutral-200">Open today · 0.4 mi</p>
                  </motion.div>
                  <motion.div
                    className="rounded-xl border border-neutral-800 bg-neutral-900/80 px-3 py-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-xs text-neutral-500">Competitor</p>
                    <p className="mt-1 text-sm font-light text-neutral-400">Slower site · farther</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <SectionBreak />

        <section
          id="directions"
          data-scene="directions"
          className="scroll-mt-24 flex min-h-[min(100svh,920px)] flex-col justify-center px-4 py-32 md:py-48 sm:px-6 lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px", amount: 0.35 }}
            variants={storyStagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={storyItem}
              className="text-xs font-medium uppercase tracking-[0.28em] text-accent"
            >
              Beat 3 · From search to sidewalk
            </motion.p>
            <motion.h2
              variants={storyItem}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              One tap to directions — your address, unambiguous
            </motion.h2>
            <motion.p
              variants={storyItem}
              className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-muted sm:text-lg"
            >
              Maps, embedded location blocks, and consistent NAP (name, address, phone) across your
              site help people and map apps route to you — whether you&apos;re by the PATH, the
              waterfront, or a quiet side street.
            </motion.p>
            <motion.div
              variants={storyReveal}
              className="mx-auto mt-12 flex max-w-md flex-col gap-3 rounded-2xl border border-dashed border-neutral-300 bg-white/60 px-6 py-8 text-left backdrop-blur-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Example CTA</p>
              <p className="text-lg font-medium text-foreground">Get directions</p>
              <p className="text-sm font-light text-muted">
                123 Example St, Jersey City — opens in Maps with one tap.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <SectionBreak />

        <section
          id="services"
          data-scene="services"
          className="scroll-mt-24 border-t border-neutral-100 bg-white/60 py-20 backdrop-blur-md md:py-24"
        >
          <MotionSection variant="story" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">What I offer</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Services</h2>
            <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-muted">
              From first sketch to launch — scoped for small teams and owner-operators.
            </p>
          </MotionSection>
          <MotionSection className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-2xl border border-neutral-200/90 bg-white/90 p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
                >
                  <ServiceIcon name={s.icon} />
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <p className="mt-6 text-sm font-medium text-foreground">{s.price}</p>
                </article>
              ))}
            </div>
            <div className="mt-14 border-t border-neutral-200 pt-12 text-center">
              <p className="text-lg font-light text-muted">Ready to talk scope and timeline?</p>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get in touch
              </Link>
            </div>
          </MotionSection>
        </section>

        <SectionBreak />

        <section
          id="about"
          data-scene="about"
          className="scroll-mt-24 border-t border-neutral-100 py-20 md:py-24"
        >
          <MotionSection variant="story" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Joshua Malki</h2>
            <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-muted">
              Solo web developer based in Jersey City — I care about craft and conversion, not
              ticket queues.
            </p>
          </MotionSection>
          <MotionSection className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
              <div className="space-y-6 text-sm font-light leading-relaxed text-muted">
                <p>
                  I started {SITE.name} so Hudson County businesses have a direct line to the
                  person who writes the code and answers questions — not a rotating account team.
                </p>
                <p>
                  My stack centers on React and Next.js with Tailwind. When a project needs it, I
                  bring in Node, headless CMS, and SEO patterns that help you show up for the
                  searches that matter.
                </p>
                <p>
                  When I&apos;m not shipping client work, I&apos;m sketching in Figma or walking the
                  waterfront — good ideas tend to show up with a view of Manhattan.
                </p>
              </div>
              <div>
                <Image
                  src={SITE.ownerPhoto}
                  alt={`${SITE.owner}`}
                  width={400}
                  height={500}
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover ring-1 ring-neutral-200/80"
                />
              </div>
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-12">
              <h3 className="text-2xl font-bold tracking-tight">Skills</h3>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-xl border border-neutral-200 bg-white/90 px-4 py-3 text-center text-sm font-light text-foreground backdrop-blur-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-8 md:p-12">
              <h3 className="text-2xl font-bold tracking-tight">Why local?</h3>
              <ul className="mt-6 space-y-4 text-sm font-light leading-relaxed text-muted">
                <li>
                  <span className="font-medium text-foreground">
                    Same time zone, often same neighborhood
                  </span>{" "}
                  — quick feedback and optional in-person reviews when it helps.
                </li>
                <li>
                  <span className="font-medium text-foreground">Context for JC customers</span> —
                  copy and UX that match how people actually move through the city.
                </li>
                <li>
                  <span className="font-medium text-foreground">Long-term partnership</span> —
                  someone you can reach for updates.
                </li>
              </ul>
            </div>
          </MotionSection>
        </section>

        <MotionSection variant="story" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <blockquote className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-light leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Joshua made our site feel as polished as a national brand — with the personal
              attention only a local partner gives.&rdquo;
            </p>
            <footer className="mt-8 text-sm font-light text-muted">
              — Local business owner, Downtown JC
            </footer>
          </blockquote>
        </MotionSection>

        <SectionBreak />

        <section
          id="contact"
          data-scene="contact"
          className="scroll-mt-24 border-t border-neutral-200 bg-white/70 pb-10 pt-16 backdrop-blur-md md:pb-12 md:pt-20"
        >
          <MotionSection variant="story" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s talk</h2>
            <p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-muted">
              Tell me about your business and what “success” looks like on the other side of search.
            </p>
            <p className="mt-6 text-sm font-light text-muted">
              Based in {SITE.location} ·{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-sm font-light text-muted">
              Call or text:{" "}
              <a href={`tel:${SITE.phone}`} className="text-accent hover:underline">
                {SITE.phone}
              </a>
            </p>
          </MotionSection>
          <MotionSection className="mx-auto max-w-xl px-4 pb-2 pt-8 sm:px-6 lg:px-8">
            <ContactForm />
          </MotionSection>
        </section>
      </div>
    </div>
  );
}
