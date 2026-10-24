import Layout from '@/components/layout/Layout';
import {Action} from './Shared';
import {useCommercial} from '@/lib/commercial';
export default function Retired(){const c=useCommercial();return <Layout><div className="commercial-container py-16"><h1 className="text-4xl font-medium">{c('Este contenido se ha retirado.','Aquest contingut s’ha retirat.','This content has been retired.')}</h1><p className="my-6 text-muted-foreground">{c('Nuestra oferta se centra ahora en Estrategia IA y Desarrollo.','La nostra oferta se centra ara en Estratègia IA i Desenvolupament.','Our offering now focuses on AI Strategy and Development.')}</p><Action/></div></Layout>}
