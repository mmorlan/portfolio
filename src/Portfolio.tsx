import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide-core.min.css";

import { siteContent, projects } from "./data/content";
import type { Project } from "./data/content";
import CaseStudy from "./components/CaseStudy";
import burgerIcon from "./assets/icons/burger-menu.svg";

import converseThumb from "./assets/thumbnails/converse_CBY.gif";
import converseHover from "./assets/thumbnails/converse_hover.webp";
import fiorucciThumb from "./assets/thumbnails/fiorucci.gif";
import fiorucciHover from "./assets/thumbnails/fiorucci_hover.jpg";
import petrossianThumb from "./assets/thumbnails/petrossian.gif";
import petrossianHover from "./assets/thumbnails/petrossian_hover.jpg";
import converseLogo from "./assets/logos/converse_logo.svg";
import fiorucciLogo from "./assets/logos/fiorucci_logo.svg";
import ardeneLogo from "./assets/logos/ardene_logo.webp";
import petrossianLogo from "./assets/logos/petrossian_logo_white.webp";
import frameLogo from "./assets/logos/frame_logo.png";
import johnHardyLogo from "./assets/logos/jh_logo.svg";
import rawLogo from "./assets/logos/raw_logo.webp";
import allureLogo from "./assets/logos/allure_logo.png";
import pairanoiaThumb from "./assets/thumbnails/pairanoia.gif";
import pairanoiaHover from "./assets/thumbnails/pairanoia_hover.png";

const thumbs: Record<string, { thumb: string; hover: string }> = {
  converse: { thumb: converseThumb, hover: converseHover },
  fiorucci: { thumb: fiorucciThumb, hover: fiorucciHover },
  petrossian: { thumb: petrossianThumb, hover: petrossianHover },
  pairanoia: { thumb: pairanoiaThumb, hover: pairanoiaHover },
};

const brands = [
  { name: "Converse", logo: converseLogo, href: "https://www.converse.com" },
  { name: "Fiorucci", logo: fiorucciLogo, href: "https://www.fiorucci.com" },
  { name: "Ardene", logo: ardeneLogo, href: "https://www.ardene.com" },
  { name: "Petrossian", logo: petrossianLogo, href: "https://www.petrossian.com" },
  { name: "Frame", logo: frameLogo, href: "https://www.frame-store.com" },
  { name: "John Hardy", logo: johnHardyLogo, href: "https://www.johnhardy.com" },
  { name: "Raw Supplements", logo: rawLogo, href: "https://getrawnutrition.com/" },
  { name: "Allure Bridals", logo: allureLogo, href: "https://www.allurebridals.com" },
];

interface CardProps {
  project: Project;
}

function Card({ project }: CardProps) {
  const images = thumbs[project.slug];
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-white flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(31,59,42,0.10)]">
      <div
        className="relative overflow-hidden md:h-[330px]"
        style={{ backgroundColor: project.bg }}
      >
        <img src={images.thumb} alt={project.title} className="h-auto w-full object-contain transition-opacity duration-300 group-hover:opacity-0 md:absolute md:inset-0 md:h-full md:object-cover" />
        <img src={images.hover} alt="" className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:object-cover" />
      </div>
      <div className="flex flex-1 flex-col px-[22px] pt-5 pb-6">
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-accent">
          {project.tag}
        </p>
        <h3 className="mb-2.5 font-serif text-[1.15rem] font-normal leading-[1.3] text-primary">
          {project.title}
        </h3>
        <p className="mb-[18px] flex-1 text-[0.85rem] leading-[1.6] text-muted">
          {project.desc}
        </p>
        <span className="relative inline-block w-fit text-[0.8rem] font-semibold text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full">
          View case study →
        </span>
      </div>
    </div>
  );
}

interface BrandLogoProps {
  name: string;
  logo: string;
  href: string;
}

function BrandLogo({ name, logo, href }: BrandLogoProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group/brand flex cursor-pointer items-center justify-center font-serif text-xl italic text-primary transition-opacity duration-200 select-none hover:opacity-75">
      <img
        src={logo}
        alt={name}
        className="object-contain"
      />
    </a>
  );
}

function Home() {
  const { hero, brands: brandsContent, work } = siteContent;
  return (
    <>
      {/* HERO */}
      <section id="about" className="mx-auto max-w-[860px] px-6 pt-6 pb-8 md:px-10 md:pt-24">
        <span className="mb-7 inline-block rounded-full bg-border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-badge">
          {hero.badge}
        </span>
        <h1 className="mb-6 font-serif text-[1.75rem] md:text-[3rem] font-normal leading-[1.15] -tracking-[0.02em] text-primary">
          {hero.heading.before}<br/>{hero.heading.mid}<br/>{hero.heading.after}{" "}
          <em className="italic text-accent">{hero.heading.em}</em>{hero.heading.end}
        </h1>
        <p className="mb-10 text-[1.08rem] text-muted">
          {hero.bio}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-block cursor-pointer rounded-md bg-accent px-[26px] py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent/90"
          >
            {hero.ctaWork}
          </a>
          <a
            href={`mailto:${siteContent.footer.email}`}
            className="relative cursor-pointer pb-0.5 text-sm font-medium text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            {hero.ctaContact}
          </a>
        </div>
      </section>

      <hr className="mx-auto max-w-[860px] border-t border-border px-6 md:px-10" />

      {/* BRANDS */}
      <section className="mx-auto max-w-[860px] px-6 py-8 md:px-10">
        <p className="mb-7 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted">
          {brandsContent.label}
        </p>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 2500,
            speed: 800,
            perPage: 4,
            perMove: 1,
            gap: "2rem",
            pagination: false,
            arrows: false,
            drag: "free",
            breakpoints: {
              768: { perPage: 3 },
              480: { perPage: 2 },
            },
          }}
          aria-label="Brands I've worked with"
        >
          {brands.map((b) => (
            <SplideSlide key={b.name}>
              <BrandLogo name={b.name} logo={b.logo} href={b.href} />
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <hr className="mx-auto max-w-[860px] border-t border-border px-6 md:px-10" />

      {/* PROJECTS */}
      <section id="work" className="mx-auto max-w-[860px] px-6 pt-8 pb-[100px] md:px-10">
        <h2 className="mb-2 font-serif text-[1.9rem] font-normal text-primary">
          {work.heading}
        </h2>
        <p className="mb-9 text-[0.95rem] text-muted">
          {work.subheading}
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[22px]">
          {projects.map((p) => (
            <Link key={p.slug} to={"/work/" + p.slug} className="no-underline">
              <Card project={p} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <p className="p-10 text-center text-muted">Project not found.</p>;
  return <CaseStudy project={project} />;
}

export default function Portfolio() {
  const { header, footer } = siteContent;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-bg font-sans leading-[1.65] text-primary">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* HEADER */}
      <header className="sticky top-0 z-100 flex h-[68px] items-center justify-between border-b border-border bg-white px-6 md:px-10">
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-lg italic font-normal -tracking-[0.02em] text-primary no-underline md:static md:translate-x-0 md:text-[1.3rem]">
          {header.siteName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <span className="text-sm font-medium text-primary">{header.authorName}</span>
          <a href="/#work" className="cursor-pointer text-sm font-medium text-muted no-underline">Work</a>
          <a href="/#about" className="cursor-pointer text-sm font-medium text-muted no-underline">About</a>
          <a href={`mailto:${footer.email}`} className="cursor-pointer text-sm font-medium text-muted no-underline">Contact</a>
          <a href={header.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-sm font-medium text-muted no-underline">LinkedIn</a>
          <a href={header.resume} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-sm font-medium text-muted no-underline">Resume</a>
        </nav>

        {/* Mobile nav */}
        <div ref={menuRef} className="relative ml-auto flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Navigation menu"
            aria-expanded={menuOpen}
            className="cursor-pointer p-1"
          >
            <img src={burgerIcon} alt="" className="h-5 w-5" />
          </button>
          {menuOpen && (
            <nav aria-label="Mobile navigation" className="absolute right-0 top-full mt-2 flex min-w-[160px] flex-col rounded-lg border border-border bg-white py-2 shadow-lg">
              <a href="/#work" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 text-sm font-medium text-muted no-underline transition-colors hover:bg-bg">Work</a>
              <a href="/#about" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 text-sm font-medium text-muted no-underline transition-colors hover:bg-bg">About</a>
              <a href={`mailto:${footer.email}`} onClick={() => setMenuOpen(false)} className="px-5 py-2.5 text-sm font-medium text-muted no-underline transition-colors hover:bg-bg">Contact</a>
              <a href={header.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 text-sm font-medium text-muted no-underline transition-colors hover:bg-bg">LinkedIn</a>
              <a href={header.resume} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="px-5 py-2.5 text-sm font-medium text-muted no-underline transition-colors hover:bg-bg">Resume</a>
            </nav>
          )}
        </div>
      </header>

      <ScrollToTop />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-primary py-7 px-6 text-center text-[0.85rem] text-border md:px-10">
        {footer.prefix}{" "}
        <a href={`mailto:${footer.email}`} className="text-accent">{footer.email}</a>
        {footer.year}
      </footer>

    </div>
  );
}
