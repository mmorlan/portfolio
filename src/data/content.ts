export interface Section {
  heading: string;
  body: string | string[];
}

export interface Citation {
  label: string;
  url: string;
}

export interface Motivation {
  heading: string;
  body: string;
  citations: Citation[];
}

export interface CaseStudyData {
  tag: string;
  subtitle: string;
  overview: string;
  roles: string[];
  stack: string[];
  sections: Section[];
  motivation?: Motivation;
  challenge?: string;
  roadmap?: string[];
}

export interface Project {
  slug: string;
  url: string;
  tag: string;
  title: string;
  desc: string;
  bg: string;
  color: string;
  caseStudy: CaseStudyData;
}

interface HeroHeading {
  before: string;
  br1: boolean;
  mid: string;
  br2: boolean;
  after: string;
  em: string;
  end: string;
}

interface SiteContent {
  header: {
    siteName: string;
    authorName: string;
    linkedin: string;
    resume: string;
  };
  hero: {
    badge: string;
    heading: HeroHeading;
    bio: string;
    ctaWork: string;
    ctaContact: string;
  };
  brands: { label: string };
  work: { heading: string; subheading: string };
  footer: { prefix: string; email: string; year: string };
}

export const siteContent: SiteContent = {
  header: {
    siteName: "Matt's All Folks!",
    authorName: "Matt Morlan",
    linkedin: "https://www.linkedin.com/in/matthew-morlan/",
    resume: "/MMorlan Resume 20260416.pdf",
  },
  hero: {
    badge: "Front-End Engineer | Urban Planner | Product-Minded | Chicago, IL",
    heading: {
      before: "I write clean code, ",
      br1: true,
      mid: " ask the right questions,",
      br2: true,
      after: "and ship work I'm ",
      em: "proud",
      end: " of.",
    },
    bio: "Hi I'm Matt! I'm a front-end developer who thinks like a PM and has a master's degree in urban planning, which means I'm just as comfortable talking about how cities operate as I am about how components render. My day-to-day is React, TypeScript, and modern CSS, with Claude Code and Cursor AI in the mix to move faster and build smarter. But I've spent enough time leading discovery sessions, writing requirements, and presenting to stakeholders to know that good code is only half the job. I care about what gets built just as much as how and who I build it for.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
  },
  brands: { label: "Brands I've shipped for" },
  work: { heading: "Selected work", subheading: "A few things I'm proud of." },
  footer: { prefix: "Made by Matt · Built with Claude Code ·", email: "mattrmorlan@gmail.com", year: " © 2026" },
};

export const projects: Project[] = [
    {
    slug: "pairanoia",
    url: "https://pairanoia.vercel.app",
    tag: "Next.js | AWS | Full-Stack | Product",
    title: "Pairanoia",
    desc: "A Competitive Browser-Based Memory Card Game",
    bg: "#C3DCE8",
    color: "#1B3D4F",
    caseStudy: {
      tag: "Next.js | AWS | Full-Stack | Product",
      subtitle: "A Competitive Browser-Based Memory Card Game",
      overview: `Pairanoia is a competitive browser-based memory card game where players flip tiles to find matching pairs as fast as possible. It's designed as a deliberate alternative to doom scrolling — a productive, skill-building substitute for the passive, algorithmically-driven content loops that dominate modern screen time.

I owned this product end to end. From the initial research and problem framing through technical architecture, UX decisions, phased roadmap, and deployment — I acted as PM, designer, and engineer, making explicit tradeoffs between scope, feasibility, and user experience at every stage.`,
      roles: ["Product Lead & Engineer"],
      stack: [
        "Next.js (App Router)",
        "TypeScript",
        "AWS DynamoDB",
        "AWS Cognito",
        "AWS Lambda",
        "AWS Amplify v6",
        "Vercel",
        "GitHub Actions",
      ],
      sections: [
        {
          heading: "Product Vision",
          body: `The core hypothesis: if you give people something fast, competitive, and cognitively rewarding, they'll choose it over passive feed consumption. Brain training games have demonstrated statistically significant improvements in working memory, processing speed, and cognitive function across multiple peer-reviewed trials. The goal was to build something genuinely fun and genuinely good for your brain, without asking you to install an app, pay a subscription, or create an account just to start.

"Brain rot" was Oxford's Word of the Year in 2024. Social platforms are engineered around dopamine-scrolling, each swipe triggers a small dopamine release, and variable reward schedules create the same compulsion loop that makes slot machines hard to walk away from. The antidote isn't abstinence, it's substitution. Pairanoia was built in that gap.`,
        },
        {
          heading: "Statement of Work",
          body: `Before writing a line of code, I defined three core product bets that would determine whether v1 succeeded.

Bet 1 — Anonymous-first onboarding reduces friction and increases play rate.
Requiring signup before play is a conversion killer for casual games. If users have to create an account before they can try the product, most won't. The design hypothesis was that letting anyone play immediately (with a score-saving prompt after completion) would increase both play rate and eventual account creation.

Bet 2 — A competitive scoring system with meaningful differentiation drives return visits.
A flat score per match doesn't give skilled players a reason to care. The hypothesis was that a time-decay multiplier tied to total elapsed time would create continuous pressure, differentiate casual from skilled players, and make leaderboard competition feel earned rather than arbitrary.

Bet 3 — A CI/CD pipeline with persistent state makes the product feel production-grade.
Shipping with GitHub Actions CI/CD, three deployment environments, and full page-refresh state persistence was a deliberate decision to hold the product to a professional standard, both for users and as a technical showcase.`,
        },
        {
          heading: "A Problem Worth Solving",
          body: `"Brain rot" was Oxford's Word of the Year in 2024. Research published in Brain Sciences describes excessive low-quality content consumption as a genuine public health concern — degrading attentional capacity, disrupting memory formation, and fragmenting focus in ways that compound over time.

A 2025 meta-analysis across 16 randomized controlled trials found that brain training games produced statistically significant improvements in cognitive function, working memory, and processing speed across all age groups. The mechanism is neuroplasticity: engaging in memory challenges reinforces synaptic connections and promotes neurogenesis.

Pairanoia was built in that gap. Fast enough to scratch the same itch as a social feed scroll, competitive enough to keep you coming back, and cognitively demanding enough to actually do something for your brain.`,
        },
        {
          heading: "Product Decisions & Tradeoffs",
          body: `Anonymous-first onboarding
Requiring an account before playing would have killed conversion. Instead, any user can play immediately. After completing a game, unauthenticated players see a modal offering to create an account, sign in, or skip. If they choose to create an account, the game result is stored in localStorage as a pendingGame and saved to DynamoDB automatically on first login, removing any penalty for skipping signup the first time.

Scoring system design
Early playtesting showed a flat score per match didn't create meaningful differentiation between skilled and casual players. The time-decay multiplier tied to total elapsed time, not per-pair time, solved this. It creates continuous pressure to stay fast throughout a run without punishing slow starts disproportionately. The result is that skill actually differentiates scores in a meaningful way.

Survival mode timer calculation
7.5 seconds per pair was arrived at through playtesting across grid sizes. Too generous and the mode loses tension; too strict and it feels unfair on larger grids. This was a feel problem, not a math problem, and the right answer required iteration, not calculation.`,
        },
        {
          heading: "Two Modes, One Engine",
          body: `Freeplay is the open sandbox. Players choose any grid from 4×4 to 12×12, see a live preview before starting, and play at their own pace. Score and board state persist through full page refreshes, close the tab mid-game and the board is exactly where you left it.

Survival is a structured gauntlet. Nine stages of escalating grid sizes, each with three levels of increasing difficulty. A countdown timer starts on "Start Game" and doesn't pause. Fail to clear the board in time and all cards are revealed. Clear it and you advance. The absolute timer deadline is persisted to localStorage so a page refresh doesn't break the run.

Both modes share the same core game logic, component architecture, and scoring utilities, but diverge significantly in how they manage state, handle persistence, and communicate progress to the player.`,
        },
        {
          heading: "Technical Architecture",
          body: [
            "Frontend: Next.js App Router, TypeScript — migrated mid-build from a Vite prototype",
            "Auth: AWS Cognito via Amplify v6, configured for SSR; anonymous play supported from day one",
            "Data: DynamoDB with GSI-backed leaderboard queries; full game record stored per completion",
            "Email: Lambda CustomMessage trigger sends styled HTML verification emails",
            "CI/CD: GitHub Actions — lint, typecheck, and build on every PR; deploy to Vercel preview on dev/staging, production on main",
            "Environments: Development, Staging, Production with separate data",
          ],
        },
        {
          heading: "Product Roadmap",
          body: `Phase 1 — Foundation (Shipped)
Freeplay and Survival modes, competitive scoring system, anonymous-first auth, DynamoDB persistence, CI/CD pipeline, mobile-responsive layout.

Phase 2 — Instrumentation (In Progress)
Analytics dashboard tracking engagement, drop-off by stage and grid size, scoring distribution, and feature usage. Goal: make data-informed decisions about Phase 3 priorities rather than building on instinct.

Phase 3 — Growth & Retention (Medium-term)
Freeplay leaderboard segmented by grid size, anonymous game logging for aggregate analytics, profile stats filterable by grid size, profile picture uploader, Vitest unit testing suite.

Phase 4 — Expansion (Longer horizon)
Roguelike mode (Slay the Spire-inspired battle system), mobile magnify feature, iOS native app, social features informed by retention data.`,
        },
        {
          heading: "Outcome",
          body: "A production-grade full-stack application owned end to end, from product hypothesis through phased delivery. Anonymous-first onboarding, a competitive scoring system with real differentiation, and a CI/CD pipeline that holds the product to a professional standard. Active development continues, guided by the analytics instrumentation currently in progress.",
        },
      ],
    },
  },
  {
    slug: "converse",
    url: "https://www.converse.com",
    tag: "A/B Testing | Optimization",
    title: "Converse",
    desc: "The Experiments That Became Features",
    bg: "#C0EDCF",
    color: "#2D7A52",
    caseStudy: {
      tag: "A/B Testing & Front-End Optimization",
      subtitle: "The Experiments That Became Features",
      overview:
        "Converse.com is one of Nike's flagship e-commerce properties with high traffic, high stakes, and a team that takes optimization seriously. I joined as part of a larger front-end team at BORN Group, where I spearheaded the A/B testing program and worked directly alongside Converse's in-house PM team to design, run, and iterate on experiments across the site. In parallel, the broader team began migrating the front-end from SFCC's legacy ISML and jQuery architecture toward React, a huge technical shift for a storefront of this scale and size.",
      roles: ["Front-End Developer", "A/B Testing Lead"],
      stack: [
        "Salesforce Commerce Cloud (SFCC)",
        "Adobe Analytics",
        "React",
        "ISML",
        "JavaScript / CSS",
        "jQuery",
      ],
      sections: [
        {
          heading: "The Testing",
          body: "What I liked most about the Converse engagement was how collaborative the testing process was. It wasn't just \"create a test, run it, read the result, move on.\" Working alongside Converse's PM team, we'd look at what a result revealed about user behavior and ask what it unlocked next — whether that meant an A/B/C follow-up, a refinement to a winning variant, or a new hypothesis entirely. The tests compounded on each other in a way that made the work feel more like product discovery than QA.",
        },
        {
          heading: "3D Builder",
          body: "The 3D Builder test is the one I'm most proud of. We pitted an interactive 3D model of the shoe builder against the existing static 2D experience and measured for completion rate and add-to-cart. The 3D variant was vistoriious as we hypothesized. Engagement was strong and the builder done rate meaningfully outperformed its predecessor. Seeing users respond to a genuinely new kind of interaction on a site that big was one of those moments that makes the work feel real.",
        },
        {
          heading: "Other Experiments",
          body: "Beyond the 3D Builder, I ran tests across several other surface areas: the CBY Colorchip (Customized By You colorchip on product cards, tested for product views and add-to-cart), Quick Shop visibility on PDP cross-sell products, and the At A Glance module (a PDP feature designed to highlight key product attributes at a glance). Each test produced winning variants that were iterated into shipped features.",
        },
        {
          heading: "Outcome",
          body: "Multiple winning variants shipped to production. Several are still live on Converse.com today.",
        },
      ],
    },
  },
  {
    slug: "fiorucci",
    url: "https://www.fiorucci.com",
    tag: "Migration | Salesforce PWA",
    title: "Fiorucci",
    desc: "From Legacy Platform to Award-Winning Storefront.",
    bg: "#BDD6C9",
    color: "#1F3B2A",
    caseStudy: {
      tag: "Migration | Composable Storefront | Headless Commerce",
      subtitle: "Salesforce Composable Storefront Migration",
      overview:
        "Fiorucci is an Italian fashion house with a legacy as bold as its aesthetic. When they came to BORN Group, they needed more than a refresh, rather a full platform modernization. We migrated their entire storefront from Salesforce SiteGenesis, a legacy architecture with significant technical debt, to the Salesforce Composable Storefront built on PWA Kit. This was a complete code rewrite, not an incremental update. The result won Gold in the Storefront/E-Commerce category at the dotComm Awards 2022.",
      roles: ["Front-End Developer"],
      stack: [
        "Salesforce Commerce Cloud",
        "PWA Kit",
        "React",
        "Chakra UI",
        "Amplience",
        "GraphQL"
      ],
      sections: [
        {
          heading: "The Challenge",
          body: "SiteGenesis is a monolithic, template-driven architecture that's difficult to extend and slow to build on. Composable Storefront is the opposite: headless, component-based, and built for modern development workflows. Moving between them isn't a migration so much as a rebuild from the ground up. As one of three front-end developers on the project, I handled most of the component-level work: designing and building a reusable component library using Chakra UI, implementing a mobile-first UI, and maintaining the architectural consistency that makes a component library actually usable long-term.",
        },
        {
          heading: "Headless Content with Amplience",
          body: "One of the most impactful decisions on this project was the Amplience integration. Fiorucci needed a modern, headless content solution that would give their team real editorial control without requiring a developer for every content change. Using Amplience's GraphQL Content Delivery API, we built a content schema that let the client manage and update content across the storefront quickly and independently. For a brand that moves at the pace of fashion, that kind of flexibility matters.",
        },
        {
          heading: "Performance",
          body: "The move to a PWA-based architecture produced measurable results. Load time and Lighthouse performance scores improved by approximately 30%, a meaningful jump for a fashion storefront where first impressions drive conversions.",
        },
        {
          heading: "Outcome",
          body: "Delivered on time. Load time and Lighthouse scores up ~30%. Won Gold, Storefront/E-Commerce — dotComm Awards 2022.",
        },
      ],
    },
  },
  {
    slug: "petrossian",
    url: "https://www.petrossian.com",
    tag: "Shopify Plus",
    title: "Petrossian Caviar",
    desc: "A Luxury Storefront, For a Luxury Brand",
    bg: "#C4E8D4",
    color: "#2E8B57",
    caseStudy: {
      tag: "Magento to Shopify Plus Migration",
      subtitle: "A Luxury Storefront, For a Luxury Brand",
      overview:
        "Petrossian has been selling caviar and fine foods since 1920. Their digital presence needed to catch up. I joined as the lead front-end developer to migrate their storefront from Magento to Shopify Plus, their first Shopify storefront, and worked closely with their marketing director over the course of nearly a year to build out a site that matched the brand's elevated positioning. The engagement was as collaborative as it was technical.",
      roles: [
        "Front-End Developer - lead FED, content architecture, feature development, client collaboration",
      ],
      stack: ["Shopify Plus", "Liquid", "JavaScript", "Vue.js", "Sass"],
      sections: [
        {
          heading: "Content Architecture",
          body: "One of my priorities early on was building a content schema that would actually serve the team running the site. I architected and optimized content schemas across nearly every page type, PDPs, PLPs, hero banners, the header, and custom pages, so that content managers could make edits quickly and confidently without pulling in a developer for routine updates. I also built out a custom autoplay video content type for hero sections, giving the marketing team a richer tool for seasonal campaigns and brand storytelling.",
        },
        {
          heading: "Free Gift at Cart Threshold",
          body: [
            "This was the feature I'm most proud of on this project. The idea: when a customer's cart hits a certain dollar threshold, they become eligible to add a free gift from a curated gift collection. Simple concept, interesting execution. I built the collection, wrote the cart logic to detect eligibility and surface the offer at the right moment, and handled the UI that prompted users to claim it.",
            "The gift collection couldn't be discoverable. If a savvy user found the collection URL, they could add a free gift without meeting the threshold, which defeats the point. I used Shopify's native collection and product visibility settings to hide both the collection and the individual gift items from the storefront and search entirely, keeping them accessible only through the cart-triggered logic. Clean solution, no custom hacks required.",
          ],
        },
        {
          heading: "Working with the Client",
          body: "The relationship with Petrossian's marketing director was genuinely collaborative. It wasn't a handoff-and-execute engagement, we were in regular communication throughout, which meant the product decisions were better and the surprises were fewer. This produced better work at launch, and I think this project reflects that.",
        },
        {
          heading: "Outcome",
          body: "Successful Magento to Shopify Plus migration. Full content schema built across all major page types. Free gift feature launched with SEO-safe collection architecture.",
        },
      ],
    },
  },
];
