# Parohia Milano 2 - Website Management Guide

Acest document oferă instrucțiuni pentru actualizarea conținutului site-ului bisericaortodoxamilano2.com.

## 1. Gestionarea Imaginilor

Toate imaginile sunt stocate în folderul `/public/images/`. Pentru a înlocui o imagine, încărcați noua imagine în locația corespunzătoare, folosind exact același nume de fișier.

### Locații Imagini:
- **Slider Principal (Hero):** `/public/images/slider/` (încărcați până la 10 imagini numite `1.jpg`, `2.jpg`, etc.)
- **Activități și Proiecte (Carusele):** `/public/images/activities/`
  - **Pelerinaje:** `pelerinaje1.jpg`, `pelerinaje2.jpg`, `pelerinaje3.jpg`, `pelerinaje4.jpg`, `pelerinaje5.jpg`
  - **Tradiții:** `traditii1.jpg`, `traditii2.jpg`, `traditii3.jpg`, `traditii4.jpg`, `traditii5.jpg`
  - **Activități Copii:** `copii1.jpg`, `copii2.jpg`, `copii3.jpg`, `copii4.jpg`, `copii5.jpg`
- **Secțiunea Istoric:** `/public/images/history.jpg`
- **Program Slujbe (Imagine):** `/public/images/program.jpg`
- **Proiect Biserică Nouă:** `/public/images/proiect.jpg`
- **Galerie Media:** `/public/images/media/` (imagini numite `1.jpg`, `2.jpg`, etc.)

*Notă: Dacă o imagine lipsește, site-ul va afișa automat o imagine generică (placeholder).*

## 2. Actualizarea Datelor (Contact, Program, Știri)

Majoritatea textelor și datelor se află în fișierul `lib/data.ts`.

### Ce puteți edita în `lib/data.ts`:
- **contactData:** Adresa, telefonul preotului, email-ul, link-ul Google Maps.
- **historyData:** Paragrafele despre istoria parohiei (RO și IT).
- **programData:** Programul săptămânal și lunar.
- **projectsData:** Detalii despre proiectul bisericii noi.
- **newsData:** Articolele pentru Blog. Adăugați un obiect nou în listă pentru o știre nouă.
- **fivePerMilleData:** Informații despre redirecționarea a 5 la mie.

## 3. Traduceri Interfață

Textele butoanelor și meniurilor se află în `lib/translations.ts`. Dacă doriți să schimbați numele unui meniu, editați valoarea corespunzătoare pentru `ro` sau `it`.

## 4. Calendarul Theofania

Calendarul este preluat automat via iframe. Pentru a schimba parohia afișată, editați link-ul din `components/Program.tsx`.

## 5. Publicare pe GitHub și Cloudflare

### Push pe GitHub:
1. Creați un repository nou pe GitHub.
2. Inițializați git local: `git init`
3. Adăugați fișierele: `git add .`
4. Commit: `git commit -m "Initial commit"`
5. Conectați la GitHub: `git remote add origin [URL_REPOSITORY]`
6. Push: `git push -u origin main`

### Publicare pe Cloudflare Pages:
1. Conectați contul Cloudflare la GitHub.
2. Selectați repository-ul proiectului.
3. Setări Build:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
4. Adăugați variabila de mediu: `NODE_VERSION` = `20` (sau mai mare).
5. Deploy.

---
Site creat de **Vedendo.studio**
