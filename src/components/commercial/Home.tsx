import { ArrowUpRight, ArrowDown, Check, Circle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCommercial } from "@/lib/commercial";
import hero from "@/assets/human-agent-collaboration.jpg";
import { Action, Closing, Verticals, MethodSteps, Flow } from "./Shared";
export default function CommercialHome() {
  const c = useCommercial();
  return (
    <Layout>
      <section className="commercial-hero relative overflow-hidden">
        <img
          src={hero}
          width={1920}
          height={1024}
          alt={c(
            "Agente robótico colaborando con profesionales y sistemas empresariales",
            "Agent robòtic col·laborant amb professionals i sistemes empresarials",
            "Robotic agent collaborating with professionals and enterprise systems",
          )}
          className="cinematic-image absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="hero-signal" aria-hidden="true" />
        <div className="commercial-container relative z-10 py-12 lg:py-16">
          <div className="flex items-center gap-3 eyebrow text-accent">
            <span className="h-1.5 w-1.5 bg-accent" />
            {c(
              "ESTRATEGIA + DESARROLLO",
              "ESTRATÈGIA + DESENVOLUPAMENT",
              "STRATEGY + DEVELOPMENT",
            )}
          </div>
          <h1 className="mt-8 font-medium text-4xl sm:text-6xl leading-[1.05] max-w-3xl">
            RESTRICTED
            <br />
            OUTREACH<span className="text-primary">.</span>
          </h1>
          <h2 className="mt-6 text-2xl sm:text-3xl font-normal max-w-xl leading-tight">
            {c(
              "Estrategia y desarrollo de IA",
              "Estratègia i desenvolupament d’IA",
              "AI strategy and development",
            )}
            <br />
            <span className="text-accent">
              {c(
                "para tu empresa.",
                "per a la teva empresa.",
                "for your business.",
              )}
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed">
            {c(
              "Definimos dónde aportar valor. Construimos aplicaciones y agentes. Acompañamos a tu equipo del primer piloto al despliegue a escala.",
              "Definim on aportar valor. Construïm aplicacions i agents. Acompanyem el teu equip del primer pilot al desplegament a escala.",
              "Find where AI creates value. Build applications and agents. Support your team from the first pilot to organization-wide deployment.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action />
            <Action development outline />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-foreground/15 pt-5 max-w-xl text-xs text-foreground/80">
            {[
              c("Personas primero", "Persones primer", "People first"),
              c("Integración real", "Integració real", "Real integration"),
              c("Impacto medible", "Impacte mesurable", "Measurable impact"),
            ].map((s) => (
              <span key={s} className="flex gap-2 items-center">
                <Check className="h-3.5 w-3.5 text-accent" />
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 right-8 hidden lg:flex gap-3 text-xs text-foreground/70 items-center">
          <span>
            BARCELONA ·{" "}
            {c("VISIÓN GLOBAL", "VISIÓ GLOBAL", "GLOBAL PERSPECTIVE")}
          </span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </section>
      <section className="border-b border-border py-10">
        <div className="commercial-container grid gap-8 lg:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-muted-foreground">
            {c(
              "EL RETO NO ES LA TECNOLOGÍA",
              "EL REPTE NO ÉS LA TECNOLOGIA",
              "THE CHALLENGE IS NOT TECHNOLOGY",
            )}
          </p>
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium">
              {c(
                "Es hacer que funcione en tu negocio.",
                "És fer que funcioni en el teu negoci.",
                "It’s making it work for your business.",
              )}
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
              {[
                c("Procesos manuales", "Processos manuals", "Manual processes"),
                c(
                  "Información dispersa",
                  "Informació dispersa",
                  "Scattered information",
                ),
                c(
                  "Pilotos sin adopción",
                  "Pilots sense adopció",
                  "Pilots without adoption",
                ),
              ].map((s) => (
                <span className="flex gap-2 items-center" key={s}>
                  <Circle className="h-2 w-2 text-primary" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Verticals />
      <section className="commercial-band py-12 lg:py-16">
        <div className="commercial-container">
          <div className="section-heading">
            <p className="eyebrow text-accent">
              {c(
                "DEL TRABAJO MANUAL AL VALOR",
                "DEL TREBALL MANUAL AL VALOR",
                "FROM MANUAL WORK TO VALUE",
              )}
            </p>
            <h2>
              {c(
                "Menos fricción. Más capacidad.",
                "Menys fricció. Més capacitat.",
                "Less friction. More capacity.",
              )}
            </h2>
            <p className="text-muted-foreground">
              {c(
                "Casos de uso ilustrativos. Cada proyecto parte de tus procesos y sus métricas.",
                "Casos d’ús il·lustratius. Cada projecte parteix dels teus processos i les seves mètriques.",
                "Illustrative use cases. Every project starts with your processes and metrics.",
              )}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: c(
                  "Operaciones conectadas",
                  "Operacions connectades",
                  "Connected operations",
                ),
                before: c(
                  "Partes transcritos a mano",
                  "Parts transcrits a mà",
                  "Manually transcribed reports",
                ),
                steps: [
                  c("Voz / foto", "Veu / foto", "Voice / photo"),
                  "IA",
                  c("Validación", "Validació", "Review"),
                  "ERP",
                ],
                after: c(
                  "Datos revisados en tu sistema",
                  "Dades revisades al teu sistema",
                  "Reviewed data in your system",
                ),
              },
              {
                title: c(
                  "Documentación útil",
                  "Documentació útil",
                  "Useful documentation",
                ),
                before: c(
                  "Documentos y emails dispersos",
                  "Documents i emails dispersos",
                  "Scattered documents and emails",
                ),
                steps: [
                  c("Documento", "Document", "Document"),
                  c("Extracción", "Extracció", "Extraction"),
                  c("Revisión", "Revisió", "Review"),
                ],
                after: c(
                  "Información estructurada y accesible",
                  "Informació estructurada i accessible",
                  "Structured, accessible information",
                ),
              },
              {
                title: c(
                  "Agentes en acción",
                  "Agents en acció",
                  "Agents in action",
                ),
                before: c(
                  "Tareas entre herramientas aisladas",
                  "Tasques entre eines aïllades",
                  "Tasks across disconnected tools",
                ),
                steps: [
                  c("Solicitud", "Sol·licitud", "Request"),
                  "Claude",
                  c("Aprobación", "Aprovació", "Approval"),
                ],
                after: c(
                  "Flujos coordinados con control humano",
                  "Fluxos coordinats amb control humà",
                  "Coordinated workflows, human control",
                ),
              },
            ].map((s) => (
              <article key={s.title} className="usecase-panel">
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-5 text-xs text-muted-foreground">{s.before}</p>
                <Flow steps={s.steps} />
                <p className="text-sm text-accent">{s.after}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="commercial-container">
          <div className="section-heading flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
            <div>
              <p className="eyebrow text-primary">
                {c(
                  "NUESTRO MÉTODO / 3A",
                  "EL NOSTRE MÈTODE / 3A",
                  "OUR METHOD / 3A",
                )}
              </p>
              <h2>
                {c(
                  "La IA se construye con personas.",
                  "La IA es construeix amb persones.",
                  "AI is built with people.",
                )}
              </h2>
            </div>
            <Button asChild variant="link" className="px-0 justify-start">
              <Link to="/method">
                {c(
                  "Conocer el método",
                  "Conèixer el mètode",
                  "Discover our method",
                )}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <MethodSteps />
          <div className="mt-12 border-t border-border pt-8 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            <p className="text-muted-foreground max-w-lg">
              {c(
                "Un proceso primero. Una organización después. Medimos lo que funciona antes de ampliar el alcance.",
                "Un procés primer. Una organització després. Mesurem el que funciona abans d’ampliar l’abast.",
                "One process first. An organization next. Measure what works before expanding the scope.",
              )}
            </p>
            <Flow
              steps={[
                c("Piloto", "Pilot", "Pilot"),
                c("Evaluación", "Avaluació", "Evaluation"),
                c("Escalado", "Escalat", "Scale"),
              ]}
            />
          </div>
        </div>
      </section>
      <Closing />
    </Layout>
  );
}
