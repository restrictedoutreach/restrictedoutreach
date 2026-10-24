import {createFileRoute} from '@tanstack/react-router';
import {commercialHead} from '@/lib/commercial';
import Offering from '@/components/commercial/Offering';
export const Route=createFileRoute('/services/')({head:()=>commercialHead('Estrategia y desarrollo','Estrategia IA y desarrollo con Lovable y Claude para transformar tu negocio.','/services'),component:() => <Offering kind="services" />});
