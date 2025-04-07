# **Projektdokumentation**

## **Space Venture**

**Navn:** Mathias Drægert Mose Andersen
**Klasse:** webith124
**Skole:** Viden Djurs
**Afleveringsdato:** 11/04/2025

---

"Jeg bekræfter hermed, at jeg selvstændigt og uden brug af AI og hjælp fra andre har udviklet det afleverede eksamensprojekt."

**Underskrift**
Mathias D. M. Andersen

**Dato:** 11/04/2025

---

## **Inholdsfortegnelse**

## **Tech Stack**

Projektet er udviklet med følgende teknologier:

- **Framework:** Next.js 15
  - Next.js er et React-baseret framework, der understøtter server-side rendering og statisk generering, hvilket giver bedre performance og SEO.
  <br />
  - Jeg har valgt Next.js, fordi det kombinerer fordelene ved React med avancerede funktioner som server-side rendering (SSR), static site generation (SSG) og API-routes. Det gør det muligt at bygge hurtige, SEO-venlige og dynamiske applikationer med minimal opsætning. Next.js’ indbyggede routing og billedoptimering forenkler udviklingsprocessen og forbedrer ydeevnen, hvilket gør det til et ideelt valg for moderne webapplikationer.
  <br />
- **Sprog:** TypeScript
  - TypeScript er en udvidelse af JavaScript, der tilføjer statisk typning for at forhindre fejl.
    <br />
  - Jeg har valgt TypeScript for at forbedre kodekvaliteten, gøre debugging lettere og sikre en mere robust udviklingsproces.
    <br />
- **Styling:** Tailwind CSS v4 & Framer Motion (Animationer)
  - Tailwind CSS er et utility-first CSS framework, der gør det hurtigt at bygge brugerflader uden at skrive meget custom CSS.
    <br />
  - Jeg har valgt Tailwind CSS på grund af dets fleksibilitet og den måde, hvorpå det muliggør hurtig og konsekvent styling med minimal kode.
    <br />
  - Framer Motion er et populært animationsbibliotek til React, der gør det nemt at tilføje komplekse animationer og bevægelser til brugergrænseflader. Det giver kraftfulde værktøjer til at skabe smidige og interaktive animationer med minimal konfiguration.
    <br />
  - Jeg har valgt Framer Motion, fordi det tilbyder en intuitiv API, der er let at implementere og giver mig mulighed for at skabe dynamiske og engagerende animationer, som forbedrer brugeroplevelsen på en enkel og effektiv måde.
<br />
- **Editor:** VS Code
  - VS Code er en populær og kraftfuld kodeeditor med mange udvidelser og indbygget support for TypeScript, JavaScript og React. Den har funktioner som IntelliSense, debugging, Git-integration og terminal, hvilket gør den velegnet til moderne udviklingsprojekter.
<br />
  - Jeg har valgt VS Code, fordi det giver en effektiv arbejdsgang med funktioner som automatisk kodeformatering, fejlsøgning og integration med Git. Det gør det nemt at arbejde med større projekter og holde styr på kodebasen.
<br />
- **Projektstyring:** GitHub Projects
  - GitHub Projects bruges til at organisere opgaver i et visuelt workflow baseret på kolonnerne "Todo", "Doing" og "Done". Det giver et godt overblik over projektets fremskridt og hjælper med at holde fokus på de vigtigste opgaver.
<br />
  - Jeg har valgt GitHub Projects, fordi det integrerer direkte med repositories og automatisk kan opdatere opgaver baseret på commits og pull requests. Det gør det nemt at følge projektets udvikling og sikrer, at alle ændringer dokumenteres.
<br />
- **Versionskontrol:** GitHub
  - GitHub er en platform til versionsstyring og samarbejde, der gør det muligt at spore ændringer, arbejde i branches og samarbejde effektivt. Det sikrer, at projektet altid kan rulles tilbage til tidligere versioner og hjælper med at håndtere konflikter i kodebasen.
<br />
  - Jeg har valgt GitHub, fordi det giver mulighed for cloud-baseret versionsstyring, nem backup og deling af projekter. Det understøtter teamsamarbejde og gør det muligt at arbejde parallelt uden risiko for at overskrive kode.
<br />

- **Ekstra Pakker:**
  - **Ikoner:** react-icons
    - React Icons er et populært bibliotek, der giver et udvalg af ikoner, som kan bruges i React-applikationer. Det tilbyder et fleksibelt og letvægtsalternativ til at integrere ikoner.
        <br />
    - Jeg har valgt react-icons, fordi det giver nem adgang til et stort udvalg af ikoner, som kan tilpasses nemt, og da det er let at integrere i Next.js-projekter uden at øge størrelsen på applikationen betydeligt.
        <br />
  - **WYSIWYG (What You See Is What You Get) Editor**: jodit react
    - Jodit er en open-source WYSIWYG editor, der tillader brugeren at redigere tekst og indhold visuelt, mens de ser resultatet med det samme. Den er let at integrere og konfigureres hurtigt i React-applikationer.
        <br />
    - Jeg har valgt jodit-react, da den tilbyder en simpel og effektiv editor, der kan tilpasses og integreres nemt i min applikation uden at introducere unødvendig kompleksitet.
        <br />
  - **Klasses Manipulation:** clsx
    - clsx er et lille og effektivt bibliotek, der bruges til at tilføje eller fjerne CSS-klasser dynamisk, baseret på betingelser. Det er især nyttigt, når du arbejder med Tailwind CSS, da det gør det lettere at håndtere klasser på en simpel og effektiv måde.
        <br />
    - Jeg har valgt clsx, fordi det giver en nem måde at håndtere klasser på og gør koden mere læsbar, især når der er behov for betinget klasser i React-applikationer.
        <br />
  - **Tailwind CSS Klassesammenfletning:** tailwind-merge
    - tailwind-merge er et bibliotek, der hjælper med at sikre korrekt sammensætning af Tailwind CSS-klasser, ved at håndtere konflikter og prioritere de rigtige klasser. Det er en praktisk løsning, når man arbejder med Tailwind CSS i dynamiske miljøer.
        <br />
    - Jeg har valgt tailwind-merge, da det gør arbejdet med Tailwind CSS meget lettere, når der er behov for at kombinere flere klasser uden at bekymre sig om konflikt eller rækkefølge.

---

## **Tidsplan og Projektstyring**

Jeg har struktureret projektet med en Scrum-inspireret tilgang, hvor jeg har opdelt opgaverne i mindre opgaver og fulgt en **Todo-Doing-Done** metode via **GitHub Projects**.

| Dag         | Opgaver                                                                      | Estimeret Tid | Reel Tid | Status (✗/✓) |
| ----------- | ---------------------------------------------------------------------------- | ------------- | -------- | ------------ |
| **Mandag**  | **Opsætning af repo & tech-stack**                                           | 3 timer       | 1 time og 40 minuter      |              |
|             | - Opret repo i GitHub eller GitLab                                           | 30 minutter   | 10 minutter      | [✓]          |
|             | - Opsæt projektstruktur (Next.js, Tailwind CSS, etc.)                        | 1 time        | 1 time      | [✓]          |
|             | - Installer nødvendige afhængigheder (clsx, tailwind-merge, etc.)            | 30 minutter   | 10 minutter      | [✓]          |
|             | - Konfigurér linters og formattering (f.eks. Biome)                          | 30 minutter   | 10 minutter      | [✓]          |
|             | - Opsæt version control og commit-struktur                                   | 30 minutter   | 10 minutter      | [✓]          |
| **Tirsdag** | **Design & UI-komponenter**                                                  | 4 timer       | [ ]      |              |
|             | - Byg generelle layoutkomponenter (Header, Footer, Layout-container)         | 2 timer       | [ ]      | [✗]          |
|             | - Design og implementer brugerinteraktionskomponenter (Buttons, Inputs)      | 1 time        | [ ]      | [✗]          |
|             | - Opsæt Tailwind CSS konfiguration og responsive design                      | 1 time        | [ ]      | [✗]          |
| **Onsdag**  | **Funktionalitet & API-integration**                                         | 6 timer       | [ ]      |              |
|             | - Implementer API-anmodninger (f.eks. GET, POST)                             | 2 timer       | [ ]      | [✗]          |
|             | - Byg funktioner til at håndtere svar fra API (data parsing, error-handling) | 1 time        | [ ]      | [✗]          |
|             | - Implementer state management (f.eks. React Context, useState)              | 1 time        | [ ]      | [✗]          |
|             | - Byg UI-komponenter til at vise API-data                                    | 1 time        | [ ]      | [✗]          |
|             | - Implementer formularer og validering                                       | 1 time        | [ ]      | [✗]          |
| **Torsdag** | **Testing & optimering**                                                     | 4 timer       | [ ]      |              |
|             | - Test komponenter med Jest eller React Testing Library                      | 1 time        | [ ]      | [✗]          |
|             | - Optimer komponentrendering (f.eks. memoization, lazy loading)              | 1 time        | [ ]      | [✗]          |
|             | - Cross-browser testing og mobile testing                                    | 1 time        | [ ]      | [✗]          |
|             | - Performance-tuning og fejlfinding                                          | 1 time        | [ ]      | [✗]          |
| **Fredag**  | **Dokumentation & aflevering**                                               | 2 timer       | [ ]      |              |
|             | - Skriv README.md med installation, opsætning og brug                        | 1 time        | [ ]      | [✗]          |
|             | - Dokumenter API- og komponentbeskrivelser                                   | 30 minutter   | [ ]      | [✗]          |
|             | - Tjek for sidste fejl og afgiv projektet                                    | 30 minutter   | [ ]      | [✗]          |


---

## **Valg og Overvejelser**

### **Komponentstruktur**

- Implementeret **genanvendelige UI-komponenter** for bedre kodeorganisation.
- Brugt **lazy loading** på tunge komponenter for bedre performance.

### **API & Datahåndtering**

- **Fetcher data med Next.js' indbyggede fetch:**
  Next.js' indbyggede `fetch`-funktion er en del af platformens API, som giver en enkel og effektiv måde at hente data på fra både serveren og klienten. Jeg har valgt at bruge `fetch`, da det giver mig mulighed for nemt at hente og manipulere data, samtidig med at det optimerer applikationens performance, især ved server-side rendering (SSR). Denne tilgang gør, at data bliver hentet effektivt og kan vises hurtigt uden at påvirke brugeroplevelsen negativt.
<br />
- **Manuel validering af formularer uden biblioteker:**
  Jeg har valgt at implementere manuel formularvalidering uden at bruge eksterne biblioteker for at have fuld kontrol over logikken og fleksibiliteten i, hvordan formulardata bliver valideret. Denne tilgang giver mig mulighed for at skræddersy valideringen præcist efter behov og undgå afhængighed af eksterne pakker, som kan øge kompleksiteten eller reducere performance. Jeg kan implementere valideringsreglerne direkte i komponenterne og tilpasse dem efter specifikke krav.
<br />
- **Implementeret debounce på søgning for at reducere API-kald:**
  For at optimere søgefunktionen og reducere antallet af API-kald har jeg implementeret en **debounce**-funktion. Debounce forsinker opkaldet til API'et, indtil brugeren stopper med at skrive i søgefeltet i et forudbestemt tidsinterval. Dette reducerer antallet af unødvendige kald til serveren og forbedrer applikationens performance, især ved langvarige eller dyre API-kald, og sikrer samtidig, at brugeroplevelsen forbliver smidig og hurtig.

## **Eksterne Ressourcer**

Her er en liste over eksterne kodeelementer, der er anvendt:



## **Deployment & Test**

- Projektet er hostet på **Vercel**.
- Testet i **Brave, Chrome og Edge**.
- Responsivitet testet via **DevTools & Lighthouse**.

**GitHub Repository:** [github.com/SilentWolf6662/frontend-exam](https://github.com/SilentWolf6662/frontend-exam)

## **Perspektivering & Fremtidige Versioner**

For fremtidige versioner kan følgende tilføjes:

- **Forbedret Accessibility** med bl.a. forbedret
- **Brugerautentifikation** via ekstern service some eksempelvis Supabase eller Firebase
- **Forbedret SEO** med Next.js metadata optimering

## **Bilag**

- Projekt Håndtering: [SilentWolf6662/frontend-exam](https://github.com/SilentWolf6662/frontend-exam)
- [Wireframes]
- [Eventuelle ekstra kodeuddrag]

---

**Tak fordi du læste min dokumentation!** 🎉
