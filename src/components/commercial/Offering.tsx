import Layout from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import { useCommercial, diagnosticRules } from "@/lib/commercial";
import { Action, Closing, MethodSteps, Verticals } from "./Shared";
import hero from "@/assets/ai-consultancy.jpg";
export type OfferingKind =
  "strategy" | "development" | "method" | "about" | "diagnosis" | "services";
export default function Offering({ kind }: { kind: OfferingKind }) {
  const c = useCommercial();
  const strategy = kind === "strategy",
    dev = kind === "development",
    method = kind === "method",
    about = kind === "about",
    diagnosis = kind === "diagnosis";
  const title = strategy
    ? c(
        "Una hoja de ruta para llevar la IA a escala.",
        "Un full de ruta per portar la IA a escala.",
        "A roadmap to scale AI.",
      )
    : dev
      ? c(
          "Aplicaciones y agentes conectados a tu negocio.",
          "Aplicacions i agents connectats al teu negoci.",
          "Applications and agents connected to your business.",
        )
      : method
        ? c(
            "Menos fricción. Más adopción.",
            "Menys fricció. Més adopció.",
            "Less friction. More adoption.",
          )
        : about
          ? c(
              "Criterio estratégico. Capacidad de construir.",
              "Criteri estratègic. Capacitat de construir.",
              "Strategic thinking. The ability to build.",
            )
          : diagnosis
            ? c(
                "Descubre dónde la IA puede aportar valor.",
                "Descobreix on la IA pot aportar valor.",
                "Discover where AI can create value.",
              )
            : c(
                "Dos verticales. Un mismo objetivo.",
                "Dos verticals. Un mateix objectiu.",
                "Two verticals. One goal.",
              );
  const intro = strategy
    ? c(
        "Del experimento a la operación: priorización, gobierno, adopción y despliegue progresivo para convertir la IA en una capacidad de tu empresa.",
        "De l’experiment a l’operació: priorització, govern, adopció i desplegament progressiu per convertir la IA en una capacitat de la teva empresa.",
        "From experiment to operations: prioritization, governance, adoption and progressive deployment to make AI an organizational capability.",
      )
    : dev
      ? c(
          "Desarrollamos con Lovable y Claude: desde la definición del proyecto hasta las integraciones, las pruebas y el acompañamiento en la puesta en marcha.",
          "Desenvolupem amb Lovable i Claude: des de la definició del projecte fins a les integracions, les proves i l’acompanyament en la posada en marxa.",
          "We build with Lovable and Claude: from project definition to integrations, testing and launch support.",
        )
      : method
        ? c(
            "Nuestro método 3A une gestión del cambio, integración con tus herramientas y medición del impacto. La tecnología se adapta a las personas, no al revés.",
            "El nostre mètode 3A uneix gestió del canvi, integració amb les teves eines i mesurament de l’impacte. La tecnologia s’adapta a les persones, no a l’inrevés.",
            "Our 3A method connects change management, integration with your tools and impact measurement. Technology adapts to people, not the other way around.",
          )
        : about
          ? c(
              "Somos RESTRICTED OUTREACH, una consultoría tecnológica B2B desde Sant Cugat del Vallès, Barcelona. Conectamos visión de negocio y desarrollo para acompañar la transformación con IA.",
              "Som RESTRICTED OUTREACH, una consultoria tecnològica B2B des de Sant Cugat del Vallès, Barcelona. Connectem visió de negoci i desenvolupament per acompanyar la transformació amb IA.",
              "We are RESTRICTED OUTREACH, a B2B technology consultancy based in Sant Cugat del Vallès, Barcelona. We connect business direction with development to support AI transformation.",
            )
          : diagnosis
            ? c(
                "Un taller de dos horas para entender tus procesos, identificar la fricción y priorizar un primer caso de uso. Antes, una conversación para confirmar el encaje.",
                "Un taller de dues hores per entendre els teus processos, identificar la fricció i prioritzar un primer cas d’ús. Abans, una conversa per confirmar l’encaix.",
                "A two-hour workshop to understand your processes, identify friction and prioritize a first use case. We start with a conversation to confirm fit.",
              )
            : c(
                "Estrategia para decidir. Desarrollo para hacerlo realidad.",
                "Estratègia per decidir. Desenvolupament per fer-ho realitat.",
                "Strategy to decide. Development to make it real.",
              );
  let items: [string, string][] = [];
  if (strategy)
    items = [
      [
        c(
          "Diagnóstico y oportunidades",
          "Diagnòstic i oportunitats",
          "Diagnosis & opportunities",
        ),
        c(
          "Procesos, datos y barreras de adopción. Priorizamos por impacto, esfuerzo y riesgo.",
          "Processos, dades i barreres d’adopció. Prioritzem per impacte, esforç i risc.",
          "Processes, data and adoption barriers. Prioritize by impact, effort and risk.",
        ),
      ],
      [
        c(
          "Hoja de ruta y gobierno",
          "Full de ruta i govern",
          "Roadmap & governance",
        ),
        c(
          "Responsables, inversión y criterios de éxito. Permisos, protección de información y revisión humana.",
          "Responsables, inversió i criteris d’èxit. Permisos, protecció d’informació i revisió humana.",
          "Ownership, investment and success criteria. Permissions, information protection and human review.",
        ),
      ],
      [
        c("Adopción y escalado", "Adopció i escalat", "Adoption & scale"),
        c(
          "Formación, despliegue por fases y patrones reutilizables entre departamentos.",
          "Formació, desplegament per fases i patrons reutilitzables entre departaments.",
          "Training, phased deployment and reusable patterns across departments.",
        ),
      ],
    ];
  if (dev)
    items = [
      [
        "Lovable",
        c(
          "Aplicaciones empresariales, portales, herramientas internas y MVPs. Diseño funcional, datos, integraciones y pruebas antes del lanzamiento.",
          "Aplicacions empresarials, portals, eines internes i MVPs. Disseny funcional, dades, integracions i proves abans del llançament.",
          "Business applications, portals, internal tools and MVPs. Functional design, data, integrations and testing before launch.",
        ),
      ],
      [
        "Claude",
        c(
          "Asistentes y agentes que procesan información y coordinan tareas. Herramientas con permisos delimitados, trazabilidad y aprobación humana en acciones sensibles.",
          "Assistents i agents que processen informació i coordinen tasques. Eines amb permisos delimitats, traçabilitat i aprovació humana en accions sensibles.",
          "Assistants and agents that process information and coordinate tasks. Scoped tool permissions, traceability and human approval for sensitive actions.",
        ),
      ],
      [
        c(
          "De prototipo a operación",
          "De prototip a operació",
          "From prototype to operations",
        ),
        c(
          "Validación funcional, pruebas de seguridad, documentación y acompañamiento. Construimos sobre tus procesos, no sobre una promesa de autonomía sin control.",
          "Validació funcional, proves de seguretat, documentació i acompanyament. Construïm sobre els teus processos, no sobre una promesa d’autonomia sense control.",
          "Functional validation, security testing, documentation and support. Built around your processes, not a promise of unchecked autonomy.",
        ),
      ],
    ];
  if (about)
    items = [
      [
        c("Personas primero", "Persones primer", "People first"),
        c(
          "Escuchamos a quienes hacen el trabajo. La adopción es parte del proyecto desde el primer día.",
          "Escoltem qui fa la feina. L’adopció és part del projecte des del primer dia.",
          "Listen to those doing the work. Adoption is part of the project from day one.",
        ),
      ],
      [
        c("Integración real", "Integració real", "Real integration"),
        c(
          "Conectamos la IA a las herramientas y decisiones de tu operación.",
          "Connectem la IA a les eines i decisions de la teva operació.",
          "Connect AI with the tools and decisions in your operations.",
        ),
      ],
      [
        c("Impacto medible", "Impacte mesurable", "Measurable impact"),
        c(
          "Definimos una situación inicial y medimos horas, errores y uso antes de escalar.",
          "Definim una situació inicial i mesurem hores, errors i ús abans d’escalar.",
          "Establish a baseline and measure hours, errors and usage before scaling.",
        ),
      ],
    ];
  if (diagnosis)
    items = [
      [
        c("Mapear el trabajo", "Mapar la feina", "Map the work"),
        c(
          "Analizamos dos o tres flujos críticos con quienes los conocen.",
          "Analitzem dos o tres fluxos crítics amb qui els coneix.",
          "Analyze two or three critical workflows with those who know them.",
        ),
      ],
      [
        c(
          "Priorizar una oportunidad",
          "Prioritzar una oportunitat",
          "Prioritize an opportunity",
        ),
        c(
          "Matriz de impacto frente a fricción y selección de un primer proceso.",
          "Matriu d’impacte davant la fricció i selecció d’un primer procés.",
          "Impact-versus-friction matrix and selection of a first process.",
        ),
      ],
      [
        c(
          "Acordar el siguiente paso",
          "Acordar el següent pas",
          "Agree the next step",
        ),
        c(
          "Métricas, sponsor y alcance para una propuesta de piloto.",
          "Mètriques, sponsor i abast per a una proposta de pilot.",
          "Metrics, sponsor and scope for a pilot proposal.",
        ),
      ],
    ];
  return (
    <Layout>
      <section className="border-b border-border py-12 lg:py-16">
        <div className="commercial-container">
          <p className="eyebrow text-primary">
            {strategy
              ? c("ESTRATEGIA IA", "ESTRATÈGIA IA", "AI STRATEGY")
              : dev
                ? "DEVELOPMENT / LOVABLE + CLAUDE"
                : method
                  ? "RESTRICTED OUTREACH / 3A"
                  : about
                    ? c("NOSOTROS", "NOSALTRES", "ABOUT US")
                    : diagnosis
                      ? c(
                          "DIAGNÓSTICO / 120 MINUTOS",
                          "DIAGNÒSTIC / 120 MINUTS",
                          "DIAGNOSIS / 120 MINUTES",
                        )
                      : "STRATEGY + DEVELOPMENT"}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl font-medium leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {intro}
          </p>
          <div className="mt-8">
            <Action development={dev} contact={diagnosis} />
          </div>
        </div>
      </section>
      {about && (
        <div className="commercial-container pt-12">
          <img
            src={hero}
            width={1920}
            height={1024}
            loading="lazy"
            alt={c(
              "Visión e integración tecnológica",
              "Visió i integració tecnològica",
              "Technology vision and integration",
            )}
            className="h-64 sm:h-80 w-full object-cover"
          />
        </div>
      )}
      {items.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="commercial-container grid md:grid-cols-3 gap-8">
            {items.map(([t, d], i) => (
              <article key={t} className="border-t border-border pt-6">
                <span className="text-accent font-mono text-sm">0{i + 1}</span>
                <h2 className="mt-5 text-2xl font-medium">{t}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
      {method && (
        <section className="py-12 lg:py-16">
          <div className="commercial-container">
            <MethodSteps />
            <div className="mt-12 commercial-band p-6 sm:p-8">
              <h2 className="text-2xl font-medium">
                {c(
                  "Una metodología. Alcances distintos.",
                  "Una metodologia. Abasts diferents.",
                  "One method. Different scopes.",
                )}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {c(
                  `El marco operativo 3A comprende ${diagnosticRules.methodologyWeeks} semanas. Un piloto acotado a un proceso puede plantearse en ${diagnosticRules.pilotDays} días. El alcance, las condiciones y las métricas se acuerdan en la propuesta.`,
                  `El marc operatiu 3A comprèn ${diagnosticRules.methodologyWeeks} setmanes. Un pilot acotat a un procés pot plantejar-se en ${diagnosticRules.pilotDays} dies. L’abast, les condicions i les mètriques s’acorden en la proposta.`,
                  `The 3A operational framework spans ${diagnosticRules.methodologyWeeks} weeks. A single-process pilot can be scoped to ${diagnosticRules.pilotDays} days. Scope, terms and metrics are agreed in the proposal.`,
                )}
              </p>
            </div>
          </div>
        </section>
      )}
      {(strategy || dev || diagnosis) && (
        <section className="commercial-band py-12 lg:py-16">
          <div className="commercial-container grid lg:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow text-accent">
                {c(
                  "ENTREGABLES CONCRETOS",
                  "LLIURABLES CONCRETS",
                  "TANGIBLE DELIVERABLES",
                )}
              </p>
              <h2 className="mt-5 text-3xl font-medium">
                {c(
                  "Un resultado, no solo una conversación.",
                  "Un resultat, no només una conversa.",
                  "An outcome, not just a conversation.",
                )}
              </h2>
            </div>
            <ul className="space-y-5">
              {(strategy
                ? [
                    c(
                      "Mapa de oportunidades y cartera priorizada",
                      "Mapa d’oportunitats i cartera prioritzada",
                      "Opportunity map and prioritized portfolio",
                    ),
                    c(
                      "Hoja de ruta de implantación",
                      "Full de ruta d’implantació",
                      "Implementation roadmap",
                    ),
                    c(
                      "Plan de adopción y medición",
                      "Pla d’adopció i mesurament",
                      "Adoption and measurement plan",
                    ),
                  ]
                : dev
                  ? [
                      c(
                        "Solución funcional e integraciones",
                        "Solució funcional i integracions",
                        "Functional solution and integrations",
                      ),
                      c(
                        "Pruebas, validación y documentación",
                        "Proves, validació i documentació",
                        "Testing, validation and documentation",
                      ),
                      c(
                        "Acompañamiento en la puesta en marcha",
                        "Acompanyament en la posada en marxa",
                        "Launch support",
                      ),
                    ]
                  : [
                      c(
                        "Mapa de fricción operativa",
                        "Mapa de fricció operativa",
                        "Operational friction map",
                      ),
                      c(
                        "Primer caso de uso priorizado",
                        "Primer cas d’ús prioritzat",
                        "Prioritized first use case",
                      ),
                      c(
                        "Métricas y siguientes pasos",
                        "Mètriques i passos següents",
                        "Metrics and next steps",
                      ),
                    ]
              ).map((s) => (
                <li key={s} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {kind === "services" && <Verticals />}
      <Closing />
    </Layout>
  );
}
