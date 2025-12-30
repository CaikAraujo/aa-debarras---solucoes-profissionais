import { ServicesTemplate } from '@/components/templates/ServicesTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nossos Serviços | AA Débarras',
    description: 'Serviços profissionais de esvaziamento de casas, apartamentos e escritórios na Suíça. Rapidez, eficiência e valorização ecológica.',
};

export default function ServicesPage() {
    return <ServicesTemplate />;
}
