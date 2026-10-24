import {createFileRoute} from '@tanstack/react-router';
import {commercialHead} from '@/lib/commercial';
import Offering from '@/components/commercial/Offering';
export const Route=createFileRoute('/method')({head:()=>commercialHead('Método 3A para adoptar IA','Auditoría de Fricción, Arquitectura Invisible y Adopción Acompañada.','/method'),component:() => <Offering kind="method" />});
