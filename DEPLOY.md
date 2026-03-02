# Push su Git e deploy su Vercel

**Repo:** [github.com/yushueng/cristinaionescu](https://github.com/yushueng/cristinaionescu)  
**Progetto:** CristinaIonescu (cartella `CristinaIonescu`)

## 1. Push su GitHub

Il remote `origin` è già configurato. Dalla cartella del progetto:

```bash
cd /Users/yushuengwu/CristinaIonescu
git push -u origin main
```

Se il repo su GitHub è vuoto e non ha ancora un branch `main`, la prima push creerà il branch. Se GitHub ti chiede di creare prima il repo, crealo con nome **cristinaionescu** (senza README), poi ripeti il push.

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
