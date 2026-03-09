export const siteContent = {
  header: { siteName: "Matt's All Folks!", authorName: "Matthew R. Morlan" },
  hero: {
    badge: "Front-End Developer & Product Manager | Chicago, IL",
    heading: {
      before: "I write clean code, ",
      br1: true,
      mid: " ask the right questions,",
      br2: true,
      after: "and ship work I'm ",
      em: "proud",
      end: " of.",
    },
    bio: "Hi I'm Matt! I'm a front-end developer who thinks like a PM and is a sucker for a good pun. My day-to-day is React, TypeScript, and modern CSS building interfaces that are fast, scalable, and maintainable. But I've spent enough time leading discovery sessions, writing requirements, and presenting to stakeholders to understand that good code is only half the job. I care about what gets built just as much as how it gets built.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
  },
  brands: { label: "Brands I've shipped for" },
  work: { heading: "Selected work", subheading: "A few things I'm proud of." },
  footer: { prefix: "Made by Matt", email: "mattrmorlan@gmail.com", year: "2026" },
};

export const projects = [
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
