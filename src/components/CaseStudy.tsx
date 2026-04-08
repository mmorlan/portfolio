import { Link } from "react-router-dom";
import type { Project } from "../data/content";

import converseHero from "../assets/images/converse_hero.avif";
import fiorucciHero from "../assets/images/fiorucci_hero.webp";
import petrossianHero from "../assets/images/petrossian_hero.jpg";
import pairanoiaHero from "../assets/images/pairanoia_hero.png";

const heroes: Record<string, string> = {
  converse: converseHero,
  fiorucci: fiorucciHero,
  petrossian: petrossianHero,
  pairanoia: pairanoiaHero,
};

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const { slug, url, title, bg, caseStudy } = project;
  const hero = heroes[slug];

  return (
    <>
      {/* BACK LINK — fixed sidebar on desktop, inline on mobile */}
      <Link
        to="/#work"
        className="mb-10 inline-block px-6 pt-6 text-sm font-medium text-accent no-underline transition-opacity hover:opacity-75 md:fixed md:left-8 md:top-24 md:mb-0 md:px-0 md:pt-0 md:whitespace-nowrap"
      >
        &larr; Back to work
      </Link>

      <article className="mx-auto max-w-[860px] px-6 pt-0 pb-[100px] md:px-10 md:pt-12">

      {/* HERO */}
      <div className="mb-12 overflow-hidden rounded-xl" style={{ backgroundColor: bg }}>
        <img
          src={hero}
          alt={`${title} case study preview`}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* TITLE */}
      <header className="mb-12">
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-accent">
          {caseStudy.tag}
        </p>
        <h1 className="mb-4 font-serif text-[2.6rem] font-normal leading-[1.15] -tracking-[0.02em] text-primary">
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary no-underline transition-opacity hover:opacity-75">
            {title}
          </a>
        </h1>
        <p className="text-[1.08rem] leading-[1.65] text-muted">
          {caseStudy.subtitle}
        </p>
      </header>

      {/* OVERVIEW */}
      <section className="mb-14">
        <h2 className="mb-4 font-serif text-[1.4rem] font-normal text-primary">Overview</h2>
        {caseStudy.overview.split("\n\n").map((paragraph, i, arr) => (
          <p
            key={i}
            className={`text-[0.95rem] leading-[1.75] text-muted${i < arr.length - 1 ? " mb-4" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* ROLE & STACK */}
      <section className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Role
          </h3>
          <ul className="space-y-1.5 text-[0.9rem] leading-[1.6] text-muted">
            {caseStudy.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">
            Stack
          </h3>
          <ul className="space-y-1.5 text-[0.9rem] leading-[1.6] text-muted">
            {caseStudy.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="mb-14 border-t border-border" />

      {/* MOTIVATION */}
      {caseStudy.motivation && (
        <section className="mb-14">
          <h2 className="mb-4 font-serif text-[1.4rem] font-normal text-primary">
            {caseStudy.motivation.heading}
          </h2>
          {caseStudy.motivation.body.split("\n\n").map((paragraph, i, arr) => (
            <p
              key={i}
              className={`text-[0.95rem] leading-[1.75] text-muted${i < arr.length - 1 ? " mb-4" : ""}`}
            >
              {paragraph}
            </p>
          ))}
          {caseStudy.motivation.citations && caseStudy.motivation.citations.length > 0 && (
            <ul className="mt-6 space-y-1.5">
              {caseStudy.motivation.citations.map((c) => (
                <li key={c.url} className="text-[0.8rem] text-muted/70">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* CHALLENGE */}
      {caseStudy.challenge && (
        <section className="mb-14">
          <h2 className="mb-4 font-serif text-[1.4rem] font-normal text-primary">The Challenge</h2>
          {caseStudy.challenge.split("\n\n").map((paragraph, i, arr) => (
            <p
              key={i}
              className={`text-[0.95rem] leading-[1.75] text-muted${i < arr.length - 1 ? " mb-4" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {/* CONTENT SECTIONS */}
      {caseStudy.sections.map((section) => (
        <section key={section.heading} className="mb-14">
          <h2 className="mb-4 font-serif text-[1.4rem] font-normal text-primary">
            {section.heading}
          </h2>
          {(Array.isArray(section.body)
            ? section.body
            : section.body.split("\n\n")
          ).map((paragraph, i, arr) => (
            <p
              key={i}
              className={`text-[0.95rem] leading-[1.75] text-muted${i < arr.length - 1 ? " mb-4" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {/* ROADMAP */}
      {caseStudy.roadmap && caseStudy.roadmap.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-4 font-serif text-[1.4rem] font-normal text-primary">What's Next</h2>
          <ul className="space-y-2">
            {caseStudy.roadmap.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[0.95rem] leading-[1.75] text-muted">
                <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

    </article>
    </>
  );
}
