import { z } from "zod";

const baseSchema = z.object({
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  title: z.string({
    required_error: "Required frontmatter missing: title",
    invalid_type_error: "title must be a string",
  }),
});

/*
  Blog posts could be of two types —
  1. The posts you write in markdown files in content/blog/*.md
  2. External posts in other websites

  That's why the frontmatter schema for blog posts is one of the two possible types.
  If you don't want to link posts written in external websites, you could
  simplify this to just use the markdown schema.
*/
export const chapter = baseSchema.extend({
  chapter: z.number().int().positive(),
  wip: z.optional(z.boolean().default(false)),
  description: z.optional(z.string()),
  ogImagePath: z.optional(z.string()),
  canonicalUrl: z.optional(z.string()),
});
