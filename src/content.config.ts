import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dispatch = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dispatch" }),
  schema: z.object({
    title: z.string(),
    vol: z.number(),
    issue: z.number(),
    date: z.string(),
    lede: z.string(),
    heroPhoto: z.string(),
    heroAlt: z.string(),
    heroCaption: z.string(),
  }),
});

export const collections = { dispatch };
