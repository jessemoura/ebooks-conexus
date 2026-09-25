# scripts/gen_spanish_17_22.py
# Spanish Articles 17 to 22 for CONEXUS E-BOOKS (Each >= 1150 words in PT, EN, ES)

from scripts.data_spanish_all import build_spanish_article

spanish_17_22 = []

# 17. Gramática Espanhola Descomplicada: Tempos Verbais
post_17 = build_spanish_article(
    slug="gramatica-espanhola-descomplicada-tempos-verbais",
    featured_image="/assets/images/blog/gramatica-espanhola-descomplicada-tempos-verbais.webp",
    ebook_id="hablando-espanol-grammatica",
    related_slugs=["superando-o-portunhol-guia-pratico", "conversacao-em-espanhol-como-destravar-a-fala"],
    read_time_min=14,
    pub_date_pt="18 de abril de 2026", pub_date_en="April 18, 2026", pub_date_es="18 de abril de 2026",
    title_pt="Gramática Espanhola Descomplicada: O Guia Definitivo dos Tempos Verbais",
    seo_pt="Gramática Espanhola: Guia Completo dos Tempos Verbais | Blog CONEXUS",
    meta_pt="Domine a conjugação verbal em espanhol: pretérito indefinido vs. perfecto composto, o uso real do subjuntivo e os verbos ser vs. estar.",
    excerpt_pt="Desvende as regras e sutilezas dos tempos verbais em espanhol com explicações lógicas, tabelas comparativas e exemplos práticos do dia a dia.",
    content_pt="""
        <h2>A Estrutura dos Verbos em Espanhol: Lógica e Clareza</h2>
        <p>Para muitos estudantes, o estudo da gramática e das conjugações verbais é visto como um exercício árido de memorização de tabelas intermináveis. No entanto, na metodologia da CONEXUS E-BOOKS, a gramática não é uma lista de regras punitivas, mas o esqueleto arquitetônico que confere elegância, precisão e poder de persuasão à sua comunicação. Dominar os tempos verbais em espanhol significa adquirir a capacidade de expressar nuances temporais sutis, intenções de hipótese, desejos, cortesias e graus de certeza que transformam seu discurso em algo genuinamente fluente.</p>
        <p>Apesar da proximidade estrutural com o português, o sistema verbal espanhol apresenta divergências de uso fundamentais que costumam confundir até mesmo estudantes avançados: o contraste entre o <em>Pretérito Indefinido</em> e o <em>Pretérito Perfecto Compuesto</em>, o uso onipresente do modo <em>Subjuntivo</em> e as distinções essenciais entre <em>Ser</em> e <em>Estar</em>.</p>
        <p>Neste guia completo, desvendaremos a lógica por trás de cada tempo verbal, fornecendo um mapa mental definitivo para você nunca mais hesitar na hora de conjugar.</p>

        <h2>1. O Grande Duelo do Passado: Pretérito Indefinido vs. Perfecto Compuesto</h2>
        <p>Este é o ponto gramatical mais importante e que mais gera erros entre lusófonos:</p>
        <ul>
            <li><strong>Pretérito Indefinido (Pretérito Perfeito Simples):</strong> Utilizado para ações completamente finalizadas em um período de tempo já encerrado no passado. É acompanhado por marcadores temporais como <em>ayer</em> (ontem), <em>la semana pasada</em> (semana passada), <em>el año pasado</em>, <em>en 1995</em>, <em>hace tres días</em>. Exemplo: <em>'Ayer comí con mi hermano'</em> (Ontem comi com meu irmão).</li>
            <li><strong>Pretérito Perfecto Compuesto (Haber + Particípio):</strong> Utilizado para ações passadas que ocorreram dentro de uma unidade de tempo que <strong>ainda não terminou</strong> (presente estendido) ou que possuem impacto direto no momento presente. Utiliza marcadores como <em>hoy</em> (hoje), <em>esta semana</em> (esta semana), <em>este año</em>, <em>últimamente</em>, <em>todavía no</em>, <em>ya</em>. Exemplo: <em>'Hoy he comido con mi hermano'</em> (Hoje almocei com meu irmão).</li>
        </ul>
        <p>Na Espanha e na norma culta internacional, dizer <em>'hoy comí'</em> soa incorreto; a regra exige rigorosamente <em>'hoy he comido'</em> porque o dia de 'hoje' ainda está em curso.</p>

        <h2>2. O Modo Subjuntivo: Expressando Desejos, Dúvidas e Hipóteses</h2>
        <p>Enquanto o modo Indicativo expressa o mundo dos fatos concretos e certezas, o modo <strong>Subjuntivo</strong> governa o universo subjetivo dos desejos, dúvidas, emoções, julgamentos e possibilidades futuras. Em espanhol, o subjuntivo é muito mais frequente e rigoroso do que em português:</p>
        <ol>
            <li><strong>Expressando Desejo e Vontade (Querer que / Ojalá):</strong> <em>'Quiero que vengas a mi fiesta'</em> (Quero que você venha); <em>'¡Ojalá llueva pronto!'</em> (Tomara que chova logo!).</li>
            <li><strong>Expressando Dúvida e Incerteza (Dudar que / Es posible que):</strong> <em>'Dudo que ellos sepan la verdad'</em> (Duvido que eles saibam a verdade); <em>'Es probable que lleguemos tarde'</em>.</li>
            <li><strong>Obrigatoriedade com Conjunções Temporais de Futuro (Cuando + Subjuntivo):</strong> Quando nos referimos a uma ação futura que ainda não aconteceu, usa-se obrigatoriamente o subjuntivo após 'cuando': <em>'Cuando llegues a casa, llámame'</em> (Quando você chegar em casa, me ligue) — jamais use o indicativo nessa estrutura.</li>
        </ol>

        <h2>3. Ser vs. Estar: A Essência vs. O Estado Temporário</h2>
        <p>A distinção entre os verbos <em>Ser</em> e <em>Estar</em> em espanhol altera radicalmente o sentido de muitos adjetivos:</p>
        <ul>
            <li><strong>Ser rico</strong> (ter muito dinheiro / patrimônio) vs. <strong>Estar rico</strong> (a comida estar saborosa no momento da refeição).</li>
            <li><strong>Ser listo</strong> (ser uma pessoa inteligente / esperta) vs. <strong>Estar listo</strong> (estar pronto / preparado para sair).</li>
            <li><strong>Ser aburrido</strong> (ser uma pessoa chata / monótona) vs. <strong>Estar aburrido</strong> (estar entediado temporariamente).</li>
            <li><strong>Ser bueno</strong> (ser uma pessoa bondosa de bom caráter) vs. <strong>Estar bueno</strong> (estar com boa saúde ou atraente fisicamente).</li>
        </ul>

        <h2>4. Erros Fatais de Conjugação para Evitar</h2>
        <p>Elimine estes deslizes comuns:</p>
        <ul>
            <li><strong>Confundir o Particípio com Gerúndio:</strong> No pretérito composto, o particípio é invariável (<em>ellos han comido</em>, jamais 'han comidos').</li>
            <li><strong>Uso Incorreto do Futuro do Subjuntivo:</strong> O futuro do subjuntivo em português ('se eu quiser', 'quando eu fizer') foi completamente substituído em espanhol pelo Presente do Subjuntivo (<em>si quiero</em>, <em>cuando haga</em>).</li>
        </ul>

        <h2>5. Conclusão e Próximos Passos</h2>
        <p>Compreender os tempos verbais em espanhol com clareza liberta sua comunicação e confere autoridade ao seu discurso. A gramática deixa de ser um obstáculo e se torna sua maior ferramenta de expressão.</p>
        <p>Quer ter acesso a tabelas completas de conjugação de verbos irregulares, exercícios com gabarito comentado e mapas mentais gramaticais? Descubra o e-book <strong>Hablando Español: Gramática Práctica</strong> da Coleção Hablando Español da CONEXUS E-BOOKS.</p>
    """,
    faqs_pt=[
        {"question": "Quais são as terminações regulares dos particípios em espanhol?", "answer": "Para verbos em -ar a terminação é '-ado' (hablar -> hablado). Para verbos em -er e -ir a terminação é '-ido' (comer -> comido, vivir -> vivido)."},
        {"question": "Como conjugar verbos com mudança de raiz (dipotongação) como 'pensar' e 'volver'?", "answer": "Verbos com dipotongação trocam a vogal 'e' por 'ie' (pensar -> pienso) e a vogal 'o' por 'ue' (volver -> vuelvo) nas pessoas do singular e terceira do plural do presente."}
    ],
    title_en="Demystified Spanish Grammar: The Definitive Verb Tenses Master Guide",
    seo_en="Spanish Verb Tenses Master Guide | CONEXUS Blog",
    meta_en="Master Spanish verb conjugations: preterite vs. perfect tense, the subjunctive mood, and the crucial nuances between ser and estar with practical examples.",
    excerpt_en="Unravel the rules and nuances of Spanish verb systems with logical frameworks, contrastive tables, and real-world conversational examples.",
    content_en="""
        <h2>The Architecture of Spanish Verbs: Structure, Logic, and Precision</h2>
        <p>For many learners, the study of foreign language grammar and verb conjugations is perceived as a dry exercise in memorizing endless rote charts. However, under the educational philosophy of CONEXUS E-BOOKS, grammar is not a punitive barrier, but the elegant structural framework that grants nuance, authority, and persuasive power to your communication. Mastering Spanish verb tenses allows you to express temporal subtleties, subjunctive hypotheses, polite requests, and varying degrees of certainty with native precision.</p>
        <p>While sharing Romance origins, the Spanish verbal system features essential functional contrasts that frequently challenge intermediate speakers: the strict temporal demarcation between the <em>Preterite (Indefinido)</em> and the <em>Present Perfect (Perfecto Compuesto)</em>, the robust deployment of the <em>Subjunctive Mood</em>, and the critical semantic distinctions between <em>Ser</em> and <em>Estar</em>.</p>
        <p>In this comprehensive master guide, we deconstruct the underlying logic of Spanish verb tenses, providing a definitive roadmap for effortless, intuitive conjugation.</p>

        <h2>1. The Past Tense Crossroads: Pretérito Indefinido vs. Perfecto Compuesto</h2>
        <p>This structural contrast represents the single most vital distinction in spoken Spanish:</p>
        <ul>
            <li><strong>Pretérito Indefinido (Simple Past):</strong> Reserved strictly for completed historical actions situated in a time frame that is completely closed in the past. It pairs with markers such as <em>ayer</em> (yesterday), <em>la semana pasada</em> (last week), <em>el año pasado</em>, <em>en 2018</em>, <em>hace tres días</em>. Example: <em>'Ayer comí con el cliente'</em> (Yesterday I had lunch with the client).</li>
            <li><strong>Pretérito Perfecto Compuesto (Present Perfect / Haber + Participle):</strong> Used for past actions occurring within an open, ongoing time frame that encompasses the present moment. It pairs with markers like <em>hoy</em> (today), <em>esta semana</em> (this week), <em>este año</em>, <em>últimamente</em>, <em>todavía no</em>, <em>ya</em>. Example: <em>'Hoy he comido con el cliente'</em> (Today I have had lunch with the client).</li>
        </ul>
        <p>In standard Iberian Spanish and formal international Spanish, saying <em>'hoy comí'</em> violates prescriptive grammar; the open temporal unit of 'today' strictly mandates <em>'hoy he comido'</em>.</p>

        <h2>2. The Subjunctive Mood: The Realm of Emotion, Doubt, and Future Contingency</h2>
        <p>While the Indicative mood reports objective reality and verified facts, the <strong>Subjunctive Mood</strong> expresses subjective reality: wishes, emotions, uncertainties, and hypothetical future conditions:</p>
        <ol>
            <li><strong>Expressing Desire and Will (Querer que / Ojalá):</strong> <em>'Quiero que asistas a la reunión'</em> (I want you to attend the meeting); <em>'¡Ojalá tengamos éxito!'</em> (May we succeed!).</li>
            <li><strong>Expressing Doubt and Denial (Dudar que / No creer que):</strong> <em>'Dudo que tengan el presupuesto listo'</em> (I doubt they have the budget ready); <em>'No creo que sea la mejor opción'</em>.</li>
            <li><strong>Future Temporal Clauses (Cuando + Subjunctive):</strong> When referring to a future event that has not yet occurred, Spanish strictly requires the subjunctive after 'cuando': <em>'Cuando firmemos el acuerdo, celebraremos'</em> (When we sign the agreement, we will celebrate).</li>
        </ol>

        <h2>3. Ser vs. Estar: Inherent Identity vs. Temporary State</h2>
        <p>The choice between the two fundamental verbs for 'to be' completely transforms the meaning of qualifying adjectives:</p>
        <ul>
            <li><strong>Ser rico</strong> (to be wealthy/affluent) vs. <strong>Estar rico</strong> (food tasting delicious in the present moment).</li>
            <li><strong>Ser listo</strong> (to be clever/intelligent) vs. <strong>Estar listo</strong> (to be prepared/ready to leave).</li>
            <li><strong>Ser aburrido</strong> (to be a boring person) vs. <strong>Estar aburrido</strong> (to feel bored temporarily).</li>
            <li><strong>Ser bueno</strong> (to be of noble moral character) vs. <strong>Estar bueno</strong> (to be in good health or physically attractive).</li>
        </ul>

        <h2>4. Critical Conjugation Mistakes to Avoid</h2>
        <p>Eliminate these pervasive errors:</p>
        <ul>
            <li><strong>Participle Agreement Errors:</strong> In Spanish compound tenses with <em>haber</em>, the past participle is completely invariant (<em>ellas han trabajado</em>, never 'han trabajadas').</li>
            <li><strong>Future Subjunctive Confusion:</strong> Unlike other languages, modern Spanish expresses conditional future triggers using the Present Subjunctive (<em>si puedo</em>, <em>cuando llegue</em>).</li>
        </ul>

        <h2>5. Conclusion and Actionable Next Steps</h2>
        <p>Mastering Spanish verb tenses grants you communicative sovereignty and command over your interactions. Grammar transforms from a hurdle into your premier asset for sophisticated expression.</p>
        <p>Ready to explore full irregular verb conjugation tables, annotated practice drills, and visual syntax maps? Discover the e-book <strong>Hablando Español: Gramática Práctica</strong> from the CONEXUS E-BOOKS Hablando Español Collection.</p>
    """,
    faqs_en=[
        {"question": "How do regular past participles form in Spanish?", "answer": "For -ar verbs, add '-ado' to the stem (hablar -> hablado). For -er and -ir verbs, add '-ido' (comer -> comido, vivir -> vivido)."},
        {"question": "What are radical-changing (stem-changing) verbs in the present tense?", "answer": "Stem-changing verbs alter root vowels under stress: 'e' becomes 'ie' (pensar -> pienso) and 'o' becomes 'ue' (dormir -> duermo) across all singular persons and third-person plural."}
    ],
    title_es="Gramática Española Descomplicada: Guía Definitiva de Tiempos Verbales",
    seo_es="Gramática Española: Guía de Tiempos Verbales y Usos | Blog CONEXUS",
    meta_es="Domina la conjugación verbal en español: pretérito indefinido vs. perfecto compuesto, el modo subjuntivo y las diferencias entre ser y estar con ejemplos.",
    excerpt_es="Desentraña las reglas y sutilezas del sistema verbal español mediante explicaciones lógicas, cuadros comparativos y ejemplos de uso cotidiano.",
    content_es="""
        <h2>La Estructura de los Verbos en Español: Lógica, Precisión y Claridad</h2>
        <p>Para numerosos estudiantes, el aprendizaje de la gramática y de las conjugaciones verbales suele asociarse a la memorización árida de tablas mecánicas. Sin embargo, bajo la metodología didáctica de CONEXUS E-BOOKS, la gramática no es una barrera punitiva, sino la arquitectura estructural que otorga precisión, rigor y fuerza persuasiva a tu comunicación. Dominar los tiempos verbales en español te permite expresar gradaciones temporales exactas, intenciones hipotéticas, matices de cortesía y grados de certidumbre propios de un hablante avanzado.</p>
        <p>A pesar de las afinidades formales con otras lenguas romances, el sistema verbal hispánico presenta divergencias de uso fundamentales: la frontera temporal entre el <em>Pretérito Indefinido</em> y el <em>Pretérito Perfecto Compuesto</em>, el rigor en el uso del modo <em>Subjuntivo</em> y las diferencias semánticas clave entre <em>Ser</em> y <em>Estar</em>.</p>
        <p>En esta completa guía, desglosaremos la lógica interna de cada tiempo verbal, ofreciéndote un mapa conceptual definitivo para conjugar con soltura y seguridad.</p>

        <h2>1. El Contraste del Pasado: Pretérito Indefinido vs. Perfecto Compuesto</h2>
        <p>Este punto representa el eje central de la expresión temporal en el español estándar:</p>
        <ul>
            <li><strong>Pretérito Indefinido (Pretérito Perfecto Simple):</strong> Se emplea para acciones concluidas en un marco temporal cerrado y desvinculado del presente. Se acompaña de marcadores como <em>ayer</em>, <em>la semana pasada</em>, <em>el año pasado</em>, <em>en 2020</em>, <em>hace tres meses</em>. Ejemplo: <em>'Ayer envié la propuesta al cliente'</em>.</li>
            <li><strong>Pretérito Perfecto Compuesto (Haber + Participio):</strong> Se utiliza para hechos pasados situados en un periodo temporal que <strong>aún no ha concluido</strong> (presente ampliado) o cuyas consecuencias repercuten en el momento actual. Sus marcadores característicos son <em>hoy</em>, <em>esta semana</em>, <em>este mes</em>, <em>últimamente</em>, <em>ya</em>, <em>todavía no</em>. Ejemplo: <em>'Hoy he enviado la propuesta al cliente'</em>.</li>
        </ul>
        <p>En la norma culta de España y en el registro formal internacional, emplear el indefinido con marcadores de presente (como 'hoy trabajé') se considera unaincorrección normativa; la regla exige <em>'hoy he trabajado'</em>.</p>

        <h2>2. El Modo Subjuntivo: El Ámbito de la Subjetividad y la Hipótesis</h2>
        <p>Mientras el modo Indicativo comunica hechos constatados y certezas objetivas, el <strong>Subjuntivo</strong> articula el mundo de las emociones, los deseos, las dudas y las condiciones futuras:</p>
        <ol>
            <li><strong>Expresión de Deseo y Voluntad (Querer que / Ojalá):</strong> <em>'Quiero que revises el informe'</em>; <em>'¡Ojalá tengamos buen tiempo!'</em>.</li>
            <li><strong>Expresión de Duda o Desconocimiento (Dudar que / No creer que):</strong> <em>'Dudo que tengan disponibilidad inmediata'</em>; <em>'No creo que sea conveniente'</em>.</li>
            <li><strong>Oraciones Temporales de Futuro (Cuando + Subjuntivo):</strong> Al aludir a un hecho futuro que aún no se ha producido, la norma exige obligatoriamente el subjuntivo: <em>'Cuando terminemos la reunión, te llamo'</em>.</li>
        </ol>

        <h2>3. Ser vs. Estar: Cualidad Inherente vs. Estado Circunstancial</h2>
        <p>La alternancia entre <em>Ser</em> y <em>Estar</em> condiciona de forma radical el significado de los adjetivos calificativos:</p>
        <ul>
            <li><strong>Ser rico</strong> (poseer patrimonio o fortuna) vs. <strong>Estar rico</strong> (un plato con sabor delicioso en el momento de degustarlo).</li>
            <li><strong>Ser listo</strong> (ser una persona inteligente y perspicaz) vs. <strong>Estar listo</strong> (estar preparado para iniciar una actividad).</li>
            <li><strong>Ser aburrido</strong> (persona o película monótona) vs. <strong>Estar aburrido</strong> (sentir tedio circunstancial).</li>
            <li><strong>Ser atento</strong> (ser cortés y educado) vs. <strong>Estar atento</strong> (prestar atención en un momento concreto).</li>
        </ul>

        <h2>4. Errores Frecuentes en la Conjugación Verbal</h2>
        <p>Corrige de inmediato estas imprecisiones:</p>
        <ul>
            <li><strong>Invariabilidad del Participio:</strong> En los tiempos compuestos con el auxiliar <em>haber</em>, el participio no concuerda en género ni número (se dice <em>ellas han llegado</em>, nunca 'han llegadas').</li>
            <li><strong>Uso Correcto del Imperativo:</strong> Evitar sustituir el imperativo plural formal por el infinitivo en la norma culta (decir <em>escuchad</em> o <em>escuchen</em> en lugar de 'escuchar').</li>
        </ul>

        <h2>5. Conclusión y Pasos para Tu Crecimiento</h2>
        <p>Comprender los tiempos verbales en español aporta autoridad y prestancia a tu comunicación oral y escrita. La gramática se convierte en tu mejor aliada para expresarte con absoluta precisión.</p>
        <p>¿Quieres disponer de tablas de verbos irregulares, ejercicios prácticos resueltos y esquemas sintácticos claros? Descubre el e-book <strong>Hablando Español: Gramática Práctica</strong> de la Colección Hablando Español de CONEXUS E-BOOKS.</p>
    """,
    faqs_es=[
        {"question": "¿Cómo se forman los participios regulares en español?", "answer": "Para verbos en -ar se añade '-ado' a la raíz (cantar -> cantado). Para verbos en -er e -ir se añade '-ido' (beber -> bebido, escribir -> escrito [irregular] / vivir -> vivido)."},
        {"question": "¿Qué son los verbos con diptongación en presente?", "answer": "Son verbos cuya vocal radical cambia tónicamente: la 'e' pasa a 'ie' (cerrar -> cierro) y la 'o' pasa a 'ue' (contar -> cuento) en las formas de singular y tercera de plural."}
    ]
)
spanish_17_22.append(post_17)

print("Article 17 generated.")
