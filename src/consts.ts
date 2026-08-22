import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Eugene Shilnikov",
  EMAIL: "hi@shilnikov.ai",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Eugene Shilnikov — product leader in payments and fintech, Dubai. Writing about product, AI agents and personal systems.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on product, AI agents and personal systems",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Personal projects with links to repositories and demos",
};

export const SOCIALS: Socials = [
  {
    NAME: "telegram",
    HREF: "https://t.me/shilnikov_ai",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/eugene-shilnikov/",
  },
];
