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

const home = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string().default(""),
    intro: z.string().default(""),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    skills: z.array(z.string()).default([]),
    ctaText: z.string().default("View My Work"),
    ctaLink: z.string().default("/posts"),
  }),
});

export const collections = { blog, home };
