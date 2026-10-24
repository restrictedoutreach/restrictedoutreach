import {createFileRoute} from '@tanstack/react-router';
import {commercialHead} from '@/lib/commercial';
import Offering from '@/components/commercial/Offering';
export const Route=createFileRoute('/strategy')({head:()=>commercialHead('Estrategia IA a escala','Diagnóstico, hoja de ruta, gobierno y adopción para implantar IA a escala.','/strategy'),component:() => <Offering kind="strategy" />});
