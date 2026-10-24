import {createFileRoute} from '@tanstack/react-router';
import {commercialHead} from '@/lib/commercial';
import Offering from '@/components/commercial/Offering';
export const Route=createFileRoute('/diagnosis')({head:()=>commercialHead('Diagnóstico de oportunidades IA','Taller de dos horas para mapear procesos y priorizar oportunidades.','/diagnosis'),component:() => <Offering kind="diagnosis" />});
