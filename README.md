
# Formazione Sicurezza sul Lavoro Quiz

Applicazione web interattiva per la formazione sulla sicurezza nei luoghi di lavoro, conforme al D.Lgs. 81/2008. Il corso è pensato per lavoratori e aziende che desiderano formarsi o aggiornarsi sulle principali tematiche di prevenzione, ruoli e responsabilità, dispositivi di protezione e normativa vigente.

## Descrizione del Corso

Il corso si compone di tre moduli didattici e un test finale:

- **Modulo 1: Rischio, Prevenzione e Organizzazione Aziendale**  
   Concetti di pericolo, rischio, danno, percezione del rischio e organizzazione della prevenzione in azienda.
- **Modulo 2: I Soggetti della Sicurezza e i Loro Ruoli**  
   Ruoli, responsabilità e obblighi di datore di lavoro, dirigenti, preposti, lavoratori, RSPP, medico competente e altre figure chiave.
- **Modulo 3: Protezione, Vigilanza e Formazione Continua**  
   Dispositivi di Protezione Individuale (DPI), vigilanza, sanzioni e importanza della formazione continua.
- **Test Finale**  
   Quiz interattivo per la verifica delle conoscenze acquisite.

## Struttura del Progetto

- `App.tsx`, `index.tsx`, `index.html`: entrypoint e bootstrap dell'applicazione
- `components/`: componenti React per i moduli, sidebar, test e sezioni condivise
- `types.ts`: definizione dei tipi TypeScript (es. struttura delle domande quiz)
- `metadata.json`: metadati e descrizione del corso
- `vite.config.ts`, `tsconfig.json`, `package.json`: configurazione build e dipendenze

## Come eseguire il corso in locale

**Prerequisiti:** Node.js

1. Installa le dipendenze:
    ```bash
    npm install
    ```
2. Imposta la variabile `GEMINI_API_KEY` nel file `.env.local` (se richiesto)
3. Avvia l'applicazione:
    ```bash
    npm run dev
    ```
4. Apri il browser su [http://localhost:5173](http://localhost:5173)

## Note

- Il corso è pensato per la formazione base sulla sicurezza secondo la normativa italiana.
- Tutti i contenuti sono a scopo didattico e non sostituiscono la formazione obbligatoria certificata.

---
© 2025 Formazione Sicurezza sul Lavoro Quiz
