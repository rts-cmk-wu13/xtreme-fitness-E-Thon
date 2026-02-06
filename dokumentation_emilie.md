# Projektdokumentation - XTREME FITNESS - Emilie

**Skole og uddannelse:** Roskilde Tekniske Skole, Webudvikler  
**Hold:** WU13  
**Opgave:** Xtreme Fitness, svendeprøve  
**Elev:** Emilie Malene Thon (U2507994)  
**Dato:** februar 2026  
**URL til GitHub repository:** https://github.com/rts-cmk-wu13/xtreme-fitness-E-Thon

---

## Information til brug i opgaven

Kør følgende kommando i terminalen for at starte serverne:

```bash
npm run dev
```

**Lokal URL til XTREME FITNESS:** http://localhost:3000  
**Lokal URL til XTREME FITNESS API:** http://localhost:4000  

### Brug til login

**Email:** e@em.dk  
**Password:** emilie  

---

## Tech-stack og valget af brugen

### Next.js

Jeg benytter Next.js som mit overordnede framework, der bygger ovenpå React. Fordelene ved at bruge Next.js er, at der heri er indbygget routing i form af filbaseret routing, som automatisk oprettes ud fra mappestrukturen. Ved brug af Next.js undgår jeg dermed React Router, som hurtigt bliver uoverskuelig samt kræver mere kode for at kunne håndtere de samme ting som Next.js kan.

Next.js kan rendere direkte på serveren (Server-Side Rendering, SSR), hvilket giver en bedre performance i form af hurtigere load og bedre SEO, da Google bedre kan læse siderne. I Next.js er backend indbygget, hvor man kan lave API-ruter, hente data direkte fra serveren og arbejde med databaser i ens projekt.

Foruden dette sikrer Next.js, at billeder og fonte bliver automatisk optimeret, der skabes en smartere data-fetching og caching, hvilket resulterer i mindre JavaScript i browseren og dermed hurtigere webapps.

Jeg benytter mig af ISR (Incremental Static Regeneration) til flere ting:

- Til at genopbygge kommentarer til blogindlæg med det samme efter tilføjelsen  
- Til at opdatere blogindlæg, abonnementer, reviews m.m. med et tidsinterval for at skabe mindre trafik på serveren  

### React

Jeg bruger React i mit projekt, da det er meget velegnet til dynamiske brugergrænseflader gennem komponenter, som gør, at man lettere kan anvende koden flere steder i projektet og på den måde undgå yderligere gentagelse. Dette er *good practice* inden for kodning. React er et bibliotek, som danner grundlaget for Next.js, og de er derfor gode at benytte sammen.

### TypeScript

Jeg benytter TypeScript i mit projekt, da dette fanger typefejl allerede i kodningsprocessen, hvorved man lettere kan identificere mulige fejl, der ellers kunne skabe komplikationer i webapplikationen og være sværere at opdage senere.

### Sass / SCSS

Jeg benytter mig af SCSS (Sass)-syntaksen, da den giver mig mulighed for at skabe variabler, placeholders, mixins og nesting i min styling. Dette gør det lettere at skabe en overordnet styling, som let kan genbruges og rettes over hele siden ved blot at rette i de foruddefinerede definitioner.

### Zod

Jeg bruger Zod til validering af formularer for at sikre, at data har den rigtige struktur gennem de definerede schemas. Zod har samtidig RegEx-validering, der tjekker strukturen på e-mailadresser og tager højde for specialtegn som f.eks. æ, ø og å.

---

## Kodeelementer udarbejdet af 3. part

### React Icons

Jeg benytter React Icons, da de er nemme at bruge gennem en npm-installation. Der er et stort ikonbibliotek, hvilket gør det nemt at finde passende ikoner til brug i koden. Derudover kan React Icons styles, da de er SVG-baserede.

### Embla Carousel

Jeg benytter Embla Carousel i mit projekt, da det giver en let og clean implementering af carousel-funktionalitet uden at skulle udvikle al scroll- og swipe-logik fra bunden. Samtidig er det stadig let at kontrollere stylingen, og det kan derfor nemt tilpasses uden at funktionaliteten går i stykker.

### ReactPlayer

Jeg benytter ReactPlayer i mit projekt, da det er nemt at integrerer da det kan afspille forskellige typer i forskelligt format. Samtidig modtager ReactPlayer forskellige props, som gør det muligt selv at styre fx afspilningen, pause, mute osv. 

---

## Valg truffet under opgaveløsningen

### Ændring af sproget

Jeg har valgt at ændre sidens indhold til at være på engelsk hele vejen igennem (med undtagelse af udtalelser og blog, da dette er private personers egne ord). Dette er gjort for at skabe en mere international løsning, som giver bedre forudsætninger for oversættelse, da de fleste oversættelsesværktøjer er bedst egnet til engelsk. Derudover giver det en mere konsistent kodebase, da kodesproget generelt foregår på engelsk.

### Ændring i API’et

Under oprettelsen af en ny bruger/medlem stødte jeg på et problem med at få sendt data vedrørende det medlemskab, den pågældende bruger havde valgt. Dette skyldtes, at `membershipId: true` manglede i backend-API’et under authorization ved registrering af ny bruger.

Jeg har derfor valgt at lave en ændring i API’et, så koden ser således ud:

```ts
auth.post(
  "/register",
  zValidator(
    "json",
    userSchema.pick({
      name: true,
      email: true,
      membershipId: true,
      password: true,
    }),
    (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error }, 400);
      }
    }
  ),
  async (c) => {
    const body = await c.req.valid("json");
    const user = await createUser(body);
    return c.json(user, 201);
  }
);
```
### Placering og design af tilmelding til nyhedsbrevet

Jeg har valgt at placere mit nyhedsbres komponent (newsletter-signup) både på forsiden og under about. Dette føler jeg er relevant, da al vigtig information er at finde på forsiden foruden det, at et nyhedsbrev også giver information om fitness koncernen. 

---

## Tilvalgsopgaver

Jeg har valgt at løse følgende tilvalgsopgaver:

2. Blog – kommentarer  
3. Holdtilmelding 

---

## Ekstra

Jeg har valgt at tilføje en side, som ikke var en del af Figma-designet, men som var en del af navigationen. Siden det omhandler er **Contact**, som er lavet med et simpelt design, der følger det generelle Figma-design.

---

## Særlige punkter til bedømmelse

Jeg er gået meget op i at skabe komponenter, som kan genbruges i andre komponenter, for at opnå genanvendelig kode, der også kan benyttes på tværs af `use server` og `use client`. Komponenterne bliver kaldt de steder, hvor de skal bruges.

På samme måde har jeg skabt styling, som nemt kan tilføjes på de forskellige komponenter, hvilket gør det lettere at tilføje flere komponenter og elementer, hvor stylingen bliver påført direkte, og der kun skal tilføjes mindre ændringer efter behov.

### Relevante filer

- `app/style/placeholders/_buttons.scss`
- `app/_components/buttons/Buttons.tsx`
- `app/_components/buttons/_Buttons.scss`

---

## Uddrag af kodeeksempler

### `app/_components/_blog-card/BlogCard.tsx`

```tsx
import Image from "next/image";
import "./_BlogComponent.scss";
import Link from "next/link";

interface BlogCard {
  id: number;
  title: string;
  teaser: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  asset: Asset;
}

interface Asset {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export default function BlogCard({ posts }: { posts: BlogCard[] }) {
  return (
    <section className="blog">
      {posts.map((post) => (
          <article className="blog__card" key={post.id}>
            <div className="blog__image">
              <Image
                src={post.asset.url}
                alt={post.asset.altText}
                width={post.asset.width}
                height={post.asset.height}
                unoptimized
                className="image"
              />
              <p className="blog__date">
                <span className="blog__month">
                  {new Date(post.updatedAt).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
                {new Date(post.updatedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="blog__text">
              <h3 className="blog__h3">{post.title}</h3>
              <p className="blog__teaser">{post.teaser}</p>
              <Link href={`/blog/${post.id}`} className="button">
                Read more
              </Link>
            </div>
          </article>
        ))}
    </section>
  );
}
```

Ovenfor ses min BlogCard komponent, som jeg har udvalgt til yderligere forklaring. Komponenten viser en liste af blogindlæg som cards, hvor hvert card indeholder et billede, en dato, en titel, en teasertekst og et link der fører brugeren til det dertilhørende blogindlæg.

Imports i toppen: 
Image, for at benytte det predefinerede Image element gennem Next.js. 
`./_BlogComponent.scss`, som er det separate styling sheet, som kun benyttes på denne komponent. 
Link fra Next.js, som bruges til intern navigation uden at skulle reloade siden.

Interface er Typescript, som benyttes til at definere typerne der benyttes i komponenten, BlogCard. Der er her id, som er af typen ”number”, og de resterende, som er af typen ”string”. Asset er defineret separat, som svarer til billeddataens typer, der benyttes i BlogCard. Disse typer er defineret på baggrund af de data jeg får ind fra API’et vedr. blogindlæggene. 

Jeg skaber en komponent, BlogCard, som kan eksporteres, og som tager én prop, posts. Denne prop er et array af blogindlæg. 

Return er det, som sendes til rendering i browseren ved implementering af komponenten. Jeg laver heri en section, hvori jeg laver en .map, som looper over posts (den prop der benyttes i komponenten). Dette returnerer det antal af blogindlæg, som der findes i array vi senere fetcher fra. Der kunne her skabes et .slice(0, 3) før .map, så der kun vises tre blogindlæg, men da der kun er tre i API’et er dette ikke nødvendigt her. Der skabes et blokkort for hvert blogindlæg, som vi refererer til med ”post” (læg mærke til ental da dette illustrerer, at det er hvert enkelt indlæg, som får den efterfølgende struktur). For hver article, med det enkle blogindlæg,  laves en key, som bliver det individuelle id for indlægget, som React benytter til rendering. 

I Image elementet, tilføjes her {post.asset.*} er et objekt, der indeholder billeddata til blogindlægget, som benyttes til at skabe billedsti, src, alt text, alt, bredde, width, og højde, height, på billedet. Da billede stien kommer fra en ekstern kilde, bruges unoptimized, da ikke alle understøtter Next.js optimeringen af billeder. 

I API’et kommet datoen som en streng af følgende format: "2026-02-04T10:00:00Z". For at kunne formaterer denne streng, benyttes new Date, som laver det til et JavaScript Date-objekt, som gør det muligt at hente dato informationerne ud. F.eks. console.log(new Date("2026-02-04T10:30:00Z").getFullYear()) giver 2026. .toLocaleDateString('en-US') laver det om til en string svarende til engelsk i USA.  { month: 'short' } giver os måneden som kort version, f.eks. februar bliver til Feb. Efterfølgende gøres det samme men for dagens dato. 

For tekstindholdet i blogindlægget henter vi titlen og en den lille teaser, som API’et sender retur. 

Linket navigerer til blogsiden med det dertilhørende id for det tilsvarende blogindlæg. 

Der hvor komponenten importeres, bliver blogindlæggene fetched, og benyttes som de props der sendes ned i komponenten. 