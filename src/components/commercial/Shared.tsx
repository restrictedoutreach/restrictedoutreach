import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  Code2,
  ScanLine,
  Workflow,
  Users,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useCommercial } from "@/lib/commercial";
export function Action({
  development = false,
  outline = false,
  contact = false,
}: {
  development?: boolean;
  outline?: boolean;
  contact?: boolean;
}) {
  const c = useCommercial();
  return (
    <Button
      asChild
      size="lg"
      variant={outline ? "outline" : "default"}
      className="h-12 rounded-md px-6"
    >
      <Link to={development || contact ? "/contact" : "/diagnosis"}>
        {development
          ? c(
              "Hablemos de tu proyecto",
              "Parlem del teu projecte",
              "Let’s discuss your project",
            )
          : c(
              "Solicitar diagnóstico",
              "Sol·licitar diagnòstic",
              "Request a diagnosis",
            )}
        <ArrowUpRight className="ml-3 h-4 w-4" />
      </Link>
    </Button>
  );
}
export function Closing() {
  const c = useCommercial();
  return (
    <section className="commercial-close border-y border-border py-12 lg:py-16">
      <div className="commercial-container flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow text-primary">
            {c("EL SIGUIENTE PASO", "EL SEGÜENT PAS", "THE NEXT STEP")}
          </p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
            {c(
              "Tu próximo avance empieza",
              "El teu proper avenç comença",
              "Your next breakthrough starts",
            )}
            <br />
            {c(
              "con una conversación.",
              "amb una conversa.",
              "with a conversation.",
            )}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Action />
          <Action development outline />
        </div>
      </div>
    </section>
  );
}
export function Verticals() {
  const c = useCommercial();
  return (
    <section className="py-12 lg:py-16">
      <div className="commercial-container">
        <div className="section-heading">
          <p className="eyebrow text-muted-foreground">
            {c(
              "DOS VERTICALES. UNA VISIÓN.",
              "DOS VERTICALS. UNA VISIÓ.",
              "TWO VERTICALS. ONE VISION.",
            )}
          </p>
          <h2>
            {c(
              "Del criterio a la ejecución.",
              "Del criteri a l’execució.",
              "From direction to delivery.",
            )}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="vertical-panel group">
            <div className="flex justify-between">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-muted-foreground font-mono text-sm">
                01 / STRATEGY
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-medium">
              {c("Estrategia IA", "Estratègia IA", "AI strategy")}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              {c(
                "Una hoja de ruta para llevar la IA del experimento a la operación. Priorización, gobierno y adopción para escalar con criterio.",
                "Un full de ruta per portar la IA de l’experiment a l’operació. Priorització, govern i adopció per escalar amb criteri.",
                "A roadmap to move AI from experiment to operations. Prioritization, governance and adoption for deliberate scaling.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
              <span>{c("Diagnóstico", "Diagnòstic", "Diagnosis")}</span>
              <span>{c("Hoja de ruta", "Full de ruta", "Roadmap")}</span>
              <span>
                {c(
                  "Adopción y escalado",
                  "Adopció i escalat",
                  "Adoption & scale",
                )}
              </span>
            </div>
            <Button asChild variant="link" className="mt-8 px-0 text-primary">
              <Link to="/strategy">
                {c(
                  "Explorar Estrategia",
                  "Explorar Estratègia",
                  "Explore strategy",
                )}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </article>
          <article className="vertical-panel group">
            <div className="flex justify-between">
              <Code2 className="h-8 w-8 text-accent" />
              <span className="text-muted-foreground font-mono text-sm">
                02 / DEVELOPMENT
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-medium">
              {c("Desarrollo", "Desenvolupament", "Development")}
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              {c(
                "Aplicaciones con Lovable y agentes con Claude conectados a tu negocio. Del primer prototipo a una solución validada e integrada.",
                "Aplicacions amb Lovable i agents amb Claude connectats al teu negoci. Del primer prototip a una solució validada i integrada.",
                "Lovable applications and Claude agents connected to your business. From first prototype to a validated, integrated solution.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span>Lovable</span>
              <span>Claude</span>
              <span>{c("Integraciones", "Integracions", "Integrations")}</span>
            </div>
            <Button asChild variant="link" className="mt-8 px-0 text-accent">
              <Link to="/services/development">
                {c(
                  "Explorar Desarrollo",
                  "Explorar Desenvolupament",
                  "Explore development",
                )}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
export function MethodSteps() {
  const c = useCommercial();
  const steps = [
    {
      icon: ScanLine,
      n: "01",
      title: c(
        "Auditoría de Fricción",
        "Auditoria de Fricció",
        "Friction audit",
      ),
      desc: c(
        "Escuchamos a las personas, mapeamos procesos y elegimos dónde actuar.",
        "Escoltem les persones, mapem processos i triem on actuar.",
        "Listen to people, map processes and choose where to act.",
      ),
    },
    {
      icon: Workflow,
      n: "02",
      title: c(
        "Arquitectura Invisible",
        "Arquitectura Invisible",
        "Invisible architecture",
      ),
      desc: c(
        "Integramos la solución en las herramientas que tu equipo ya utiliza.",
        "Integrem la solució en les eines que el teu equip ja utilitza.",
        "Integrate solutions with the tools your team already uses.",
      ),
    },
    {
      icon: Users,
      n: "03",
      title: c(
        "Adopción Acompañada",
        "Adopció Acompanyada",
        "Supported adoption",
      ),
      desc: c(
        "Desplegamos progresivamente, formamos al equipo y medimos el impacto.",
        "Despleguem progressivament, formem l’equip i mesurem l’impacte.",
        "Roll out progressively, train the team and measure impact.",
      ),
    },
  ];
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {steps.map((s) => (
        <article key={s.n} className="border-t border-border pt-6">
          <div className="flex items-center justify-between text-primary">
            <s.icon className="h-6 w-6" />
            <span className="font-mono text-sm">{s.n}</span>
          </div>
          <h3 className="mt-5 text-xl font-medium">{s.title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
        </article>
      ))}
    </div>
  );
}
export function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="process-flow">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <span
            className={
              i === steps.length - 1 ? "text-accent" : "text-foreground"
            }
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
}
