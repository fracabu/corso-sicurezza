import React, { useEffect } from 'react';
import CollapsibleSection from './shared/CollapsibleSection';

const Modulo2: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-xl shadow-lg text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-4 mb-6">Modulo 2: I Soggetti della Sicurezza e i Loro Ruoli</h1>
            
            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Introduzione</h2>
                <p>Hai mai pensato a quante persone lavorano ogni giorno per garantire la tua sicurezza sul posto di lavoro? La sicurezza non è responsabilità di una singola persona, ma di un'intera squadra di professionisti con ruoli ben definiti.</p>
                <p>In questo modulo scoprirai chi sono i protagonisti della sicurezza aziendale, cosa devono fare e come collaborano tra loro. Imparerai anche quali sono i tuoi diritti come lavoratore, ma anche i tuoi doveri – perché sì, anche tu hai responsabilità precise in materia di sicurezza! Affronteremo inoltre un tema importante e delicato: la tutela delle lavoratrici in gravidanza e durante l'allattamento.</p>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-blue-800">Alla fine di questo modulo saprai riconoscere ogni figura della sicurezza, capirai a chi rivolgerti in caso di problemi e conoscerai i tuoi diritti e doveri. Questo ti permetterà di collaborare attivamente alla creazione di un ambiente di lavoro più sicuro per tutti.</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">2.1 I Soggetti della Sicurezza</h2>
                <h3 className="text-xl font-bold text-gray-800">Chi Sono i Protagonisti della Sicurezza?</h3>
                <p>Il D.Lgs. 81/2008 identifica con precisione tutti i soggetti che hanno responsabilità in materia di sicurezza sul lavoro. Pensa a loro come a una squadra di calcio: ognuno ha un ruolo specifico, ma tutti lavorano verso lo stesso obiettivo – vincere la partita contro gli infortuni.</p>
                <p>Vediamo chi sono questi attori e cosa fanno concretamente ogni giorno.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Il Datore di Lavoro: Il Capitano della Squadra</h3>
                <p>Il <strong className="text-gray-900">Datore di Lavoro</strong> è la figura apicale, colui che ha la responsabilità complessiva dell'organizzazione aziendale. Può essere il proprietario dell'azienda, l'amministratore delegato o chi ha poteri decisionali e di spesa.</p>
                <p className="font-semibold text-gray-800">Responsabilità principali:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Valutare tutti i rischi</strong> presenti in azienda e redigere il Documento di Valutazione dei Rischi (DVR)</li>
                    <li><strong className="text-gray-900">Nominare le figure chiave</strong>: RSPP, Medico Competente, Addetti alle emergenze</li>
                    <li><strong className="text-gray-900">Fornire ai lavoratori</strong> tutte le attrezzature necessarie, compresi i Dispositivi di Protezione Individuale (DPI)</li>
                    <li><strong className="text-gray-900">Organizzare la formazione</strong> obbligatoria per tutti i lavoratori</li>
                    <li><strong className="text-gray-900">Mantenere in efficienza</strong> tutti gli impianti e le attrezzature di lavoro</li>
                </ul>
                <p className="font-semibold text-gray-800 mt-4">Obblighi indelegabili:</p>
                <p>Attenzione! Alcune responsabilità sono così importanti che il Datore di Lavoro non può trasferirle ad altri. Secondo l'articolo 17 del D.Lgs. 81/2008, sono <strong className="text-gray-900">indelegabili</strong>:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>La valutazione di tutti i rischi e l'elaborazione del DVR</li>
                    <li>La designazione del Responsabile del Servizio di Prevenzione e Protezione (RSPP)</li>
                </ol>

                <h3 className="text-xl font-bold text-gray-800 mt-6">I Dirigenti: Gli Attuatori delle Decisioni</h3>
                <p>I <strong className="text-gray-900">Dirigenti</strong> sono le persone che, in base alle competenze professionali e ai poteri gerarchici, attuano le direttive del Datore di Lavoro organizzando l'attività lavorativa e vigilando su di essa.</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6">I Preposti: Gli Occhi sul Campo</h3>
                <p>Il <strong className="text-gray-900">Preposto</strong> è la persona che, in base alle competenze professionali, sovrintende all'attività lavorativa e garantisce l'attuazione delle direttive ricevute. È il caposquadra, il capofficina, il team leader – insomma, chi sta a stretto contatto con i lavoratori.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Il Responsabile del Servizio di Prevenzione e Protezione (RSPP)</h3>
                <p>L'<strong className="text-gray-900">RSPP</strong> è la persona designata dal Datore di Lavoro per coordinare il servizio di prevenzione e protezione dai rischi. Può essere un dipendente interno (se ha le competenze necessarie) o un consulente esterno.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Il Medico Competente: Il Custode della Salute</h3>
                <p>Il <strong className="text-gray-900">Medico Competente</strong> è un medico specializzato in medicina del lavoro che collabora con il Datore di Lavoro per la tutela della salute dei lavoratori.</p>

                <h3 className="text-xl font-bold text-gray-800 mt-6">Il Rappresentante dei Lavoratori per la Sicurezza (RLS)</h3>
                <p>L'<strong className="text-gray-900">RLS</strong> è la persona eletta o designata dai lavoratori per rappresentarli su tutte le questioni riguardanti la salute e la sicurezza sul lavoro.</p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6">Gli Addetti alle Emergenze</h3>
                <p>Gli <strong className="text-gray-900">Addetti alle emergenze</strong> sono lavoratori designati dal Datore di Lavoro per gestire situazioni di emergenza (Primo Soccorso, Antincendio, Evacuazione).</p>
                 <div className="overflow-x-auto my-4">
                    <table className="min-w-full bg-white border text-sm">
                         <caption className="text-lg font-semibold p-2 text-gray-800 text-left">La Squadra della Sicurezza: Riepilogo</caption>
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Figura</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Ruolo Principale</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Può Delegare?</th>
                                <th className="py-2 px-4 border text-left font-semibold text-gray-700">Formazione Richiesta</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">Datore di Lavoro</td><td className="py-2 px-4 border">Responsabilità complessiva</td><td className="py-2 px-4 border">Parzialmente (non valutazione rischi e nomina RSPP)</td><td className="py-2 px-4 border">Specifica per settore</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">Dirigente</td><td className="py-2 px-4 border">Attuazione misure sicurezza</td><td className="py-2 px-4 border">Parzialmente</td><td className="py-2 px-4 border">Specifica 16 ore</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">Preposto</td><td className="py-2 px-4 border">Supervisione diretta lavoratori</td><td className="py-2 px-4 border">No</td><td className="py-2 px-4 border">Specifica 8 ore</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">RSPP</td><td className="py-2 px-4 border">Consulenza tecnica</td><td className="py-2 px-4 border">No</td><td className="py-2 px-4 border">48-132 ore (moduli A-B-C)</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">Medico Competente</td><td className="py-2 px-4 border">Sorveglianza sanitaria</td><td className="py-2 px-4 border">No</td><td className="py-2 px-4 border">Specializzazione medicina del lavoro</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">RLS</td><td className="py-2 px-4 border">Rappresentanza lavoratori</td><td className="py-2 px-4 border">No</td><td className="py-2 px-4 border">32 ore iniziali + aggiornamento</td></tr>
                            <tr><td className="py-2 px-4 border font-semibold text-gray-800">Addetti emergenze</td><td className="py-2 px-4 border">Gestione emergenze</td><td className="py-2 px-4 border">No</td><td className="py-2 px-4 border">12-16 ore (variabile)</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">2.2 I Lavoratori - Diritti e Doveri</h2>
                <h3 className="text-xl font-bold text-gray-800">I Tuoi Diritti Fondamentali</h3>
                 <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-900">Diritto all'Informazione e alla Formazione:</strong> Devi sapere a quali rischi sei esposto e come proteggerti.</li>
                    <li><strong className="text-gray-900">Diritto alla Sorveglianza Sanitaria:</strong> Visite mediche periodiche gratuite se esposto a rischi specifici.</li>
                    <li><strong className="text-gray-900">Diritto ai DPI Gratuiti:</strong> L'azienda deve fornirti gratuitamente tutti i DPI necessari.</li>
                    <li><strong className="text-gray-900">Diritto di Segnalare Pericoli:</strong> Puoi e devi segnalare qualsiasi situazione di pericolo.</li>
                    <li><strong className="text-gray-900">Diritto di Allontanarti da Pericolo Grave e Immediato:</strong> Hai il diritto di allontanarti dal posto di lavoro senza subire conseguenze.</li>
                    <li><strong className="text-gray-900">Diritto alla Partecipazione:</strong> Hai diritto di eleggere il RLS.</li>
                </ul>
                <h3 className="text-xl font-bold text-gray-800 mt-6">I Tuoi Doveri Principali</h3>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>Prenderti cura della tua salute e di quella degli altri.</li>
                    <li>Usare correttamente macchinari, attrezzature e sostanze.</li>
                    <li>Utilizzare correttamente i DPI.</li>
                    <li>Segnalare immediatamente pericoli, deficienze o malfunzionamenti.</li>
                    <li>Partecipare ai programmi di formazione.</li>
                    <li>Sottoporsi ai controlli sanitari.</li>
                    <li>Non rimuovere o modificare dispositivi di sicurezza.</li>
                </ul>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">2.3 La Tutela delle Lavoratrici Madri</h2>
                <p>La gravidanza e l'allattamento sono periodi che richiedono attenzioni speciali. Il D.Lgs. 151/2001 (Testo Unico sulla maternità) fornisce le norme dettagliate.</p>
                <h3 className="text-xl font-bold text-gray-800 mt-6">Valutazione dei Rischi e Lavori Vietati</h3>
                <p>Il Datore di Lavoro deve valutare i rischi specifici per la lavoratrice gestante (agenti fisici, chimici, biologici, condizioni di lavoro). Sono vietati lavori pericolosi, faticosi e insalubri, e il lavoro notturno.</p>
                <h3 className="text-xl font-bold text-gray-800 mt-6">Astensione Obbligatoria e Modifiche Mansioni</h3>
                <p>La lavoratrice ha diritto a 5 mesi di astensione obbligatoria (di norma 2 prima e 3 dopo il parto). Se le mansioni sono a rischio, il datore deve prima cercare di modificare le condizioni di lavoro, poi cambiare la mansione, e solo come ultima opzione ricorrere all'astensione anticipata.</p>
            </section>
            <hr className="my-8 border-gray-200" />

            <section className="mb-12">
                 <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">2.4 Esercitazione Pratica</h2>
                
                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 1: Matching Game - Collega Ogni Soggetto alle Sue Responsabilità</h3>
                    <CollapsibleSection title="Datore di Lavoro"><p className="font-semibold text-green-700">Elaborare il Documento di Valutazione dei Rischi (DVR) & Nominare il Responsabile del Servizio di Prevenzione e Protezione (RSPP)</p></CollapsibleSection>
                    <CollapsibleSection title="Dirigente"><p className="font-semibold text-green-700">Attuare concretamente le misure di sicurezza decise dal Datore di Lavoro nel proprio reparto</p></CollapsibleSection>
                    <CollapsibleSection title="Preposto"><p className="font-semibold text-green-700">Fermare immediatamente un lavoratore che non indossa i DPI</p></CollapsibleSection>
                    <CollapsibleSection title="RSPP"><p className="font-semibold text-green-700">Proporre misure di prevenzione e protezione dopo aver analizzato i rischi</p></CollapsibleSection>
                    <CollapsibleSection title="Medico Competente"><p className="font-semibold text-green-700">Effettuare visite mediche periodiche ai lavoratori esposti a rischi specifici</p></CollapsibleSection>
                    <CollapsibleSection title="RLS"><p className="font-semibold text-green-700">Rappresentare i lavoratori nelle consultazioni sulla sicurezza</p></CollapsibleSection>
                    <CollapsibleSection title="Addetto Antincendio"><p className="font-semibold text-green-700">Intervenire con estintori in caso di principio di incendio</p></CollapsibleSection>
                    <CollapsibleSection title="Lavoratore"><p className="font-semibold text-green-700">Usare correttamente i Dispositivi di Protezione Individuale forniti</p></CollapsibleSection>
                    <CollapsibleSection title="Addetto Primo Soccorso"><p className="font-semibold text-green-700">Intervenire in caso di malore di un collega e allertare il 118</p></CollapsibleSection>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 2: Quiz Scenario-Based - "Chi Deve Fare Cosa?"</h3>
                    <CollapsibleSection title="SCENARIO 1: Un operaio nota che il tornio emette rumori strani. Cosa deve fare?">
                         <p className="font-semibold text-gray-800">RISPOSTA CORRETTA: B) Spegnere immediatamente il tornio e segnalare il problema al Preposto o al Datore di Lavoro.</p>
                         <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> Il lavoratore ha l'obbligo di segnalare immediatamente deficienze e malfunzionamenti. Continuare a usare un macchinario difettoso è pericoloso.</p>
                    </CollapsibleSection>
                    <CollapsibleSection title="SCENARIO 2: Una nuova dipendente viene assegnata al muletto. Chi garantisce la sua formazione?">
                         <p className="font-semibold text-gray-800">RISPOSTA CORRETTA: C) Il Datore di Lavoro.</p>
                         <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> È il Datore di Lavoro che ha la responsabilità di garantire la formazione dei lavoratori.</p>
                    </CollapsibleSection>
                    <CollapsibleSection title="SCENARIO 4: Un preposto nota un operaio senza imbracatura in quota. Cosa fa?">
                         <p className="font-semibold text-gray-800">RISPOSTA CORRETTA: C) Fermare immediatamente il lavoro, far scendere l'operaio, assicurarsi che indossi i DPI corretti, poi segnalare l'accaduto ai superiori.</p>
                         <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> Il Preposto ha il potere e il dovere di interrompere immediatamente attività pericolose.</p>
                    </CollapsibleSection>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg transition-all my-6 border">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Attività 3: Case Study Analysis - "La Lavoratrice in Gravidanza"</h3>
                    <p className="mb-4"><strong className="text-gray-900">Contesto:</strong> Valentina, addetta alla verniciatura a spruzzo con solventi, comunica di essere incinta.</p>
                    <CollapsibleSection title="Cosa deve fare il Datore di Lavoro?">
                         <p className="font-semibold text-gray-800">La mansione è incompatibile con la gravidanza. Il Datore di Lavoro deve assegnarla temporaneamente a una mansione compatibile (es. controllo qualità) con la stessa retribuzione.</p>
                         <p className="mt-2 text-sm text-gray-600"><strong className="text-gray-800">Spiegazione:</strong> L'esposizione a solventi organici è vietata in gravidanza. La priorità è cambiare mansione. Se non fosse possibile, scatterebbe l'astensione anticipata.</p>
                    </CollapsibleSection>
                </div>
            </section>

             <section className="mb-12 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-700 !mb-6">Riepilogo del Modulo</h2>
                <p>Hai imparato chi sono i soggetti della sicurezza aziendale, i loro ruoli e responsabilità. Hai compreso i tuoi diritti e doveri, riconoscendoti come parte attiva del sistema di prevenzione. Hai approfondito le tutele specifiche per le lavoratrici madri.</p>
                <p className="font-bold mt-4 text-gray-800">Concetto chiave da ricordare:</p>
                <p className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg text-yellow-800"><strong className="text-yellow-900">La sicurezza sul lavoro è un sistema di collaborazione.</strong> Tu, come lavoratore, sei un attore fondamentale.</p>
            </section>
        </div>
    );
};

export default Modulo2;