---
layout: "../layouts/MarkdownLayout.astro"
titre: Mon super CV
---

<div class="border-2">
![Image](/src/assets/photo-profil-serieuse.jpg)
</div>
# Nicolas THAI — **Développeur React Cross-Platform**

- **Localisation** : Lyon, France
- **Email** : [nicolas.thai@example.com](mailto:nicolas.thai@example.com)
- **Téléphone** : +33 6 12 34 56 78
- **LinkedIn** : [linkedin.com/in/nicolastthai](https://linkedin.com/in/nicolastthai)

> Développeur front‑end spécialisé en **React** et technologies _cross‑platform_ (React Native / Expo, Electron). 6 ans d'expérience dans la conception d'applications performantes et maintenables pour le web et le mobile.

---

## Résumé

Passionné par la qualité du code et l'expérience utilisateur, j'aime transformer des besoins produits en interfaces simples et robustes. Habitué aux workflows CI/CD, à l'écriture de tests et à l'architecture de composants réutilisables.

## Compétences techniques (exemples)

| Domaine  | Outils / Langages                           |          Niveau |
| -------- | ------------------------------------------- | --------------: |
| Frontend | `React`, `React Native`, `Expo`, `Electron` |      **Avancé** |
| Langages | `JavaScript` (ES6+), `TypeScript`           |      **Avancé** |
| Styling  | Tailwind CSS, Styled Components             | _Intermédiaire_ |
| Tests    | Jest, React Testing Library, Detox          | _Intermédiaire_ |

## Expérience professionnelle

**2021 — Aujourd'hui** — Lead Front-End Engineer — _Studio AppWorks_ (factice)

- Conception d'une application mobile cross‑platform (React Native / Expo) avec OTA releases.
- Mise en place d'une pipeline CI/CD (GitHub Actions) et stratégies de tests automatisés.

**2019 — 2021** — Développeur Front‑End — Freelance

- Réalisations : applications e‑commerce, outils internes (Electron + React).
- Amélioration de la qualité : tests unitaires, revue de code, documentations.

## Projets représentatifs

- **MyShop Mobile** — React Native / Expo
  - Fonctionnalités : panier hors‑ligne, synchronisation, notifications push.
  - Démonstration : [myshop.example.com](https://example.com) (factice)

- **DeskAgent** — Electron + React
  - Application desktop pour support client, chat intégré, chiffrement local.

## Extrait de code

Voici un petit hook réutilisable en React (exemple) :

```js
import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  return { count, increment };
}
```

## Disponibilité

- [x] Disponible pour missions freelance
- [ ] Ouvert aux propositions CDI

## Formation & certifications

- **Master Informatique** — Université Lyon 1 (2016)
- _Certification React avancée_ — formation interne (factice)

## Langues

- Français — langue maternelle
- Anglais — professionnel

---

_Centres d'intérêt_ : veille technologique, contributions open‑source, randonnée, photographie.
