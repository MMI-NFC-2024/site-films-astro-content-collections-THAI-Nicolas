import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const personnes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/personnes" }),
  schema: ({ image }) =>
    z.object({
      nom: z.string(),
      dateNaissance: z.date(),
      image: image().optional(),
      lieu_naissance: z.string().min(2).optional(),
      date_mort: z.date().optional(),
      professions: z.array(
        z
          .enum(["Acteur", "Réalisateur", "Producteur", "Scénariste"])
          .optional(),
      ),
    }),
});

const films = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/films" }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      dateSortie: z.date(),
      affiche: image().optional(),
      genre: z.array(
        z.enum(["Action", "Comédie", "Drame", "Horreur", "Science-Fiction"]),
      ),
      pays: z.string().min(2).optional(),
    }),
});

export const collections = { personnes, films };
