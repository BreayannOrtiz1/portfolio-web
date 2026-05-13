import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// ── Blog Collection (existing) ──────────────────────────────
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

// ── Projects Collection ─────────────────────────────────────
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,yaml,yml}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string(),                        // e.g. "ECOPETROL"
			description: z.string(),
			longDescription: z.string().optional(),
			tags: z.array(z.string()),                 // ["LoRaWAN", "ESP32", "Azure"]
			year: z.number(),
			featured: z.boolean().default(false),
			image: z.optional(image()),
			metrics: z.array(z.object({               // e.g. { value: "61", label: "Deployed stations" }
				value: z.string(),
				label: z.string(),
			})).optional(),
			links: z.object({
				demo: z.string().url().optional(),
				repo: z.string().url().optional(),
			}).optional(),
		}),
});

// ── Experience Collection ───────────────────────────────────
const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,yaml,yml}' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		type: z.enum(['full-time', 'contract', 'freelance', 'academic']).default('full-time'),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),          // omit for current position
		current: z.boolean().default(false),
		location: z.string(),
		description: z.string(),
		achievements: z.array(z.string()),
		technologies: z.array(z.string()),
		order: z.number().default(0),                 // for manual sort control
	}),
});

export const collections = { blog, projects, experience };
