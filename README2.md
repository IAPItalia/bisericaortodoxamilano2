# Ghid de Publicare: GitHub și Cloudflare Pages

Acest ghid vă ajută să publicați site-ul `bisericaortodoxamilano2.com` folosind GitHub și Cloudflare Pages (metoda recomandată pentru Next.js).

## 1. Pregătirea Codului (Rezolvare Eroare)

Eroarea pe care ați întâlnit-o (`Service binding 'WORKER_SELF_REFERENCE' references Worker 'ai-studio-applet' which was not found`) a fost cauzată de o neconcordanță între numele proiectului din `package.json` și numele worker-ului din Cloudflare.

**Ce am făcut deja:**
- Am actualizat `"name": "bisericaortodoxamilano2"` în `package.json`.
- Acest lucru va asigura că Cloudflare recunoaște corect proiectul în timpul procesului de build.

---

## 2. Pasul 1: GitHub (Încărcarea Codului)

Dacă nu ați făcut-o deja, trebuie să încărcați codul pe GitHub:

1. Mergeți pe [GitHub](https://github.com/) și creați un repository nou (poate fi **Private**).
2. În terminalul local (sau în editorul de cod), rulați:
   ```bash
   git init
   git add .
   git commit -m "Pregătire pentru Cloudflare"
   git branch -M main
   git remote add origin https://github.com/UTILIZATORUL_TAU/NUME_REPO.git
   git push -u origin main
   ```

---

## 3. Pasul 2: Cloudflare Pages (Publicarea Site-ului)

Cea mai sigură metodă pentru Next.js 15+ este să folosiți integrarea directă din dashboard-ul Cloudflare:

1. Intrați în **Cloudflare Dashboard** -> **Workers & Pages**.
2. Apăsați pe **Create** -> **Pages** -> **Connect to Git**.
3. Selectați repository-ul de pe GitHub.
4. În secțiunea **Build settings**, configurați astfel:
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @opennextjs/cloudflare build`
   - **Build output directory:** `.open-next`
5. În secțiunea **Environment variables (Advanced)**, adăugați:
   - `NODE_VERSION` = `20`
   - `NEXTJS_APP_NAME` = `bisericaortodoxamilano2`
6. Apăsați pe **Save and Deploy**.

---

## 4. De ce a apărut eroarea? (Explicație Tehnică)

Cloudflare folosește un adaptor numit `OpenNext` pentru a rula Next.js. Acest adaptor are nevoie de o „legătură” (binding) către el însuși pentru a gestiona optimizarea imaginilor și revalidarea paginilor. 

Dacă în `package.json` numele era `ai-studio-applet`, adaptorul încerca să creeze o legătură către un worker care nu exista în contul dumneavoastră. Prin schimbarea numelui în `bisericaortodoxamilano2`, totul ar trebui să funcționeze acum la următorul deploy.

---

## 5. Verificare Finală

După ce deploy-ul se termină cu succes:
1. Verificați dacă link-ul `.pages.dev` funcționează.
2. Adăugați domeniul personal (`bisericaortodoxamilano2.com`) în tab-ul **Custom domains** din setările proiectului în Cloudflare.

---
Creat de **Vedendo.studio**
