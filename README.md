# Portfolio di Federico

Portfolio React pubblicato su https://phadda94.github.io/.

## Sviluppo

- `npm ci`: installa le dipendenze.
- `npm start`: avvia il sito in locale.
- `npm run build`: genera il sito statico nella cartella `build`.

## Pubblicazione su GitHub Pages

Il codice sorgente rimane in `Phadda94/my-portfolio`; il sito alla radice deve essere pubblicato dal repository `Phadda94/Phadda94.github.io`.

1. Eseguire `npm run build`.
2. Copiare **il contenuto** di `build` nella radice del repository `Phadda94.github.io`, incluso `.nojekyll`. Non copiare la cartella build come sottocartella.
3. Conservare le cartelle delle demo: `forecast`, `Todo List`, `CaloriesCalculator`, `Comfy_Site`, `keyboardPiano`.
4. In Settings > Pages del repository di pubblicazione, selezionare il branch che contiene la build e la cartella `/ (root)`. Le modifiche attuali sono su `link-migration`: pubblicare questo branch oppure unirlo al branch di pubblicazione. Rimuovere un eventuale dominio personalizzato precedente.
5. Pubblicare le modifiche e verificare home, menu, CV e progetti.

La build contiene anche `skills/index.html`, `projects/index.html` e `about/index.html`: consentono l'accesso diretto e il refresh senza errori 404 su GitHub Pages. Include inoltre i reindirizzamenti dai vecchi indirizzi `/my-portfolio/` e dalle tre sezioni corrispondenti.

## Collegamenti della migrazione

I link alle cinque demo puntano alle cartelle presenti nel repository di pubblicazione. Horror WebGame collega Consumed su itch.io usando https://anvil-of-echoes.itch.io/consumed, fornito dal proprietario. Il footer collega i profili GitHub e LinkedIn di Federico. CV e certificati usano import locali gestiti dalla build.

Le modifiche al codice non aggiornano automaticamente il repository di pubblicazione.
