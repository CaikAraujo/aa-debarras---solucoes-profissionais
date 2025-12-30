import { ContactTemplate } from '@/components/templates/ContactTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contactos | AA Débarras',
    description: 'Entre em contacto connosco. Estamos disponíveis em Lisboa para responder a todas as suas questões de esvaziamento e limpeza.',
};

export default function ContactPage() {
    return <ContactTemplate />;
}
