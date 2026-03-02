# Push su Git e deploy su Vercel

## 1. Crea il repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. Nome repo (es. `test-salone-estetista` o `cristina-ionescu-site`)
3. **Non** inizializzare con README (il progetto esiste già)
4. Clicca **Create repository**

## 2. Collega il progetto e fai push

Nella cartella del progetto esegui (sostituisci `TUO-USER` e `NOME-REPO` con i tuoi):

```bash
git remote add origin https://github.com/TUO-USER/NOME-REPO.git
git push -u origin main
```

Se usi SSH:

```bash
git remote add origin git@github.com:TUO-USER/NOME-REPO.git
git push -u origin main
```

## 3. Deploy su Vercel

### Opzione A – Da sito Vercel (consigliata)

1. Vai su [vercel.com](https://vercel.com) e accedi (anche con GitHub)
2. **Add New** → **Project**
3. **Import** il repository GitHub che hai appena pushato
4. Vercel rileva automaticamente Next.js; conferma **Root Directory** e **Build Command** (lascia default)
5. Clicca **Deploy**

Dopo il deploy avrai un URL tipo `tuo-progetto.vercel.app`. Ogni push su `main` farà un nuovo deploy automatico.

### Opzione B – Da terminale

```bash
npx vercel
```

Segui le domande (login se serve, link al repo o deploy dalla cartella corrente). Per produzione:

```bash
npx vercel --prod
```

---

**Nota:** Il progetto è già pronto per Vercel (Next.js, nessuna variabile d’ambiente obbligatoria). Se aggiungi `.env` in futuro, configurale in **Vercel → Project → Settings → Environment Variables**.
