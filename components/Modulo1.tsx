
import React, { useEffect } from 'react';
import CollapsibleSection from './shared/CollapsibleSection';

const Modulo1: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
    <div className="w-full sm:max-w-2xl md:max-w-4xl mx-auto p-2 sm:p-4 md:p-6 bg-white rounded-xl shadow-lg text-gray-700 overflow-x-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-4 mb-6">Modulo 1: Rischio, Prevenzione e Organizzazione Aziendale</h1>
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Introduzione al Modulo</h2>
                <p>Ti sei mai chiesto perché alcuni colleghi sembrano non preoccuparsi mai della sicurezza, mentre altri sono sempre attenti? Oppure perché certi incidenti ci sorprendono, anche quando in retrospettiva sembrano ovvi?</p>
                <p>Questo modulo ti aiuterà a capire come percepiamo il rischio sul lavoro, perché a volte lo sottovalutiamo e come la tua azienda può organizzarsi per proteggere te e i tuoi colleghi. Non si tratta solo di regole da seguire: scoprirai i meccanismi psicologici che influenzano le tue decisioni quotidiane e imparerai a riconoscere i segnali di pericolo che troppo spesso ignoriamo.</p>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-blue-800">Alla fine di questo modulo sarai in grado di valutare i rischi in modo più consapevole, comprendere come funziona il sistema di prevenzione nella tua azienda e riconoscere le cause profonde degli incidenti sul lavoro.</p>
                <p><strong className="text-gray-900">Durata stimata:</strong> 80 minuti</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">1.1 La Percezione del Rischio</h2>
                <h3 className="text-xl font-bold text-gray-800">Cosa sono Pericolo, Rischio e Danno?</h3>
                <p>Prima di parlare di sicurezza, dobbiamo chiarire tre termini fondamentali che spesso confondiamo:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Pericolo</strong> è la proprietà o qualità intrinseca di qualcosa (una sostanza, un macchinario, un'attività) che può causare danni. Ad esempio, un coltello è pericoloso per la sua lama affilata. Il pericolo è una caratteristica oggettiva: il coltello è sempre pericoloso, sia che tu lo usi correttamente o meno.</li>
                    <li><strong className="text-gray-900">Rischio</strong> è la probabilità che il pericolo si trasformi effettivamente in danno, moltiplicata per la gravità del danno possibile. Il rischio dipende dalle circostanze: usare un coltello per tagliare il pane con attenzione comporta un rischio basso; usarlo di fretta, con mani bagnate, vicino ad altre persone, aumenta significativamente il rischio.</li>
                    <li><strong className="text-gray-900">Danno</strong> è l'effetto negativo che si verifica quando il pericolo si concretizza: un taglio, una ferita, un infortunio permanente.</li>
                </ul>
                <div className="bg-gray-50 p-4 my-4 rounded-lg border">
                    <p className="font-semibold text-gray-800">Esempio Pratico:</p>
                    <ul className="list-disc pl-5 mt-2">
                        <li><strong className="text-gray-900">Pericolo:</strong> Un pavimento bagnato in un supermercato</li>
                        <li><strong className="text-gray-900">Rischio:</strong> La probabilità che qualcuno scivoli dipende da: quante persone passano, quanto è scivoloso, se c'è un cartello di avviso, se le persone indossano scarpe adeguate</li>
                        <li><strong className="text-gray-900">Danno:</strong> Una caduta che può causare da una semplice contusione a una frattura del femore</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6">I Fattori che Influenzano la Nostra Percezione del Rischio</h3>
                <p>La percezione del rischio non è mai puramente razionale. Il nostro cervello valuta i pericoli utilizzando scorciatoie mentali (chiamate <strong className="text-gray-900">euristiche</strong>) che ci aiutano a prendere decisioni rapide, ma che possono portarci a valutazioni sbagliate.</p>
                <p><strong className="text-gray-900">Fattori psicologici principali:</strong></p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><strong className="text-gray-900">Familiarità:</strong> Tendiamo a sottovalutare i rischi delle attività che facciamo tutti i giorni. Un operaio edile che lavora su impalcature da anni può sentirsi completamente a suo agio senza imbracatura, proprio perché "non è mai successo nulla". La familiarità crea una falsa sensazione di controllo.</li>
                    <li><strong className="text-gray-900">Controllo percepito:</strong> Ci sentiamo più sicuri quando pensiamo di avere il controllo della situazione. Per questo molti autisti si sentono tranquilli guidando velocemente ("io so guidare bene"), ma hanno paura di volare, anche se statisticamente l'aereo è molto più sicuro.</li>
                    <li><strong className="text-gray-900">Visibilità delle conseguenze:</strong> Rischi con conseguenze drammatiche e immediate (un'esplosione, una caduta dall'alto) vengono percepiti come più gravi rispetto a rischi con danni progressivi (esposizione a sostanze chimiche, posture scorrette). Eppure questi ultimi causano più danni a lungo termine.</li>
                    <li><strong className="text-gray-900">Esperienza personale:</strong> Se non abbiamo mai vissuto un incidente, è difficile credere che possa accadere. "Ho sempre fatto così e non è mai successo niente" è una frase che precede moltissimi infortuni.</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-800 mt-6">I Bias Cognitivi che ci Mettono in Pericolo</h3>
                <p>I <strong className="text-gray-900">bias cognitivi</strong> sono errori sistematici nel nostro modo di pensare. Ecco i più pericolosi in ambito sicurezza:</p>
                <p className="font-semibold text-gray-800">1. Bias dell'ottimismo ("A me non succederà mai")</p>
                <p>Tendiamo a credere che gli eventi negativi capiteranno agli altri, non a noi. Uno studio ha dimostrato che l'80% delle persone crede di essere un guidatore sopra la media (cosa statisticamente impossibile). Lo stesso vale sul lavoro: "Gli incidenti capitano a chi è distratto, io sto attento."</p>
                
                <div className="bg-gray-50 p-4 my-4 rounded-lg border">
                    <p className="font-semibold text-gray-800">Esempio reale:</p>
                    <p>Marco, carrellista con 10 anni di esperienza, non allaccia mai la cintura di sicurezza sul muletto. "In 10 anni non mi è mai servita, so guidare benissimo." Un giorno, per evitare un collega, frena bruscamente e viene sbalzato dal sedile, riportando un trauma cranico. Avrebbe evitato tutto con la cintura.</p>
                </div>

                <p className="font-semibold text-gray-800">2. Normalizzazione della devianza</p>
                <p>Quando una procedura di sicurezza viene violata ripetutamente senza conseguenze immediate, la violazione diventa la nuova norma. Col tempo, comportamenti pericolosi diventano "il modo in cui si fanno le cose qui".</p>
                <div className="bg-gray-50 p-4 my-4 rounded-lg border">
                    <p className="font-semibold text-gray-800">Esempio reale:</p>
                    <p>In un magazzino, il cartello "vietato salire sugli scaffali" viene ignorato da tutti perché "è più veloce prendere la merce da sopra arrampicandosi". Dopo mesi senza incidenti, anche i nuovi assunti iniziano a imitare questo comportamento. Finché qualcuno cade.</p>
                </div>

                <p className="font-semibold text-gray-800">3. Bias di conferma</p>
                <p>Cerchiamo inconsciamente informazioni che confermano quello che già crediamo, ignorando quelle che lo contraddicono. Se credi che indossare i guanti "rallenti il lavoro", noterai solo le volte in cui ti impacciano, non le volte in cui ti proteggono.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Perché Sottovalutiamo Alcuni Rischi e ne Sovrastimiamo Altri</h3>
                <p>Il nostro cervello non è un calcolatore di probabilità perfetto. Ecco perché le nostre valutazioni sono distorte:</p>
                <p className="font-semibold text-gray-800">Rischi sottovalutati:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Rischi graduali e invisibili:</strong> Esposizione prolungata a rumore, vibrazioni, sostanze chimiche, movimentazione ripetitiva. Non vedi danni immediati, quindi sembrano innocui.</li>
                    <li><strong className="text-gray-900">Rischi quotidiani e ripetitivi:</strong> Usare scale portatili, guidare per lavoro, sollevare carichi leggeri ma frequenti. La ripetizione genera noia e disattenzione.</li>
                    <li><strong className="text-gray-900">Rischi in ambienti familiari:</strong> Il tuo ufficio, il tuo laboratorio, il tuo cantiere abituale. Ti senti "a casa" e abbassi la guardia.</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-4">Rischi sovrastimati:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Rischi spettacolari e rari:</strong> Incendi, esplosioni, crolli. Sono drammatici e fanno notizia, quindi li temiamo più del dovuto.</li>
                    <li><strong className="text-gray-900">Rischi nuovi e sconosciuti:</strong> Nuove tecnologie, nuove procedure. La mancanza di familiarità genera ansia.</li>
                </ul>
                <p className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4 rounded-r-lg text-yellow-800"><strong className="text-yellow-900">La chiave:</strong> Un buon sistema di sicurezza bilancia la percezione emotiva del rischio con l'analisi razionale, usando dati oggettivi per identificare i pericoli reali, anche quelli che "non spaventano".</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Il Ruolo della Cultura Aziendale</h3>
                <p>La cultura aziendale influenza profondamente come percepisci e affronti i rischi:</p>
                <p className="font-semibold text-gray-800">Cultura della sicurezza forte:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>La sicurezza è un valore esplicito, non solo una regola</li>
                    <li>Tutti, dal dirigente all'operaio, seguono le procedure</li>
                    <li>Gli errori vengono analizzati per imparare, non per punire</li>
                    <li>Fermare il lavoro per un dubbio di sicurezza è considerato responsabile, non "pauroso"</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-4">Cultura della sicurezza debole:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>La produzione è sempre prioritaria sulla sicurezza</li>
                    <li>"Fai veloce" è il mantra implicito</li>
                    <li>Chi segnala problemi viene visto come lamentoso</li>
                    <li>Le procedure esistono "sulla carta" ma nessuno le segue</li>
                </ul>
                <div className="bg-gray-50 p-4 my-4 rounded-lg border">
                    <p className="font-semibold text-gray-800">Domanda di riflessione:</p>
                    <p>Nella tua azienda, cosa succederebbe se fermassi una lavorazione perché manca un dispositivo di sicurezza? Saresti lodato o criticato?</p>
                </div>
            </section>
            <hr className="my-8 border-gray-200" />
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">1.2 L'Organizzazione della Prevenzione Aziendale</h2>
                <h3 className="text-xl font-bold text-gray-800">Il Sistema di Gestione della Sicurezza: Cos'è e Come Funziona</h3>
                <p>Un <strong className="text-gray-900">Sistema di Gestione della Sicurezza (SGS)</strong> è l'insieme organizzato di persone, procedure, risorse e strumenti che un'azienda utilizza per prevenire infortuni e malattie professionali. Non è un documento statico, ma un sistema vivo che si adatta continuamente.</p>
                <p>Pensa al sistema di sicurezza come al sistema immunitario del corpo umano: protegge l'organizzazione identificando i "virus" (pericoli), attivando "anticorpi" (misure di prevenzione) e imparando dall'esperienza per rafforzarsi nel tempo.</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6">Documento di Valutazione dei Rischi (DVR): Contenuti Essenziali</h3>
                <p>Il <strong className="text-gray-900">DVR</strong> è il cuore del sistema di prevenzione. È il documento obbligatorio in cui l'azienda descrive tutti i rischi presenti e le misure adottate per eliminarli o ridurli.</p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-full bg-white border text-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Sezione</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Contenuto</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Esempio Pratico</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Anagrafica aziendale</td>
                                <td className="py-2 px-4 border">Dati azienda, attività svolta, organigramma sicurezza</td>
                                <td className="py-2 px-4 border">Falegnameria Rossi Srl, 12 dipendenti, RSPP: ing. Bianchi</td>
                            </tr>
                             <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Descrizione attività</td>
                                <td className="py-2 px-4 border">Ciclo produttivo, layout, mansioni</td>
                                <td className="py-2 px-4 border">Taglio legno, assemblaggio mobili, verniciatura</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Identificazione pericoli</td>
                                <td className="py-2 px-4 border">Elenco di tutti i pericoli per mansione</td>
                                <td className="py-2 px-4 border">Sega circolare: rischio taglio, proiezione schegge, rumore</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Valutazione rischi</td>
                                <td className="py-2 px-4 border">Probabilità × Gravità = Livello di rischio</td>
                                <td className="py-2 px-4 border">Taglio: Probabilità media × Gravità alta = Rischio ALTO</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Misure di prevenzione</td>
                                <td className="py-2 px-4 border">Tecniche, organizzative, procedurali, DPI</td>
                                <td className="py-2 px-4 border">Carter di protezione, formazione, guanti antitaglio</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Programma miglioramenti</td>
                                <td className="py-2 px-4 border">Azioni da fare, responsabili, scadenze</td>
                                <td className="py-2 px-4 border">Installare aspirazione polveri entro 30/06 - Resp: RSPP</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-semibold text-gray-800">Sorveglianza sanitaria</td>
                                <td className="py-2 px-4 border">Mansioni soggette a visita medica</td>
                                <td className="py-2 px-4 border">Verniciatori: visita semestrale per esposizione solventi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Gestione delle Emergenze: Piano di Evacuazione e Primo Soccorso</h3>
                <p>Anche con la migliore prevenzione, le emergenze possono accadere. Per questo ogni azienda deve avere un <strong className="text-gray-900">Piano di Emergenza</strong> che tutti conoscono.</p>
                <p className="font-semibold text-gray-800">Il Piano di Evacuazione include:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Scenari di emergenza previsti:</strong> Incendio, Terremoto, Crollo strutturale, Fuga gas/sostanze pericolose, Emergenza medica</li>
                    <li><strong className="text-gray-900">Planimetrie con:</strong> Vie di fuga, Uscite di emergenza, Estintori e idranti, Punto di raccolta esterno, Ubicazione cassetta pronto soccorso e defibrillatore</li>
                    <li><strong className="text-gray-900">Ruoli e responsabilità:</strong> Addetti antincendio, Addetti primo soccorso, Coordinatore emergenze, Tutti i lavoratori</li>
                    <li><strong className="text-gray-900">Procedure specifiche:</strong> Procedure dettagliate per ogni scenario di emergenza.</li>
                </ul>

                 <h3 className="text-xl font-bold text-gray-800 mt-6">Sorveglianza Sanitaria: Quando è Obbligatoria</h3>
                <p>La <strong className="text-gray-900">sorveglianza sanitaria</strong> è l'insieme delle visite mediche preventive e periodiche che servono a verificare che il lavoro non stia danneggiando la tua salute. È obbligatoria quando i lavoratori sono esposti a rischi specifici come movimentazione manuale carichi, videoterminali, rumore, vibrazioni, agenti chimici, lavoro notturno, ecc.</p>
                <p>Dopo la visita, il <strong className="text-gray-900">Medico Competente</strong> emette un giudizio di idoneità: Idoneo, Idoneo con prescrizioni, Idoneo con limitazioni, Temporaneamente inidoneo, Permanentemente inidoneo.</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">1.3 Casi Pratici e Riflessione</h2>
                 <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Caso 1: L'Infortunio "Impossibile" in Magazzino</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><strong className="text-gray-900">Contesto:</strong> Andrea, magazziniere esperto, deve prelevare merce da uno scaffale alto. Il carrello elevatore con piattaforma è in manutenzione.</p>
                        <p><strong className="text-gray-900">L'incidente:</strong> Per "fare veloce", Andrea sale su un pallet vuoto e usa il muletto per sollevare se stesso. Perde l'equilibrio e cade da 3 metri, riportando fratture multiple.</p>
                        <p><strong className="text-gray-900">Analisi delle cause:</strong> Eccesso di confidenza, normalizzazione della devianza (altri lo facevano), pressione sui tempi, mancanza di procedure per attrezzature non disponibili.</p>
                        <h4 className="font-semibold mt-4 text-gray-800">Domande di riflessione:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Quali segnali di pericolo Andrea ha ignorato?</li>
                            <li>Quale bias cognitivo ha influenzato la sua decisione?</li>
                            <li>Cosa avresti fatto tu?</li>
                            <li>Come si sarebbe potuto prevenire questo incidente?</li>
                        </ul>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Caso 2: Il "Piccolo" Taglio che è Costato una Mano</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><strong className="text-gray-900">Contesto:</strong> Giulia, operaia, si procura un piccolo taglio alla mano mentre pulisce un'affettatrice industriale, nonostante i guanti antitaglio.</p>
                        <p><strong className="text-gray-900">L'incidente:</strong> Non segnala l'infortunio per non "perdere tempo". La ferita si infetta. Giorni dopo, a causa del dolore e del gonfiore, la sua presa è meno salda. La mano scivola oltre la protezione e la lama le trancia tre dita.</p>
                        <p><strong className="text-gray-900">Analisi delle cause:</strong> Minimizzazione del primo infortunio, cultura aziendale che scoraggia la segnalazione di "piccoli" problemi, DPI usurati, protezioni della macchina non a norma.</p>
                        <h4 className="font-semibold mt-4 text-gray-800">Domande di riflessione:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Il primo taglio era "piccolo" o era un segnale di allarme?</li>
                            <li>Perché Giulia non ha segnalato il primo infortunio?</li>
                            <li>Come l'azienda avrebbe potuto creare una cultura dove segnalare è normale?</li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12">
                 <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Attività del Modulo</h2>
                
                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 1: Quiz Interattivo - "Pericolo o Rischio?"</h3>
                    
                    <CollapsibleSection title="Situazione 1: Una scala portatile con gradini danneggiati e instabili.">
                        <ul className="list-none p-0 space-y-1 text-gray-700">
                            <li className="font-bold text-green-600">✓ A) Pericolo</li>
                            <li>B) Rischio</li>
                            <li>C) Danno</li>
                            <li>D) Nessuna delle precedenti</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> La scala danneggiata ha una caratteristica intrinseca pericolosa (gradini instabili). È un pericolo oggettivo indipendentemente dal contesto.</p>
                    </CollapsibleSection>

                    <CollapsibleSection title="Situazione 2: La probabilità di scivolare su un pavimento bagnato in un corridoio molto frequentato.">
                        <ul className="list-none p-0 space-y-1 text-gray-700">
                            <li>A) Pericolo</li>
                            <li className="font-bold text-green-600">✓ B) Rischio</li>
                            <li>C) Danno</li>
                            <li>D) Nessuna delle precedenti</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> Qui si parla di probabilità che il pericolo (pavimento bagnato) causi un danno, considerando il contesto (corridoio molto frequentato = tante persone esposte). Questo è un rischio.</p>
                    </CollapsibleSection>
                    
                    <CollapsibleSection title="Situazione 3: Un prodotto chimico etichettato con il simbolo di corrosività.">
                        <ul className="list-none p-0 space-y-1 text-gray-700">
                           <li className="font-bold text-green-600">✓ A) Pericolo</li>
                           <li>B) Rischio</li>
                           <li>C) Danno</li>
                           <li>D) Nessuna delle precedenti</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> Il prodotto chimico è intrinsecamente corrosivo: questa è la sua proprietà pericolosa. È un pericolo. Il rischio dipenderebbe da come e da chi viene usato.</p>
                    </CollapsibleSection>

                    <CollapsibleSection title="Situazione 4: Un operaio che lavora su un'impalcatura a 5 metri senza imbracatura in una giornata ventosa.">
                        <ul className="list-none p-0 space-y-1 text-gray-700">
                           <li>A) Pericolo</li>
                           <li className="font-bold text-green-600">✓ B) Rischio</li>
                           <li>C) Danno</li>
                           <li>D) Nessuna delle precedenti</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> Questa frase descrive una situazione che aumenta la probabilità di caduta (altezza + assenza protezione + vento). È la combinazione di pericolo + condizioni + esposizione = rischio elevato.</p>
                    </CollapsibleSection>

                </div>
            </section>
        </div>
    );
};

export default Modulo1;
