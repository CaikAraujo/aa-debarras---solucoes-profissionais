export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface QuoteRequest {
    propertyType: 'casa' | 'apartamento' | 'escritorio' | 'cave';
    size: string;
    urgency: 'baixa' | 'media' | 'alta';
    cleaning: boolean;
    name: string;
    email: string;
}

export enum BookingStep {
    PropertyType,
    Dimensions,
    Services,
    DateSelection,
    Contact,
    Confirmation
}
