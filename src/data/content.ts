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
    resume: "/MMorlan Dev Resume 20260309.pdf",
  },
  hero: {
    badge: "Front-End Developer & Product Tinkerer | Chicago, IL",
    heading: {
      before: "I write clean code, ",
      br1: true,
      mid: " ask the right questions,",
      br2: true,
      after: "and ship work I'm ",
      em: "proud",
      end: " of.",
    },
    bio: "Hi I'm Matt! I'm a front-end developer who thinks like a PM and is a sucker for a good pun. My day-to-day is the most powerful AI tools, React, TypeScript, and modern CSS building interfaces that are fast, scalable, and maintainable. But I've spent enough time leading discovery sessions, writing requirements, and presenting to stakeholders to understand that good code is only half the job. I care about what gets built just as much as how and who I build it for.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
  },
  brands: { label: "Brands I've shipped for" },
  work: { heading: "Selected work", subheading: "A few things I'm proud of." },
  footer: { prefix: "Made by Matt · Built with Claude Code ·", email: "mattrmorlan@gmail.com", year: " © 2026" },
};

export const projects: Project[] = [
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
  {
    slug: "pairanoia",
    url: "https://pairanoia.vercel.app",
    tag: "Next.js | AWS | Full-Stack | Game Design",
    title: "Pairanoia",
    desc: "A Competitive Browser-Based Memory Card Game",
    bg: "#C3DCE8",
    color: "#1B3D4F",
    caseStudy: {
      tag: "Next.js | AWS | Full-Stack",
      subtitle: "A Competitive Browser-Based Memory Card Game",
      overview: `Pairanoia is a competitive browser-based memory card game where players flip tiles to find matching pairs as fast as possible. It's designed as a direct counter to doom scrolling — a productive, skill-building alternative to the passive, algorithmically-driven content loops that dominate modern screen time.

The project started simple: a card-matching game with a leaderboard. It became something more deliberate once the research behind it clicked into place. Brain training games have demonstrated statistically significant improvements in working memory, processing speed, and cognitive function across multiple peer-reviewed trials. The goal was to build something that's genuinely fun to play and genuinely good for your brain, without asking you to install an app, pay a subscription, or create an account just to start.

On the technical side, Pairanoia is a full-stack production application built from scratch: Next.js App Router, TypeScript, AWS Cognito authentication, DynamoDB persistence, a Lambda-triggered email system, and a GitHub Actions CI/CD pipeline.`,
      roles: ["Designer & Full-Stack Developer"],
      stack: [
        "Next.js (App Router)",
        "TypeScript",
        "AWS DynamoDB",
        "AWS Cognito",
        "AWS Lambda",
        "AWS Amplify v6",
        "Lucide React",
        "Vercel",
        "GitHub Actions",
      ],
      motivation: {
        heading: "A Problem Worth Solving",
        body: `"Brain rot" was Oxford's Word of the Year in 2024. It refers to the cognitive dullness that accumulates from excessive exposure to low-quality online content, a mental fog that sets in after an hour of short-form video or an endless "doomscrolling". Research published in Brain Sciences describes it as a genuine public health concern, with overuse of social platforms degrading attentional capacity, disrupting memory formation, and fragmenting focus in ways that compound over time.

Social platforms are in fact engineered around dopamine-scrolling. Each scroll or swipe triggers a small dopamine release, and variable reward schedules create the same compulsion loop that makes slot machines hard to walk away from. A 2025 paper in Perspectives in Public Health estimates that over a billion people spent an average of three hours daily scrolling through social media feeds in 2020, with some countries reporting self-reported averages above four hours. Most teenagers now describe themselves as "almost constantly online."

The antidote isn't abstinence, it's substitution. A 2025 meta-analysis across 16 randomized controlled trials found that brain training games produced statistically significant improvements in cognitive function, working memory, and processing speed in healthy individuals across all age groups. The mechanism is neuroplasticity: engaging in memory challenges reinforces synaptic connections, promotes neurogenesis, and increases the production of BDNF, a protein that supports neuronal growth and the consolidation of new information.

Pairanoia was built in that gap. It's fast enough to scratch the same itch as a social feed scroll, competitive enough to keep you coming back, and cognitively demanding enough to actually do something for your brain in the process.`,
        citations: [
          {
            label: "Brain Rot in the Digital Era",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11939997/",
          },
          {
            label: "Dopamine-Scrolling: A Modern Public Health Challenge",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12322333/",
          },
          {
            label: "Efficacy of Brain Training Games: A Meta-Analysis",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12244833/",
          },
        ],
      },
      challenge: `The hardest part wasn't the game logic, it was defining what "success" actually meant. A memory game is easy to build at a basic level. Building one that holds up technically, scales to a leaderboard, handles anonymous and authenticated players gracefully, persists state across full page refreshes, and ships with a CI/CD pipeline is a different scope entirely.

Architecturally, the project required migrating mid-build from a Vite prototype to Next.js App Router, resolving some hydration mismatches between server and client rendering, restructuring routing, and converting a JavaScript codebase to strict TypeScript in one pass. On the gameplay side, the scoring system had to feel fair across a 4×4 grid and a 12×12 grid without a fixed formula that would break at the edges. Authentication also had to work for anonymous players who shouldn't be punished for skipping signup, but be seamlessly available when they changed their mind after a good run.`,
      sections: [
        {
          heading: "Two Modes, One Engine",
          body: `Freeplay is the open sandbox. Players choose any grid from 4×4 to 12×12 (with mobile-adjusted constraints), pick their grid dimensions from a custom dropdown, see a live preview of the board before starting, and play at their own pace. A stopwatch starts on the first card flip and stops on the last match. Score and board state persist through full page refreshes via localStorage. Close the tab mid-game and the board is exactly where you left it when you come back.

Survival is a structured gauntlet. Nine stages of escalating grid sizes, each with three levels of increasing difficulty. A countdown timer, calculated as 7.5 seconds per pair in the grid, starts on "Start Game" and doesn't pause. Fail to clear the board in time and all cards are revealed. Clear it and you advance. The game tracks your absolute timer deadline in localStorage so a page refresh doesn't break the run. Remaining time is recalculated on mount and the timer resumes automatically if time hasn't expired while the tab was closed.

Both modes share the same core game logic, component architecture, and scoring utilities, but diverge significantly in how they manage state, handle persistence, and communicate progress to the player.`,
        },
        {
          heading: "A Scoring System With Real Stakes",
          body: `Scoring is what makes the competitive layer feel meaningful. Every pair is scored individually using a unified formula: 100 × Pairs Multiplier × Time Multiplier, with Survival adding a Level Difficulty Multiplier on top.

The Pairs Multiplier scales with grid size, 8 pairs (a 4×4 grid) is the baseline at 1×, and every pair above that scales proportionally, so a 12×12 grid is worth significantly more than a 4×4. The Time Multiplier rewards speed: pairs matched in under 3 seconds earn a 5× bonus, with the multiplier decaying in tiers down to 1× after 50 seconds. Crucially, the multiplier is based on total elapsed time at the moment of each match, not per-pair time, so it naturally degrades as a game progresses and creates real pressure to stay fast throughout.

In Survival mode, the Level Difficulty Multiplier stacks on top. Clearing the third level in any stage earns a 2× bonus. That same level also introduces curated groups of visually similar icons, making it harder to distinguish pairs by sight alone. The result is that skill actually differentiates scores in a meaningful way across grid sizes, modes, and player types.`,
        },
        {
          heading: "Authentication Without Friction",
          body: `Requiring an account before playing is a conversion killer. Pairanoia lets anyone play immediately — no signup, no login, no interruption. After completing a game, unauthenticated players see a SaveScoreModal offering to create an account, sign in, or skip entirely.

If they choose to create an account, the game result is stored in localStorage as a pendingGame. On next login, checkAuth() detects the pending record, saves it to DynamoDB automatically, and removes it from localStorage synchronously before the async write to prevent duplicate saves on concurrent auth calls.

Authentication itself runs through AWS Cognito via Amplify v6, configured for Next.js App Router's SSR environment. Signup includes a password strength bar, confirm password field, visibility toggle, and inline error messages. Verification is code-based: after signup, users enter a 6-digit OTP inline on the registration page. The verification email is generated by a Lambda CustomMessage trigger and delivered as styled HTML instead of the default Cognito template.`,
        },
        {
          heading: "Data That Goes Somewhere",
          body: `Every completed game is saved to DynamoDB with a full record: mode, score, grid dimensions, elapsed time, device type (desktop or mobile, detected via user agent), average milliseconds per pair, and survival-specific fields including stage reached, clutch pairs (matches made with 3 seconds or less remaining), and whether the player completed the full run.

A GSI on a leaderboardkey field enables efficient top-10 queries across both modes, with device segmentation (all, desktop, mobile) applied at query time. The leaderboard page fetches both freeplay and survival top-10 arrays in a single request, mode switching is instant with no second call.

The profile page surfaces this data in a three-tab layout: Global stats (total games, lifetime score, favorite mode and grid, average pair time), Freeplay stats (best score, best time, favorite grid), and Survival stats (highest stage, best score, clutch pairs, clutch rate). A recent games table filters per the active tab. Skeleton loading states replace content during the DynamoDB fetch to prevent layout shift.`,
        },
        {
          heading: "Mobile, Responsiveness, and Edge Cases",
          body: `The game is fully playable on mobile with constraints that account for screen size. Freeplay caps columns at 8 on mobile; Survival uses a separate MOBILE_GRIDS table that adjusts row counts to preserve the same pair totals as the desktop stages. The CSS grid layout uses a --cols CSS variable set from JavaScript, with repeat(var(--cols), minmax(0, 1fr)) ensuring tiles never overflow their container.

The sticky game bar remains anchored below the fixed header during grid scroll. On mobile, the timer and scoring formula display inline in a compact layout. Survival stats (stage, level, lives) move to a non-sticky bottom bar that appears below the sticky bar on scroll. Grid size controls hide once a game is in progress.

Auth state in the header uses skeleton placeholders during Cognito resolution to prevent a flash of the wrong state (logged-out nav appearing briefly before the logged-in state renders). On mobile, unauthenticated users see a single user icon that opens a Sign In / Register dropdown rather than two separate links.`,
        },
      ],
      roadmap: [
        "Freeplay leaderboard segmented by grid size",
        "Profile picture uploader with content screening",
        "Freeplay stats filterable by grid size",
        "Vitest unit testing suite",
        "Anonymous game logging for analytics",
        "Roguelike mode (Slay the Spire-inspired battle system)",
        "Magnify feature for mobile (press-and-hold to zoom tiles)",
      ],
    },
  },
];
