import { AboutTemplate } from '@/components/templates/AboutTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Nós | AA Débarras',
    description: 'Conheça a nossa história, valores e compromisso com a excelência técnica no esvaziamento de imóveis.',
};

export default function AboutPage() {
    return <AboutTemplate />;
}
