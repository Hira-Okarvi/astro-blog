import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const statItem = z.object({
  value: z.string(),
  label: z.string().default(""),
});

const home = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string().default(""),
    intro: z.string().default(""),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    aboutTitle: z.string().default(""),
    aboutText: z.string().default(""),
    skills: z.array(z.string()).default([]),
    stats: z.array(statItem).default([]),
    highlights: z.array(statItem).default([]),
    services: z
      .array(
        z.object({
          icon: z.string().default(""),
          title: z.string(),
          description: z.string().default(""),
        })
      )
      .default([]),
    projects: z
      .array(
        z.object({
          title: z.string(),
          stack: z.string().default(""),
          category: z.string().default(""),
        })
      )
      .default([]),
    experience: z
      .array(
        z.object({
          time: z.string().default(""),
          title: z.string(),
          description: z.string().default(""),
        })
      )
      .default([]),
    ctaText: z.string().default("Let's Work Together"),
    ctaSub: z.string().default(""),
    ctaLink: z.string().default("/posts"),
  }),
});

const caseCategories = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string().default(""),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string().default(""),
    description: z.string().default(""),
    category: z.string().default(""),
    industry: z.string().default(""),
    technologies: z.array(z.string()).default([]),
    location: z.string().default(""),
    country: z.string().default(""),
    pubDatetime: z.date().optional(),
    draft: z.boolean().optional(),
    featuredImage: z.string().optional(),
    overview: z.string().default(""),
    challenges: z.string().default(""),
    deliverables: z.array(z.string()).default([]),
    conclusion: z.string().default(""),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, home, caseCategories, caseStudies };
