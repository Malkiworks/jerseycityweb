"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Code2, MapPin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

const stats = [
  { label: "Starting from", value: "$150" },
  { label: "Response time", value: "< 24 hrs" },
  { label: "Projects built", value: "10+" },
];

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "SEO", "Google Analytics", "Search Console", "Node.js",
];

export function AboutSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-6 py-20"
      id="about"
      aria-label="About Joshua Malki"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* Decorative background blob */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-foreground/5" />
            <div className="absolute -bottom-8 -right-8 h-full w-full rounded-2xl border border-foreground/10" />
            <Image
              src="/joshua-malki.png"
              alt="Joshua Malki — web designer and developer in Jersey City"
              width={420}
              height={500}
              className="relative z-10 h-[420px] w-[340px] rounded-2xl object-cover object-top shadow-lg"
              priority
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-6 z-20 flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-md">
              <GraduationCap className="h-4 w-4 text-foreground" />
              <span className="text-xs font-semibold">HCCC · Computer Science</span>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Me
            </p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
              Hi, I&apos;m Joshua Malki
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a student studying Computer Science at{" "}
              <strong className="text-foreground">
                Hudson County Community College (HCCC)
              </strong>{" "}
              in Jersey City, NJ.
            </p>
            <p>
              Alongside my studies I build affordable, professional websites for
              local businesses and entrepreneurs. I handle everything — design,
              development, technical SEO, Google Analytics, and Search Console
              setup — so you can focus on running your business.
            </p>
            <p>
              Being a student means my rates are cheap without cutting corners on
              quality. Every site I ship is fast, indexed, and built to rank.
            </p>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border px-4 py-3 text-center"
              >
                <p className="text-xl font-bold">{s.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Code2 className="h-4 w-4" />
              Skills &amp; Tools
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${SITE.email}?subject=Website%20Enquiry`}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Jersey City, NJ
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
