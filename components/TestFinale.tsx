
import React, { useState, useEffect } from 'react';
import type { Question } from '../types';
import QuestionCard from './shared/QuestionCard';

const questions: Question[] = [
  {
    "id": 1,
    "question": "Secondo il D.Lgs. 81/2008, cos'è il \"rischio\" in ambito di sicurezza sul lavoro?",
    "options": [
      "La fonte di possibile danno o lesione",
      "La probabilità che si verifichi un evento dannoso",
      "La probabilità che si verifichi un evento dannoso moltiplicata per la gravità del danno",
      "Qualsiasi situazione pericolosa presente in azienda"
    ],
    "correctAnswer": "La probabilità che si verifichi un evento dannoso moltiplicata per la gravità del danno",
    "explanation": "Il rischio è definito come la probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione. Si calcola con la formula R = P × D (Probabilità × Danno/Gravità)."
  },
  {
    "id": 2,
    "scenario": "Durante un'ispezione, noti che un collega sta usando una scala danneggiata con un piolo rotto. Qual è l'azione corretta da intraprendere immediatamente?",
    "question": "Qual è l'azione corretta da intraprendere immediatamente?",
    "options": [
      "Segnalare la situazione al Rappresentante dei Lavoratori per la Sicurezza alla fine del turno",
      "Fermare immediatamente il collega e segnalare la situazione al preposto o al datore di lavoro",
      "Sostituire tu stesso la scala con una integra senza dire niente",
      "Continuare a lavorare, tanto è responsabilità del datore di lavoro controllare le attrezzature"
    ],
    "correctAnswer": "Fermare immediatamente il collega e segnalare la situazione al preposto o al datore di lavoro",
    "explanation": "Il lavoratore ha l'obbligo di segnalare immediatamente situazioni di pericolo. Una scala danneggiata rappresenta un rischio grave di infortunio. L'azione deve essere tempestiva per prevenire incidenti."
  },
  {
    "id": 3,
    "question": "Qual è lo scopo principale del Documento di Valutazione dei Rischi (DVR)?",
    "options": [
      "Elencare tutti i dipendenti dell'azienda",
      "Identificare i pericoli, valutare i rischi e definire le misure di prevenzione e protezione",
      "Documentare gli infortuni avvenuti in azienda",
      "Stabilire i turni di lavoro dei dipendenti"
    ],
    "correctAnswer": "Identificare i pericoli, valutare i rischi e definire le misure di prevenzione e protezione",
    "explanation": "Il DVR è il documento fondamentale che identifica tutti i pericoli presenti in azienda, valuta i rischi associati e definisce le misure preventive e protettive da adottare per tutelare la salute e sicurezza dei lavoratori."
  },
  {
    "id": 4,
    "scenario": "Sei stato appena assunto in un'azienda con 18 dipendenti. Quando deve essere redatto il DVR per la tua posizione lavorativa?",
    "question": "Quando deve essere redatto il DVR per la tua posizione lavorativa?",
    "options": [
      "Entro 30 giorni dall'assunzione",
      "Entro 90 giorni dall'assunzione",
      "Il DVR deve essere già presente prima dell'inizio della tua attività lavorativa",
      "Solo se richiesto durante un'ispezione"
    ],
    "correctAnswer": "Il DVR deve essere già presente prima dell'inizio della tua attività lavorativa",
    "explanation": "Il DVR deve essere già elaborato PRIMA dell'inizio di qualsiasi attività lavorativa. Il datore di lavoro non può far iniziare un lavoratore senza aver prima valutato i rischi associati alla sua mansione."
  },
  {
    "id": 5,
    "question": "Chi ha la responsabilità legale di elaborare il Documento di Valutazione dei Rischi (DVR)?",
    "options": [
      "Il Responsabile del Servizio di Prevenzione e Protezione (RSPP)",
      "Il Rappresentante dei Lavoratori per la Sicurezza (RLS)",
      "Il Datore di Lavoro, che non può delegare questo obbligo",
      "Il Medico Competente"
    ],
    "correctAnswer": "Il Datore di Lavoro, che non può delegare questo obbligo",
    "explanation": "L'elaborazione del DVR è un obbligo non delegabile del datore di lavoro (art. 17 D.Lgs. 81/2008). Può avvalersi del supporto di RSPP e Medico Competente, ma la responsabilità finale rimane sua."
  },
  {
    "id": 6,
    "scenario": "Durante un'evacuazione di emergenza per incendio, ti accorgi che un collega con mobilità ridotta è rimasto indietro al terzo piano. Cosa devi fare?",
    "question": "Cosa devi fare?",
    "options": [
      "Proseguire con l'evacuazione e avvisare i vigili del fuoco una volta fuori",
      "Tornare indietro da solo per aiutare il collega",
      "Chiamare immediatamente i soccorsi e avvisare gli addetti all'emergenza seguendo il piano di evacuazione",
      "Aspettare che qualcun altro se ne accorga"
    ],
    "correctAnswer": "Chiamare immediatamente i soccorsi e avvisare gli addetti all'emergenza seguendo il piano di evacuazione",
    "explanation": "Il piano di evacuazione deve prevedere procedure specifiche per persone con disabilità o mobilità ridotta. L'azione corretta è attivare immediatamente la catena di soccorso prevista, senza mettere a rischio la propria incolumità."
  },
  {
    "id": 7,
    "question": "Cosa deve contenere obbligatoriamente il Piano di Emergenza aziendale?",
    "options": [
      "Solo l'elenco dei numeri di emergenza (112, 118, 115)",
      "Le procedure di evacuazione, i punti di raccolta, gli addetti alle emergenze e le procedure per diversi scenari di rischio",
      "Solamente la piantina dell'edificio con le uscite di emergenza",
      "L'elenco dei dipendenti e i loro ruoli operativi"
    ],
    "correctAnswer": "Le procedure di evacuazione, i punti di raccolta, gli addetti alle emergenze e le procedure per diversi scenari di rischio",
    "explanation": "Il Piano di Emergenza deve essere completo e includere: procedure di evacuazione, punti di raccolta, addetti designati (antincendio, primo soccorso), modalità di chiamata dei soccorsi, procedure specifiche per diversi scenari (incendio, terremoto, ecc.)."
  },
  {
    "id": 8,
    "question": "Con quale frequenza devono essere effettuate le prove di evacuazione in azienda?",
    "options": [
      "Una volta all'anno",
      "Almeno una volta all'anno, ma è consigliabile farle più frequentemente",
      "Solo quando richiesto dagli ispettori",
      "Non c'è obbligo di fare prove di evacuazione"
    ],
    "correctAnswer": "Almeno una volta all'anno, ma è consigliabile farle più frequentemente",
    "explanation": "Il D.Lgs. 81/2008 richiede che le prove di evacuazione siano effettuate almeno una volta l'anno. Tuttavia, per garantire l'efficacia delle procedure, è raccomandabile effettuarle con maggiore frequenza."
  },
  {
    "id": 9,
    "scenario": "Lavori in un magazzino e noti che l'uscita di emergenza è stata ostruita da bancali di merce per \"solo qualche ora\". Qual è la situazione?",
    "question": "Qual è la situazione?",
    "options": [
      "Accettabile, se è solo temporaneo e serve per esigenze operative",
      "Accettabile se le altre uscite sono libere",
      "Inaccettabile e illegale: le vie di fuga devono essere sempre libere e accessibili",
      "Accettabile se è stata apposta una segnaletica temporanea"
    ],
    "correctAnswer": "Inaccettabile e illegale: le vie di fuga devono essere sempre libere e accessibili",
    "explanation": "Le vie di fuga e le uscite di emergenza devono essere SEMPRE libere e accessibili. Anche un'ostruzione temporanea è vietata e rappresenta un grave rischio per la sicurezza in caso di evacuazione."
  },
  {
    "id": 10,
    "question": "Qual è la differenza tra \"pericolo\" e \"rischio\"?",
    "options": [
      "Sono sinonimi, indicano la stessa cosa",
      "Il pericolo è la proprietà intrinseca di qualcosa di causare danno; il rischio è la probabilità che quel danno si verifichi",
      "Il rischio è più grave del pericolo",
      "Il pericolo riguarda le persone, il rischio riguarda le attrezzature"
    ],
    "correctAnswer": "Il pericolo è la proprietà intrinseca di qualcosa di causare danno; il rischio è la probabilità che quel danno si verifichi",
    "explanation": "Il pericolo è la proprietà o qualità intrinseca di un fattore (sostanza, attrezzatura, situazione) di poter causare danno. Il rischio è la probabilità che si raggiunga il livello potenziale di danno nelle condizioni di impiego o esposizione."
  },
  {
    "id": 11,
    "question": "Chi è il Responsabile del Servizio di Prevenzione e Protezione (RSPP)?",
    "options": [
        "Il lavoratore eletto dai colleghi per rappresentarli in materia di sicurezza",
        "La persona designata dal datore di lavoro per coordinare il servizio di prevenzione e protezione dai rischi",
        "Il medico che effettua le visite mediche ai lavoratori",
        "L'ispettore dell'ASL che controlla la sicurezza in azienda"
    ],
    "correctAnswer": "La persona designata dal datore di lavoro per coordinare il servizio di prevenzione e protezione dai rischi",
    "explanation": "L'RSPP è la persona designata dal datore di lavoro (può essere interno o esterno) con competenze adeguate per gestire e coordinare il Servizio di Prevenzione e Protezione dai rischi. Può essere lo stesso datore di lavoro in aziende piccole."
  },
  {
    "id": 12,
    "scenario": "Durante una riunione periodica sulla sicurezza, il Rappresentante dei Lavoratori per la Sicurezza (RLS) solleva preoccupazioni su un nuovo macchinario. Il datore di lavoro può ignorare la richiesta?",
    "question": "Il datore di lavoro può ignorare la richiesta?",
    "options": [
        "Sì, il datore di lavoro ha l'ultima parola su tutte le decisioni",
        "No, deve consultare l'RLS e prendere in considerazione le sue osservazioni",
        "Sì, se il macchinario è già certificato CE",
        "Dipende dal numero di lavoratori presenti in azienda"
    ],
    "correctAnswer": "No, deve consultare l'RLS e prendere in considerazione le sue osservazioni",
    "explanation": "Il datore di lavoro ha l'obbligo di consultare l'RLS su questioni riguardanti la sicurezza, inclusa l'introduzione di nuove tecnologie o attrezzature. Le osservazioni dell'RLS devono essere prese in considerazione seriamente."
  },
  {
    "id": 13,
    "question": "Quali sono i principali obblighi del lavoratore secondo il D.Lgs. 81/2008?",
    "options": [
        "Solo partecipare alla formazione obbligatoria",
        "Prendersi cura della propria sicurezza e salute e di quella delle altre persone, usare correttamente le attrezzature e i DPI, segnalare situazioni di pericolo",
        "Solo utilizzare i Dispositivi di Protezione Individuale quando richiesto",
        "Nessun obbligo specifico, tutta la responsabilità è del datore di lavoro"
    ],
    "correctAnswer": "Prendersi cura della propria sicurezza e salute e di quella delle altre persone, usare correttamente le attrezzature e i DPI, segnalare situazioni di pericolo",
    "explanation": "I lavoratori hanno obblighi precisi (art. 20): prendersi cura della propria sicurezza e di quella altrui, utilizzare correttamente attrezzature e DPI, segnalare immediatamente situazioni di pericolo, partecipare alla formazione."
  },
  {
    "id": 14,
    "question": "Chi elegge il Rappresentante dei Lavoratori per la Sicurezza (RLS)?",
    "options": [
        "Il datore di lavoro lo nomina",
        "I lavoratori lo eleggono direttamente",
        "Viene designato dall'RSPP",
        "È sempre un sindacalista esterno"
    ],
    "correctAnswer": "I lavoratori lo eleggono direttamente",
    "explanation": "L'RLS è eletto o designato dai lavoratori nell'ambito delle rappresentanze sindacali in azienda. È una figura di rappresentanza, non di nomina aziendale."
  },
  {
    "id": 15,
    "scenario": "Un lavoratore rifiuta di indossare il casco di protezione in cantiere perché \"fa caldo e dà fastidio\". Cosa rischia?",
    "question": "Cosa rischia?",
    "options": [
        "Niente, è una sua scelta personale",
        "Un richiamo verbale, ma nessuna conseguenza legale",
        "Sanzioni disciplinari e, nei casi gravi, penali (arresto o ammenda)",
        "Solo il licenziamento"
    ],
    "correctAnswer": "Sanzioni disciplinari e, nei casi gravi, penali (arresto o ammenda)",
    "explanation": "Il mancato utilizzo dei DPI obbligatori è una violazione grave degli obblighi del lavoratore (art. 20). Oltre alle sanzioni disciplinari aziendali, sono previste sanzioni penali: arresto fino a un mese o ammenda da 200 a 600 euro."
  },
  {
    "id": 16,
    "question": "Qual è il ruolo del Medico Competente in azienda?",
    "options": [
        "Curare i lavoratori che si infortunano",
        "Effettuare la sorveglianza sanitaria, visitare gli ambienti di lavoro e collaborare alla valutazione dei rischi",
        "Sostituire l'RSPP quando assente",
        "Gestire le emergenze di primo soccorso"
    ],
    "correctAnswer": "Effettuare la sorveglianza sanitaria, visitare gli ambienti di lavoro e collaborare alla valutazione dei rischi",
    "explanation": "Il Medico Competente effettua la sorveglianza sanitaria (visite mediche), visita almeno una volta l'anno gli ambienti di lavoro, collabora alla valutazione dei rischi e alla predisposizione del DVR. Non è un medico curante né un soccorritore."
  },
  {
    "id": 17,
    "scenario": "Una lavoratrice comunica al datore di lavoro di essere incinta (8 settimane). Cosa deve fare immediatamente il datore di lavoro?",
    "question": "Cosa deve fare immediatamente il datore di lavoro?",
    "options": [
        "Licenziarla per evitare rischi",
        "Valutare i rischi specifici per la gravidanza e, se necessario, adibire la lavoratrice a mansioni compatibili o allontanarla dal lavoro",
        "Non fare nulla fino al settimo mese di gravidanza",
        "Ridurre l'orario di lavoro del 50%"
    ],
    "correctAnswer": "Valutare i rischi specifici per la gravidanza e, se necessario, adibire la lavoratrice a mansioni compatibili o allontanarla dal lavoro",
    "explanation": "Il datore di lavoro deve immediatamente valutare i rischi specifici per la lavoratrice gestante (D.Lgs. 151/2001) e, se ci sono rischi per la salute della madre o del bambino, deve modificare le condizioni di lavoro o spostare la lavoratrice a mansioni non a rischio."
  },
  {
    "id": 18,
    "question": "Chi designa gli addetti al servizio di prevenzione incendi e di evacuazione?",
    "options": [
        "I lavoratori tramite elezione",
        "Il datore di lavoro, previa consultazione dell'RLS",
        "L'RSPP",
        "Il Medico Competente"
    ],
    "correctAnswer": "Il datore di lavoro, previa consultazione dell'RLS",
    "explanation": "Il datore di lavoro designa i lavoratori incaricati dell'attuazione delle misure di prevenzione incendi, evacuazione e primo soccorso. È un obbligo non delegabile e deve consultare l'RLS."
  },
  {
    "id": 19,
    "question": "Quali diritti ha il lavoratore in materia di sicurezza sul lavoro?",
    "options": [
        "Solo il diritto di ricevere la formazione",
        "Diritto all'informazione, formazione, addestramento, partecipazione, controllo sanitario e diritto di allontanarsi in caso di pericolo grave e immediato",
        "Nessun diritto specifico, solo doveri",
        "Solo il diritto di rifiutare lavori pericolosi"
    ],
    "correctAnswer": "Diritto all'informazione, formazione, addestramento, partecipazione, controllo sanitario e diritto di allontanarsi in caso di pericolo grave e immediato",
    "explanation": "I lavoratori hanno numerosi diritti: ricevere informazione e formazione adeguate, essere sottoposti a sorveglianza sanitaria quando prevista, partecipare tramite l'RLS, e allontanarsi dal posto di lavoro in caso di pericolo grave, immediato e inevitabile."
  },
  {
    "id": 20,
    "scenario": "Il tuo datore di lavoro ti chiede di svolgere un'attività per la quale non hai ricevuto formazione specifica e che ritieni pericolosa. Cosa devi fare?",
    "question": "Cosa devi fare?",
    "options": [
        "Rifiutare categoricamente senza spiegazioni",
        "Eseguire l'ordine comunque per evitare problemi",
        "Segnalare immediatamente al preposto o datore di lavoro che non hai le competenze necessarie e che ritieni l'attività pericolosa",
        "Eseguire l'attività con molta attenzione"
    ],
    "correctAnswer": "Segnalare immediatamente al preposto o datore di lavoro che non hai le competenze necessarie e che ritieni l'attività pericolosa",
    "explanation": "Il lavoratore ha il diritto e il dovere di segnalare situazioni di pericolo e può rifiutare mansioni per le quali non ha ricevuto formazione adeguata. L'art. 20 prevede l'obbligo di segnalazione, e l'art. 44 tutela il lavoratore che si allontana da situazioni di pericolo."
  },
  {
    "id": 21,
    "question": "Cosa significa l'acronimo DPI?",
    "options": [
        "Dispositivo di Protezione Industriale",
        "Dispositivo di Protezione Individuale",
        "Documento di Prevenzione Infortuni",
        "Dispositivo di Primo Intervento"
    ],
    "correctAnswer": "Dispositivo di Protezione Individuale",
    "explanation": "DPI significa Dispositivo di Protezione Individuale. Si tratta di qualsiasi attrezzatura destinata a essere indossata dal lavoratore per proteggerlo da rischi per la salute e sicurezza."
  },
  {
    "id": 22,
    "question": "Quali sono le tre categorie di DPI in base al livello di rischio?",
    "options": [
        "Piccoli, Medi, Grandi",
        "Categoria I (rischi minimi), Categoria II (rischi significativi), Categoria III (rischi gravi o mortali)",
        "Rischio Basso, Rischio Medio, Rischio Alto",
        "DPI base, DPI standard, DPI avanzati"
    ],
    "correctAnswer": "Categoria I (rischi minimi), Categoria II (rischi significativi), Categoria III (rischi gravi o mortali)",
    "explanation": "I DPI sono classificati in tre categorie: Categoria I (rischi minimi, es. guanti da giardinaggio), Categoria II (rischi significativi, es. caschi), Categoria III (rischi gravi o morte, es. imbracature anticaduta, respiratori)."
  },
  {
    "id": 23,
    "scenario": "Lavori in un'officina rumorosa dove il livello di rumore supera 85 dB(A). Il datore di lavoro deve fornire obbligatoriamente i DPI uditivi (tappi o cuffie)?",
    "question": "Il datore di lavoro deve fornire obbligatoriamente i DPI uditivi (tappi o cuffie)?",
    "options": [
        "Sì, è obbligatorio fornirli e il lavoratore è obbligato a usarli sopra 85 dB(A)",
        "No, i DPI uditivi sono facoltativi",
        "Sì, ma solo se il lavoratore li richiede",
        "Solo se il rumore supera 90 dB(A)"
    ],
    "correctAnswer": "Sì, è obbligatorio fornirli e il lavoratore è obbligato a usarli sopra 85 dB(A)",
    "explanation": "A partire da 80 dB(A) il datore di lavoro deve fornire DPI uditivi. A 85 dB(A) (valore superiore di azione) il loro utilizzo diventa OBBLIGATORIO e il datore deve far rispettare l'obbligo."
  },
  {
    "id": 24,
    "question": "Chi ha l'obbligo di fornire i DPI ai lavoratori?",
    "options": [
        "I lavoratori devono procurarseli autonomamente",
        "Il datore di lavoro, gratuitamente",
        "L'RSPP",
        "Il Medico Competente"
    ],
    "correctAnswer": "Il datore di lavoro, gratuitamente",
    "explanation": "Il datore di lavoro ha l'obbligo di fornire i DPI gratuitamente ai lavoratori. I DPI devono essere adeguati ai rischi, conformi alle normative, mantenuti efficienti e sostituiti quando necessario."
  },
  {
    "id": 25,
    "scenario": "I tuoi guanti da lavoro anticaglia sono rovinati e non proteggono più efficacemente. Cosa devi fare?",
    "question": "Cosa devi fare?",
    "options": [
        "Continuare a usarli fino a fine turno",
        "Non usare guanti se sono rovinati",
        "Segnalare immediatamente al datore di lavoro o preposto e richiedere la sostituzione",
        "Comprarli tu stesso e chiedere il rimborso"
    ],
    "correctAnswer": "Segnalare immediatamente al datore di lavoro o preposto e richiedere la sostituzione",
    "explanation": "Il lavoratore ha l'obbligo di utilizzare DPI efficienti e in buono stato. Se un DPI è danneggiato, deve segnalarlo immediatamente al datore di lavoro che ha l'obbligo di sostituirlo. Non si deve continuare a lavorare con DPI inefficaci."
  },
  {
    "id": 26,
    "question": "Qual è lo scopo della sorveglianza sanitaria?",
    "options": [
        "Curare i lavoratori quando si ammalano",
        "Verificare l'idoneità del lavoratore alla mansione specifica e prevenire malattie professionali attraverso controlli periodici",
        "Controllare che i lavoratori non assumano alcol o droghe",
        "Misurare la produttività dei lavoratori"
    ],
    "correctAnswer": "Verificare l'idoneità del lavoratore alla mansione specifica e prevenire malattie professionali attraverso controlli periodici",
    "explanation": "La sorveglianza sanitaria, effettuata dal Medico Competente, ha lo scopo di valutare l'idoneità del lavoratore alla mansione specifica, rilevare precocemente eventuali alterazioni dello stato di salute correlate al lavoro e prevenire malattie professionali."
  },
  {
    "id": 27,
    "question": "Chi sono gli enti ispettivi che possono effettuare controlli sulla sicurezza nei luoghi di lavoro?",
    "options": [
        "Solo la Polizia di Stato",
        "ASL (servizio PSAL), Ispettorato Nazionale del Lavoro (INL), Vigili del Fuoco, INAIL",
        "Solo i Vigili del Fuoco",
        "Solo l'INAIL"
    ],
    "correctAnswer": "ASL (servizio PSAL), Ispettorato Nazionale del Lavoro (INL), Vigili del Fuoco, INAIL",
    "explanation": "I principali enti di vigilanza sono: ASL tramite il servizio PSAL (Prevenzione e Sicurezza Ambienti di Lavoro), Ispettorato Nazionale del Lavoro, Vigili del Fuoco (per aspetti antincendio), INAIL. Hanno poteri di ispezione, verifica e sanzione."
  },
  {
    "id": 28,
    "scenario": "Durante un'ispezione, l'ASL rileva gravi carenze in materia di sicurezza (assenza di DVR, lavoratori senza formazione, DPI non forniti). Quali sanzioni può applicare?",
    "question": "Quali sanzioni può applicare?",
    "options": [
        "Solo una multa simbolica",
        "Sanzioni amministrative (multe), prescrizioni con termini per regolarizzare, sospensione dell'attività, sanzioni penali (arresto) per i casi più gravi",
        "Nessuna sanzione immediata, solo un avviso",
        "Solo la chiusura definitiva dell'azienda"
    ],
    "correctAnswer": "Sanzioni amministrative (multe), prescrizioni con termini per regolarizzare, sospensione dell'attività, sanzioni penali (arresto) per i casi più gravi",
    "explanation": "Le sanzioni possono essere graduate: prescrizioni obbligatorie con termini, sanzioni amministrative (multe fino a decine di migliaia di euro), sospensione dell'attività imprenditoriale, sanzioni penali (arresto da 3 a 6 mesi o ammenda) per le violazioni più gravi."
  },
  {
    "id": 29,
    "question": "Qual è la differenza tra \"informazione\", \"formazione\" e \"addestramento\"?",
    "options": [
        "Sono sinonimi, indicano lo stesso concetto",
        "Informazione è la trasmissione di conoscenze; formazione è l'insegnamento di competenze; addestramento è l'esercizio pratico ripetuto",
        "L'addestramento è solo per i dirigenti",
        "La formazione è teorica, l'informazione è pratica"
    ],
    "correctAnswer": "Informazione è la trasmissione di conoscenze; formazione è l'insegnamento di competenze; addestramento è l'esercizio pratico ripetuto",
    "explanation": "Informazione: trasmettere conoscenze sui rischi (es. leggere una procedura). Formazione: processo educativo per far acquisire competenze (es. corso sulla sicurezza). Addestramento: attività pratica e ripetuta per far apprendere l'uso corretto di attrezzature, impianti, DPI."
  },
  {
    "id": 30,
    "scenario": "Sei stato assunto come operaio in un'azienda metalmeccanica. Quando deve essere completata la tua formazione obbligatoria sulla sicurezza?",
    "question": "Quando deve essere completata la tua formazione obbligatoria sulla sicurezza?",
    "options": [
        "Entro 1 anno dall'assunzione",
        "Prima dell'inizio dell'attività lavorativa o, al massimo, contestualmente all'avvio delle mansioni (per formazione generale e specifica)",
        "Solo se richiesto dall'ispettore durante un controllo",
        "Entro 6 mesi dall'assunzione"
    ],
    "correctAnswer": "Prima dell'inizio dell'attività lavorativa o, al massimo, contestualmente all'avvio delle mansioni (per formazione generale e specifica)",
    "explanation": "La formazione deve essere completata PRIMA dell'inizio delle attività lavorative o, nei casi specificamente previsti, contestualmente all'avvio al lavoro. Secondo l'Accordo Stato-Regioni, la formazione specifica può essere completata entro 60 giorni dall'assunzione solo se affiancata da formazione generale preventiva."
  }
];

const TestFinale: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts or resets
    window.scrollTo(0, 0);
  }, [attempts]);

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Per favore, rispondi a tutte le domande prima di inviare.");
      return;
    }

    let currentScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setSubmitted(true);
    setShowResults(true);
    setAttempts(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  const scorePercentage = (score / questions.length) * 100;
  const passed = scorePercentage >= 70;

  return (
    <div className="w-full sm:max-w-2xl md:max-w-4xl mx-auto p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Test Finale - Formazione Sicurezza</h1>
        <p className="text-gray-600">Verifica le tue conoscenze sulla sicurezza sul lavoro.</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-bold text-blue-600 text-xl">30</p>
                <p className="text-sm text-blue-500">Domande</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-bold text-green-600 text-xl">70%</p>
                <p className="text-sm text-green-500">Punteggio Minimo</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
                <p className="font-bold text-yellow-600 text-xl">20 min</p>
                <p className="text-sm text-yellow-500">Durata Stimata</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
                <p className="font-bold text-red-600 text-xl">{2 - attempts}</p>
                <p className="text-sm text-red-500">Tentativi Rimasti</p>
            </div>
        </div>
      </div>

      {showResults && (
        <div className={`p-6 rounded-xl shadow-lg mb-8 text-white ${passed ? 'bg-green-500' : 'bg-red-500'}`}>
          <h2 className="text-2xl font-bold">Risultato del Test</h2>
          <p className="text-lg mt-2">Punteggio: {score} su {questions.length} ({scorePercentage.toFixed(1)}%)</p>
          <p className="font-semibold mt-1">{passed ? 'Complimenti, test superato!' : 'Test non superato. Rivedi i contenuti e riprova.'}</p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            questionNumber={index + 1}
            selectedAnswer={answers[q.id]}
            onAnswerChange={(answer) => handleAnswerChange(q.id, answer)}
            submitted={submitted}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        {!submitted && attempts < 2 && (
          <button
            onClick={handleSubmit}
            className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-700 transition-colors shadow-md disabled:bg-gray-400"
            disabled={attempts >= 2}
          >
            Invia le Risposte
          </button>
        )}
        {submitted && attempts < 2 && (
          <button
            onClick={handleReset}
            className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600 transition-colors shadow-md"
          >
            Tenta di Nuovo
          </button>
        )}
        {attempts >= 2 && (
          <p className="text-red-600 font-bold text-lg">Hai esaurito i tentativi a tua disposizione.</p>
        )}
      </div>
    </div>
  );
};

export default TestFinale;
