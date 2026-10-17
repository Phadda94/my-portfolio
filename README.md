# Portfolio di Federico

Portfolio React pubblicato su https://phadda94.github.io/.

## Sviluppo

- `npm ci`: installa le dipendenze.
- `npm start`: avvia il sito in locale.
- `npm run build`: genera il sito statico nella cartella `build`, con gli ingressi diretti per le sezioni e i reindirizzamenti dai vecchi URL.

## Pubblicazione su GitHub Pages

Il codice sorgente e il sito pubblicato sono due repository separate:

- Sorgenti React: `Phadda94/my-portfolio`.
- Sito e demo: `Phadda94/Phadda94.github.io`.

Dopo aver controllato la build:

1. Copiare il contenuto di `build` nella radice della repository `Phadda94.github.io`, incluso `.nojekyll`. Non copiare `build` come sottocartella.
2. Conservare le cartelle delle demo esistenti: `forecast`, `Todo List`, `CaloriesCalculator`, `Comfy_Site` e `keyboardPiano`.
3. Nella repository del sito, salvare le modifiche e inviarle al branch `main`.
4. In Settings > Pages, pubblicare dal branch `main` e dalla cartella `/ (root)`.

Il build script crea `skills/index.html`, `projects/index.html` e `about/index.html` per l'accesso diretto e il refresh. Crea inoltre reindirizzamenti dai vecchi percorsi `/my-portfolio/` e dalle relative sezioni.

I link delle demo puntano alle cartelle presenti nel repository del sito. Horror WebGame apre Consumed su itch.io. CV e certificati sono importati dal progetto e inclusi nella build.
