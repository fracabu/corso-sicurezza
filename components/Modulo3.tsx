import React, { useEffect } from 'react';
import CollapsibleSection from './shared/CollapsibleSection';

const Modulo3: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-lg text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-4 mb-6">Modulo 3: Protezione, Vigilanza e Formazione Continua</h1>
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Introduzione</h2>
                <p>Eccoci arrivati al modulo finale del nostro percorso sulla sicurezza sul lavoro! Nei primi due moduli hai scoperto il quadro normativo, i diritti e i doveri, e hai imparato a riconoscere i principali rischi negli ambienti di lavoro. Ma come si passa dalla teoria alla pratica quotidiana?</p>
                <p>In questo modulo affronteremo tre pilastri fondamentali della sicurezza operativa: la <strong className="text-gray-900">protezione personale</strong> attraverso i Dispositivi di Protezione Individuale (DPI), il <strong className="text-gray-900">sistema di vigilanza e sanzioni</strong> che garantisce il rispetto delle norme, e l'importanza della <strong className="text-gray-900">formazione continua</strong> come investimento per la tua sicurezza e quella dei tuoi colleghi.</p>
                <p>Scoprirai quando e come utilizzare correttamente i DPI, cosa succede durante un'ispezione degli organi di vigilanza, quali sanzioni rischia chi non rispetta le regole, e perché la formazione non finisce mai ma si rinnova nel tempo. Al termine di questo modulo sarai pronto ad affrontare il test finale con tutti gli strumenti necessari per lavorare in sicurezza ogni giorno.</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">3.1 I Dispositivi di Protezione Individuale (DPI)</h2>
                
                <h3 className="text-xl font-bold text-gray-800">Cosa sono i DPI e quando servono</h3>
                <p>Hai mai visto un operaio senza casco in un cantiere? Probabilmente no, perché il casco è un <strong className="text-gray-900">Dispositivo di Protezione Individuale (DPI)</strong> obbligatorio. Ma cos'è esattamente un DPI?</p>
                <p>Secondo il <strong className="text-gray-900">D.Lgs. 81/2008, art. 74</strong>, un DPI è <em className="italic">"qualsiasi attrezzatura destinata ad essere indossata e tenuta dal lavoratore allo scopo di proteggerlo contro uno o più rischi suscettibili di minacciarne la sicurezza o la salute durante il lavoro"</em>.</p>
                <p><strong className="text-gray-900">Principio fondamentale:</strong> I DPI rappresentano l'<strong className="text-gray-900">ultima linea di difesa</strong>. Prima di ricorrere ai DPI, il datore di lavoro deve sempre cercare di eliminare il rischio alla fonte (es. sostituire una sostanza tossica con una innocua) o di ridurlo con protezioni collettive (es. barriere, ventilazione). Solo quando queste misure non sono sufficienti o applicabili entrano in gioco i DPI.</p>
                <p>Pensa ai DPI come all'airbag della tua auto: speri di non doverlo mai usare, ma quando serve può salvarti la vita. Allo stesso modo, un paio di occhiali di protezione può evitare che una scheggia ti acciechi, o dei guanti antitaglio possono prevenire una lesione grave alle mani.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Classificazione dei DPI: le tre categorie</h3>
                <p>Non tutti i DPI sono uguali. La normativa europea (Regolamento UE 2016/425) li classifica in <strong className="text-gray-900">tre categorie</strong> in base al livello di rischio da cui proteggono:</p>
                <div className="overflow-x-auto my-4">
                    <table className="min-w-full bg-white border text-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Categoria</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Tipo di Rischio</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Esempi di DPI</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Certificazione</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border"><strong className="text-gray-900">Categoria I</strong></td>
                                <td className="py-2 px-4 border">Rischi minimi</td>
                                <td className="py-2 px-4 border">Guanti da giardinaggio, occhiali da sole per lavoro, guanti per piatti</td>
                                <td className="py-2 px-4 border">Autocertificazione del fabbricante</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border"><strong className="text-gray-900">Categoria II</strong></td>
                                <td className="py-2 px-4 border">Rischi significativi (né minimi né mortali)</td>
                                <td className="py-2 px-4 border">Caschi, scarpe antinfortunistiche, occhiali protettivi, guanti da lavoro standard</td>
                                <td className="py-2 px-4 border">Certificazione da Organismo Notificato</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border"><strong className="text-gray-900">Categoria III</strong></td>
                                <td className="py-2 px-4 border">Rischi gravi o mortali</td>
                                <td className="py-2 px-4 border">Imbracature anticaduta, respiratori per sostanze tossiche, tute per prodotti chimici pericolosi</td>
                                <td className="py-2 px-4 border">Certificazione + controllo produzione</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Obblighi del datore di lavoro sui DPI</h3>
                <p>Il datore di lavoro non può limitarsi a dire "compratevi i guanti". La legge gli impone obblighi precisi:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><strong className="text-gray-900">Fornitura gratuita:</strong> Tutti i DPI devono essere forniti gratuitamente dall'azienda.</li>
                    <li><strong className="text-gray-900">Scelta adeguata:</strong> I DPI devono essere scelti in base ai rischi specifici.</li>
                    <li><strong className="text-gray-900">Informazione e formazione:</strong> Il datore deve formarti su come e quando usare i DPI.</li>
                    <li><strong className="text-gray-900">Manutenzione e sostituzione:</strong> L'azienda deve garantire che i DPI siano sempre efficienti.</li>
                    <li><strong className="text-gray-900">Verifica dell'utilizzo:</strong> Il datore deve controllare che i lavoratori indossino i DPI.</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Obblighi del lavoratore sui DPI</h3>
                <p>Anche tu hai responsabilità precise nell'uso dei DPI:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>✓ <strong className="text-gray-900">Utilizzare</strong> i DPI in modo corretto.</li>
                    <li>✓ <strong className="text-gray-900">Avere cura</strong> dei DPI e non danneggiarli.</li>
                    <li>✓ <strong className="text-gray-900">Segnalare</strong> immediatamente difetti o rotture.</li>
                    <li>✗ <strong className="text-gray-900">Non modificare</strong> i DPI o rifiutarsi di indossarli.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Quando sostituire un DPI: scadenza, danneggiamento, usura</h3>
                <p>Un DPI va sostituito in tre situazioni principali:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><strong className="text-gray-900">Scadenza temporale:</strong> Ogni DPI ha una vita utile massima (es. caschi 3-5 anni dalla produzione).</li>
                    <li><strong className="text-gray-900">Danneggiamento visibile:</strong> Crepe, strappi, urti violenti subiti.</li>
                    <li><strong className="text-gray-900">Usura da utilizzo:</strong> Materiali degradati dall'uso continuo.</li>
                </ol>
            </section>
            <hr className="my-8 border-gray-200" />
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">3.2 La vigilanza e le sanzioni</h2>
                
                <h3 className="text-xl font-bold text-gray-800">Chi vigila sulla sicurezza: gli organismi di controllo</h3>
                <p>In Italia esistono diversi <strong className="text-gray-900">organismi di vigilanza</strong> che hanno il compito di verificare il rispetto delle norme sulla sicurezza:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">ASL/ATS - Azienda Sanitaria Locale/Agenzia di Tutela della Salute:</strong> Competenza generale su igiene e sicurezza.</li>
                    <li><strong className="text-gray-900">Ispettorato Nazionale del Lavoro (INL):</strong> Focus su contratti e sicurezza, specialmente in edilizia.</li>
                    <li><strong className="text-gray-900">Vigili del Fuoco (VVF):</strong> Prevenzione incendi.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Come funziona un'ispezione: cosa aspettarsi</h3>
                <p>Le ispezioni possono essere a sorpresa. Gli ispettori hanno diritto di accedere liberamente, richiedere documenti (DVR, attestati di formazione, ecc.) e verificare le condizioni sul campo. Al termine redigono un verbale con eventuali prescrizioni o sanzioni.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Sistema sanzionatorio: chi rischia e quanto</h3>
                <p>Il D.Lgs. 81/2008 prevede sanzioni <strong className="text-gray-900">amministrative</strong> (multe) e <strong className="text-gray-900">penali</strong> (arresto) per Datore di Lavoro, Dirigenti, Preposti e anche Lavoratori.</p>
                 <div className="overflow-x-auto my-4">
                    <table className="min-w-full bg-white border text-sm">
                         <caption className="text-lg font-semibold p-2 text-gray-800 text-left">Esempi di Sanzioni per il Datore di Lavoro</caption>
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Violazione</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Sanzione Penale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border">Mancata valutazione dei rischi (DVR)</td>
                                <td className="py-2 px-4 border">Arresto da 3 a 6 mesi o ammenda da 2.740 a 7.014 euro</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Mancata nomina RSPP</td>
                                <td className="py-2 px-4 border">Arresto da 3 a 6 mesi o ammenda da 2.740 a 7.014 euro</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Mancata formazione lavoratori</td>
                                <td className="py-2 px-4 border">Arresto da 2 a 4 mesi o ammenda da 1.315 a 5.699 euro</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Mancata fornitura DPI</td>
                                <td className="py-2 px-4 border">Arresto da 2 a 4 mesi o ammenda da 1.474 a 6.388 euro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Sospensione dell'attività imprenditoriale</h3>
                <p>L'Ispettorato del Lavoro può <strong className="text-gray-900">sospendere immediatamente l'attività</strong> in presenza di lavoro irregolare (almeno 10% dei lavoratori in nero) o gravi violazioni della sicurezza (es. lavoro in quota senza protezioni).</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">3.3 Informazione, Formazione, Addestramento</h2>
                
                <h3 className="text-xl font-bold text-gray-800">Le tre dimensioni dell'apprendimento</h3>
                <p>La legge distingue tre livelli di apprendimento:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li><strong className="text-gray-900">Informazione:</strong> Trasferimento di conoscenze generali (es. circolari, cartelli).</li>
                    <li><strong className="text-gray-900">Formazione:</strong> Processo educativo strutturato con corsi teorici (es. corso di 8 ore).</li>
                    <li><strong className="text-gray-900">Addestramento:</strong> Pratica operativa per imparare ad usare attrezzature/DPI specifici.</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Quando è obbligatoria la formazione</h3>
                <p>La formazione è <strong className="text-gray-900">obbligatoria per tutti i lavoratori</strong> all'assunzione, in caso di cambio mansione o introduzione di nuove attrezzature. La durata totale varia in base al livello di rischio dell'azienda:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Rischio Basso</strong> (Uffici, Commercio): 8 ore (4 generali + 4 specifiche)</li>
                    <li><strong className="text-gray-900">Rischio Medio</strong> (Agricoltura, Trasporti): 12 ore (4 generali + 8 specifiche)</li>
                    <li><strong className="text-gray-900">Rischio Alto</strong> (Edilizia, Industria): 16 ore (4 generali + 12 specifiche)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Aggiornamento periodico: la formazione non finisce mai</h3>
                <p>La formazione non è un evento "una tantum". La legge richiede <strong className="text-gray-900">aggiornamenti periodici</strong>. Tutti i lavoratori devono frequentare corsi di aggiornamento di <strong className="text-gray-900">6 ore ogni 5 anni</strong>.</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6">Formazione continua come investimento</h3>
                <p>La formazione non è solo un obbligo, ma un <strong className="text-gray-900">investimento</strong>. Aziende che investono in sicurezza riscontrano meno infortuni, maggiore produttività e lavoratori più motivati. Prevenire costa sempre meno che pagare sanzioni o i costi (diretti e indiretti) di un infortunio.</p>
            </section>
            <hr className="my-8 border-gray-200" />
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">3.4 Recap e preparazione al test finale</h2>
                
                <h3 className="text-xl font-bold text-gray-800">Sintesi dei concetti chiave di tutti i moduli</h3>
                <p>Prima del test, ripassa i concetti fondamentali:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Modulo 1:</strong> D.Lgs. 81/2008, soggetti della sicurezza (Datore, RSPP, RLS, Medico, Preposto), DVR, diritti e doveri.</li>
                    <li><strong className="text-gray-900">Modulo 2:</strong> Tipologie di rischi (sicurezza, salute, trasversali), misure di prevenzione e protezione.</li>
                    <li><strong className="text-gray-900">Modulo 3:</strong> DPI (categorie, uso, obblighi), vigilanza e sanzioni, formazione (durata e aggiornamento).</li>
                </ul>

                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Domande e risposte aperte (FAQ)</h3>
                    <CollapsibleSection title="1. Posso rifiutarmi di lavorare se ritengo che ci sia un pericolo grave?">
                        <p className="font-semibold text-gray-800">Sì.</p>
                        <p className="mt-2 text-sm text-gray-600">L'art. 44 del D.Lgs. 81/2008 ti riconosce il diritto di allontanarti da un pericolo grave e imminente senza subire sanzioni, avvisando immediatamente il preposto o il datore di lavoro.</p>
                    </CollapsibleSection>
                    <CollapsibleSection title="2. Chi paga la formazione sulla sicurezza?">
                        <p className="font-semibold text-gray-800">Sempre il datore di lavoro.</p>
                        <p className="mt-2 text-sm text-gray-600">La formazione deve avvenire durante l'orario di lavoro e le ore di corso sono retribuite normalmente.</p>
                    </CollapsibleSection>
                    <CollapsibleSection title="3. Le pause durante il lavoro al videoterminale sono obbligatorie?">
                         <p className="font-semibold text-gray-800">Sì.</p>
                         <p className="mt-2 text-sm text-gray-600">Per chi lavora al computer per più di 20 ore settimanali, la legge prevede 15 minuti di pausa ogni 120 minuti di lavoro continuativo al VDT.</p>
                    </CollapsibleSection>
                </div>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Attività del Modulo</h2>
                
                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 1: Esercizio Pratico DPI - Scegli la Protezione Giusta</h3>
                    <CollapsibleSection title="SCENARIO 1: Operaio in cantiere edile a 5 metri d'altezza">
                        <p className="font-semibold text-gray-800">DPI Obbligatori:</p>
                        <ul className="list-disc pl-5 text-sm">
                            <li>Casco di sicurezza</li>
                            <li>Scarpe antinfortunistiche</li>
                            <li>Imbracatura anticaduta</li>
                            <li>Guanti antitaglio</li>
                            <li>Occhiali/visiera</li>
                            <li>Giubbotto alta visibilità</li>
                        </ul>
                    </CollapsibleSection>
                    <CollapsibleSection title="SCENARIO 2: Addetta alle pulizie in ospedale">
                        <p className="font-semibold text-gray-800">DPI Obbligatori:</p>
                        <ul className="list-disc pl-5 text-sm">
                            <li>Guanti monouso in nitrile</li>
                            <li>Scarpe antiscivolo chiuse</li>
                            <li>Camice o grembiule impermeabile</li>
                        </ul>
                    </CollapsibleSection>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 2: Quiz Vero/Falso - Obblighi, Sanzioni e Formazione</h3>
                    <CollapsibleSection title="AFFERMAZIONE 1: Il datore di lavoro può chiedere al lavoratore di acquistare i DPI e poi rimborsarglieli.">
                        <p className="font-bold text-red-600">FALSO</p>
                        <p className="text-sm text-gray-600">I DPI devono essere forniti gratuitamente dal datore di lavoro.</p>
                    </CollapsibleSection>
                    <CollapsibleSection title="AFFERMAZIONE 2: L'aggiornamento della formazione va fatto ogni 3 anni.">
                        <p className="font-bold text-red-600">FALSO</p>
                        <p className="text-sm text-gray-600">L'aggiornamento per i lavoratori va fatto ogni 5 anni con un corso di 6 ore.</p>
                    </CollapsibleSection>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 3: Case Study Finale - Pizzeria 'Da Gino'</h3>
                    <p className="mb-4"><strong className="text-gray-900">Contesto:</strong> Pizzeria con gravi carenze di sicurezza (no DVR, no formazione, rischi evidenti). Un lavoratore si infortuna.</p>
                    <CollapsibleSection title="Chi è il responsabile principale dell'infortunio?">
                        <p className="font-semibold text-gray-800">Gino (il datore di lavoro) ha la responsabilità principale e penale.</p>
                        <p className="text-sm text-gray-600">Non ha valutato i rischi (DVR), non ha fornito DPI (scarpe antiscivolo), e non ha formato il lavoratore. Queste violazioni hanno causato direttamente l'infortunio.</p>
                    </CollapsibleSection>
                </div>
            </section>
        </div>
    );
};

export default Modulo3;
