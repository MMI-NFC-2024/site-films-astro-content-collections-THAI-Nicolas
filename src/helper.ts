const formatFR = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
});

export function formatDate(date: Date) {
  return formatFR.format(date);
}

export function calculateAge(dateOfBirthIso: Date) {
  const birthDate = new Date(dateOfBirthIso);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

// ...existing code...

/**
 * Joint une liste de mots avec des virgules et "et" avant le dernier élément.
 * Ex: ["Acteur", "Réalisateur"] => "Acteur et Réalisateur"
 * Ex: ["Acteur", "Réalisateur", "Producteur"] => "Acteur, Réalisateur et Producteur"
 */
export function joinWithAnd(items: string[]): string {
  if (!items || items.length === 0) return "";
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(", ") + " et " + items[items.length - 1];
}

export const regionNames = new Intl.DisplayNames(["fr"], { type: "region" });

export function getRegionName(regionCode: string): string {
  return regionNames.of(regionCode) || regionCode;
}

// Liste des professions autorisées
export const PROFESSIONS_VALIDES = [
  "Acteur",
  "Réalisateur",
  "Producteur",
  "Scénariste",
] as const;

/**
 * Filtre une liste de professions pour ne garder que les professions valides
 */
export function filterValidProfessions(items: string[]): string[] {
  if (!items || items.length === 0) return [];
  return items.filter((item) =>
    PROFESSIONS_VALIDES.includes(item as (typeof PROFESSIONS_VALIDES)[number]),
  );
}

// I <3 You Nicolas <3 :)
