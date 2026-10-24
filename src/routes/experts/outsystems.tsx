import {createFileRoute} from '@tanstack/react-router';
import {commercialHead} from '@/lib/commercial';
import Retired from '@/components/commercial/Retired';
export const Route=createFileRoute('/experts/outsystems')({head:()=>commercialHead('Contenido retirado','Este contenido ya no forma parte de nuestra oferta.','/experts/outsystems',true),server:{handlers:{GET:()=>new Response('<!doctype html><html lang="es"><head><meta name="robots" content="noindex"><title>Contenido retirado | RESTRICTED OUTREACH</title></head><body><h1>Contenido retirado</h1><p>Este contenido ya no forma parte de nuestra oferta.</p><a href="/">RESTRICTED OUTREACH</a></body></html>',{status:410,headers:{'Content-Type':'text/html; charset=utf-8'}})}},component:Retired});
