import React, { useState } from 'react';
import {
    Sofa, Armchair, Bed, BedDouble,
    Table, DoorClosed, Library, Archive,
    Refrigerator, Tv, Package, Trash2,
    Sparkles, Plus, Minus, ArrowLeft,
    Check, Waves, Box,
    Monitor, Printer, Server, Briefcase, Calculator, Building,
    Microwave, UtensilsCrossed, WashingMachine, Loader, Plug
} from 'lucide-react';

interface ProjectBuilderProps {
    initialService: string;
    onBack: () => void;
}

enum Step {
    Inventory = 0,
    Logistics = 1,
    Schedule = 2,
    Finalize = 3
}

export const ProjectBuilder: React.FC<ProjectBuilderProps> = ({ initialService, onBack }) => {
    const [step, setStep] = useState<Step>(Step.Inventory);
    const [items, setItems] = useState<{ [key: string]: number }>({
        "Sofá de 2 Lugares": 0,
        "Sofá de 3+ Lugares": 0,
        "Poltrona": 0,
        "Mesa de Jantar": 0,
        "Cadeira": 0,
        "Cama de Solteiro": 0,
        "Cama de Casal": 0,
        "Armário/Roupeiro": 0,
        "Cómoda": 0,
        "Estante": 0,
        "Frigorífico": 0,
        "Máquina Lavar": 0,
        "Televisão": 0,
        "Caixas (Pequenas)": 0,
        "Caixas (Grandes)": 0,
        "Sacos de Lixo": 0,
        // Appliances
        "Micro-ondas": 0,
        "Forno/Fogão": 0,
        "Máquina Loiça": 0,
        "Máquina Secar": 0,
        "Pequenos Eletrodomésticos": 0,
        // Office specific items
        "Mesa de Escritório": 0,
        "Cadeira de Escritório": 0,
        "Arquivo/Cajonera": 0,
        "Impressora/Copiadora": 0,
        "Computador/Monitor": 0,
        "Servidor/Rack": 0,
        "Quadro Branco": 0
    });

    // Base prices for estimation (in CHF)
    const ITEM_PRICES: { [key: string]: number } = {
        "Sofá de 2 Lugares": 80,
        "Sofá de 3+ Lugares": 120,
        "Poltrona": 50,
        "Mesa de Jantar": 60,
        "Cadeira": 15,
        "Cama de Solteiro": 50,
        "Cama de Casal": 90,
        "Armário/Roupeiro": 100,
        "Cómoda": 60,
        "Estante": 40,
        "Frigorífico": 50,
        "Máquina Lavar": 40,
        "Televisão": 20,
        "Caixas (Pequenas)": 5,
        "Caixas (Grandes)": 8,
        "Sacos de Lixo": 3,
        "Micro-ondas": 15,
        "Forno/Fogão": 40,
        "Máquina Loiça": 40,
        "Máquina Secar": 40,
        "Pequenos Eletrodomésticos": 10,
        "Mesa de Escritório": 50,
        "Cadeira de Escritório": 20,
        "Arquivo/Cajonera": 30,
        "Impressora/Copiadora": 40,
        "Computador/Monitor": 25,
        "Servidor/Rack": 150,
        "Quadro Branco": 20
    };

    const [customItemName, setCustomItemName] = useState('');
    const [logistics, setLogistics] = useState({ floor: '0', elevator: true, parking: true });
    const [schedule, setSchedule] = useState({ date: '', time: '' });
    const [contact, setContact] = useState({ name: '', phone: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateItem = (name: string, delta: number) => {
        setItems(prev => ({
            ...prev,
            [name]: Math.max(0, (prev[name] || 0) + delta)
        }));
    };

    const addCustomItem = () => {
        if (!customItemName.trim()) return;
        const name = customItemName.trim();
        if (items[name] !== undefined) {
            updateItem(name, 1);
        } else {
            setItems(prev => ({ ...prev, [name]: 1 }));
        }
        setCustomItemName('');
    };

    const next = () => setStep(s => s + 1);
    const back = () => setStep(s => s - 1);

    const totalItems = (Object.values(items) as number[]).reduce((a: number, b: number) => a + b, 0);

    const calculateTotal = () => {
        let total = 0;
        Object.entries(items).forEach(([name, quantity]) => {
            const price = ITEM_PRICES[name] || 20; // Default fallback price
            total += price * quantity;
        });

        // Logistics multipliers
        if (logistics.elevator) total *= 0.9; // Discount for elevator
        if (logistics.floor !== 'R/C' && !logistics.elevator) {
            const floorNum = parseInt(logistics.floor.replace('º', '')) || 0;
            total += floorNum * 50; // Extra charge per floor without elevator
        }

        return Math.round(total);
    };

    const estimatedTotal = calculateTotal();

    const handleSubmit = () => {
        // Simulação de envio
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-6 animate-reveal">
                <div className="max-w-xl w-full text-center bg-white p-16 rounded-[60px] shadow-2xl border border-zinc-100">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-serif italic text-zinc-950 mb-4">Pedido Recebido.</h2>
                    <p className="text-zinc-500 mb-10 leading-relaxed text-lg">
                        Merci, {contact.name.split(' ')[0]}. Nossa equipe de logística já está analisando os detalhes para seu <strong>{initialService}</strong>. Entraremos em contacto em breve.
                    </p>
                    <button
                        onClick={onBack}
                        className="bg-zinc-950 text-white px-10 py-5 rounded-full font-bold hover:bg-emerald-600 transition-all uppercase tracking-widest text-xs"
                    >
                        Voltar para a Home
                    </button>
                </div>
            </div>
        );
    }

    // Helper to categorize/iconify items
    const getIcon = (name: string) => {
        const props = { className: "w-10 h-10 md:w-12 md:h-12 text-zinc-900 group-hover:text-emerald-600 transition-colors", strokeWidth: 1.5 };

        switch (name) {
            case "Sofá de 2 Lugares": return <Sofa {...props} />;
            case "Sofá de 3+ Lugares": return <Sofa {...props} className="w-12 h-12 md:w-14 md:h-14 text-zinc-900 group-hover:text-emerald-600 transition-colors" />;
            case "Poltrona": return <Armchair {...props} />;
            case "Mesa de Jantar": return <Table {...props} />;
            case "Cadeira": return <Armchair {...props} className="w-8 h-8 md:w-10 md:h-10 text-zinc-900 group-hover:text-emerald-600 transition-colors" />; // Fallback since Chair might not exist
            case "Cama de Solteiro": return <Bed {...props} />;
            case "Cama de Casal": return <BedDouble {...props} />;
            case "Armário/Roupeiro": return <DoorClosed {...props} />;
            case "Cómoda": return <Archive {...props} />;
            case "Estante": return <Library {...props} />;
            case "Frigorífico": return <Refrigerator {...props} />;
            case "Máquina Lavar": return <Waves {...props} />;
            case "Televisão": return <Tv {...props} />;
            case "Caixas (Pequenas)": return <Package {...props} />;
            case "Caixas (Grandes)": return <Box {...props} />;
            case "Sacos de Lixo": return <Trash2 {...props} />;
            // Appliances
            case "Micro-ondas": return <Microwave {...props} />;
            case "Forno/Fogão": return <UtensilsCrossed {...props} />;
            case "Máquina Loiça": return <WashingMachine {...props} />;
            case "Máquina Secar": return <Loader {...props} />;
            case "Pequenos Eletrodomésticos": return <Plug {...props} />;
            // Office Items
            case "Mesa de Escritório": return <Table {...props} />;
            case "Cadeira de Escritório": return <Armchair {...props} />;
            case "Arquivo/Cajonera": return <Archive {...props} />;
            case "Impressora/Copiadora": return <Printer {...props} />;
            case "Computador/Monitor": return <Monitor {...props} />;
            case "Servidor/Rack": return <Server {...props} />;
            case "Quadro Branco": return <Briefcase {...props} />;
            default: return <Sparkles {...props} className="w-10 h-10 md:w-12 md:h-12 text-emerald-500" />;
        }
    };

    return (
        <div className="h-full flex flex-col md:flex-row bg-white">
            {/* Sidebar de Progresso (Fixa no Desktop) */}
            <aside className="hidden md:flex w-[350px] bg-zinc-950 text-white p-8 md:p-12 flex-col justify-between shrink-0">
                <div>
                    <div className="flex items-center gap-3 mb-12 md:mb-16 cursor-pointer" onClick={onBack}>
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-xs font-bold">AA</div>
                        <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">Project Builder</span>
                    </div>

                    <div className="space-y-8 md:space-y-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 flex md:block gap-8 md:gap-0">
                        {[
                            { id: Step.Inventory, label: "Inventário", desc: "Itens a remover" },
                            { id: Step.Logistics, label: "Logística", desc: "Acessibilidade" },
                            { id: Step.Schedule, label: "Agenda", desc: "Data e hora" },
                            { id: Step.Finalize, label: "Finalização", desc: "Seus contactos" }
                        ].map((s) => (
                            <div key={s.id} className={`flex items-start gap-5 transition-all duration-500 shrink-0 ${step >= s.id ? 'opacity-100 cursor-pointer' : 'opacity-20'} ${step > s.id ? 'hover:opacity-80' : ''}`} onClick={() => step > s.id && setStep(s.id)}>
                                <div className={`hidden md:block w-1 h-12 rounded-full transition-all duration-700 ${step === s.id ? 'bg-emerald-500 scale-y-110 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : step > s.id ? 'bg-zinc-700' : 'bg-zinc-800'}`}></div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Passo 0{s.id + 1}</p>
                                    <p className="font-bold text-lg">{s.label}</p>
                                    <p className="text-xs text-zinc-500">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 md:mt-20 pt-10 border-t border-white/5 hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-4">Resumo do Pedido</p>
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                            <span className="text-zinc-500">Serviço:</span>
                            <span className="text-emerald-500 font-bold">{initialService}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-zinc-500">Itens:</span>
                            <span>{totalItems} selecionados</span>
                        </div>
                        <div className="flex justify-between text-xs border-t border-white/10 pt-2 mt-2">
                            <span className="text-zinc-500">Estimativa:</span>
                            <span className="text-emerald-500 font-bold text-lg">{estimatedTotal} CHF</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Progress Bar (Visible only on mobile) */}
            <div className="md:hidden bg-zinc-950 text-white px-6 py-4 shrink-0 flex items-center justify-between shadow-md z-20">
                <div className="flex items-center gap-3" onClick={onBack}>
                    <ArrowLeft size={20} className="text-zinc-400" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Estimativa</span>
                        <span className="text-sm font-bold text-emerald-400">{estimatedTotal} CHF</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Passo {step + 1} de 4</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className={`h-1 w-6 rounded-full transition-colors ${step >= i ? 'bg-emerald-500' : 'bg-zinc-800'}`}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Área de Conteúdo */}
            <main className="flex-1 bg-white flex flex-col min-h-0 overflow-hidden relative">
                {/* Header de Ação */}
                {/* Header de Ação */}
                <header className="p-4 md:p-12 flex justify-between items-center border-b border-zinc-50 shrink-0">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-3 text-zinc-400 hover:text-zinc-950 transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer"
                    >
                        <span className="text-lg">←</span> <span className="inline">Sair</span>
                    </button>
                    <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em] hidden sm:block">
                        Switzerland Standards
                    </div>
                </header>

                {/* Formulário Dinâmico */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-4xl mx-auto pt-10 pb-40 px-6 md:py-24 md:px-8">

                        {step === Step.Inventory && (
                            <div className="animate-reveal">
                                <h3 className="text-5xl md:text-6xl font-medium mb-6 text-zinc-950 tracking-tighter">O que vamos <br /><span className="font-serif italic text-emerald-600 underline decoration-1 underline-offset-8">remover?</span></h3>
                                <p className="text-zinc-400 text-lg mb-10 max-w-xl font-light">Especifique a quantidade aproximada para que possamos dimensionar a equipa e o transporte ideal.</p>

                                {/* Custom Item Input */}
                                <div className="mb-10 md:mb-14 p-1.5 md:p-2 bg-zinc-50 border border-zinc-200 rounded-[30px] flex items-center gap-2 shadow-inner max-w-xl">
                                    <input
                                        value={customItemName}
                                        onChange={(e) => setCustomItemName(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && addCustomItem()}
                                        placeholder="Item não listado..."
                                        className="flex-grow bg-transparent px-4 md:px-6 py-3 md:py-4 outline-none text-zinc-800 placeholder:text-zinc-400 font-medium text-sm md:text-base w-full min-w-0"
                                    />
                                    <button
                                        onClick={addCustomItem}
                                        className="bg-zinc-950 text-white w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 rounded-full font-bold hover:bg-emerald-600 transition-all uppercase tracking-widest text-xs cursor-pointer shrink-0 flex items-center justify-center shadow-lg shadow-zinc-900/10"
                                    >
                                        <span className="hidden md:inline">Adicionar</span>
                                        <span className="md:hidden"><Plus size={20} /></span>
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {Object.keys(items)
                                        .filter(name => {
                                            if (initialService === 'Débarras de électroménager') {
                                                const allowed = [
                                                    "Frigorífico", "Máquina Lavar", "Televisão",
                                                    "Micro-ondas", "Forno/Fogão", "Máquina Loiça",
                                                    "Máquina Secar", "Pequenos Eletrodomésticos"
                                                ];
                                                const defaultsToExclude = [
                                                    "Sofá de 2 Lugares", "Sofá de 3+ Lugares", "Poltrona",
                                                    "Mesa de Jantar", "Cadeira",
                                                    "Cama de Solteiro", "Cama de Casal",
                                                    "Armário/Roupeiro", "Cómoda", "Estante",
                                                    "Caixas (Pequenas)", "Caixas (Grandes)", "Sacos de Lixo",
                                                    "Mesa de Escritório", "Cadeira de Escritório", "Arquivo/Cajonera",
                                                    "Impressora/Copiadora", "Computador/Monitor", "Servidor/Rack", "Quadro Branco"
                                                ];
                                                if (allowed.includes(name)) return true;
                                                if (defaultsToExclude.includes(name)) return false;
                                                return true;
                                            }

                                            // Filtering for Offices
                                            if (initialService === 'Escritórios e Empresas') {
                                                const allowed = [
                                                    "Mesa de Escritório",
                                                    "Cadeira de Escritório",
                                                    "Arquivo/Cajonera",
                                                    "Impressora/Copiadora",
                                                    "Computador/Monitor",
                                                    "Servidor/Rack",
                                                    "Quadro Branco",
                                                    "Estante", // Bookshelves common in offices
                                                    "Caixas (Pequenas)", "Caixas (Grandes)", "Sacos de Lixo",
                                                    "Televisão", // Meeting rooms
                                                    "Frigorífico" // Break rooms
                                                ];
                                                // Exclude typical home items
                                                const defaultsToExclude = [
                                                    "Sofá de 2 Lugares", "Sofá de 3+ Lugares", "Poltrona",
                                                    "Mesa de Jantar", "Cadeira",
                                                    "Cama de Solteiro", "Cama de Casal",
                                                    "Armário/Roupeiro", "Cómoda",
                                                    "Máquina Lavar"
                                                ];
                                                if (allowed.includes(name)) return true;
                                                if (defaultsToExclude.includes(name)) return false;
                                                return true;
                                            }

                                            // Default: Show residential items, hide office specific ones unless mixed use is implied?
                                            // For simpler UI, let's hide explicitly office items for standard residential services if not relevant,
                                            // or just show everything else.
                                            // Let's exclude purely office items for residential services to keep it clean.
                                            const officeItems = [
                                                "Mesa de Escritório", "Cadeira de Escritório", "Arquivo/Cajonera",
                                                "Impressora/Copiadora", "Computador/Monitor", "Servidor/Rack", "Quadro Branco"
                                            ];
                                            if (officeItems.includes(name)) return false;

                                            return true;
                                        })
                                        .map(name => (
                                            <div key={name} className="p-4 md:p-8 rounded-[24px] md:rounded-[30px] border border-zinc-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group relative overflow-hidden flex flex-row md:flex-col items-center md:items-stretch justify-between h-auto md:h-[280px] gap-4 md:gap-0">

                                                {/* Icon & Count Badge */}
                                                <div className="flex md:w-full justify-between items-start shrink-0">
                                                    <div className="p-3 md:p-4 rounded-2xl bg-zinc-50 group-hover:bg-emerald-50 transition-colors">
                                                        {getIcon(name)}
                                                    </div>
                                                    {items[name] > 0 && (
                                                        <span className="hidden md:inline-block font-bold text-lg text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl">
                                                            {items[name]}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Name & Controls */}
                                                <div className="flex-grow flex flex-col md:block justify-between h-full md:h-auto pl-2 md:pl-0 min-w-0">
                                                    <div className="flex justify-between items-center md:block mb-1 md:mb-6">
                                                        <p className="font-bold text-zinc-900 text-sm md:text-lg leading-tight truncate md:whitespace-normal pr-2">{name}</p>
                                                        {/* Mobile Badge */}
                                                        {items[name] > 0 && (
                                                            <span className="md:hidden font-bold text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg shrink-0">
                                                                {items[name]}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center gap-2 justify-end md:justify-start">
                                                        <button
                                                            onClick={() => updateItem(name, -1)}
                                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-900 cursor-pointer"
                                                        >
                                                            <Minus size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => updateItem(name, 1)}
                                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-zinc-900/10 group-hover:shadow-emerald-600/20 cursor-pointer"
                                                        >
                                                            <Plus size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )}

                        {step === Step.Logistics && (
                            <div className="animate-reveal">
                                <h3 className="text-5xl md:text-6xl font-medium mb-6 text-zinc-950 tracking-tighter">Detalhes de <br /><span className="font-serif italic text-emerald-600 underline decoration-1 underline-offset-8">Acesso.</span></h3>
                                <p className="text-zinc-400 text-lg mb-16 max-w-xl font-light">A acessibilidade influencia o tempo de execução e os equipamentos necessários.</p>

                                <div className="space-y-12">
                                    <div className="p-8 md:p-12 rounded-[50px] bg-zinc-50 border border-zinc-100">
                                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Piso do Imóvel</p>
                                        <div className="flex flex-wrap gap-4">
                                            {['R/C', '1º', '2º', '3º', '4º', '5º', '6º+'].map(f => (
                                                <button
                                                    key={f}
                                                    onClick={() => setLogistics({ ...logistics, floor: f })}
                                                    className={`min-w-[80px] md:min-w-[100px] h-20 md:h-24 rounded-3xl font-bold transition-all border-2 text-xl cursor-pointer ${logistics.floor === f ? 'bg-zinc-950 text-white border-zinc-950 scale-105 shadow-2xl' : 'bg-white text-zinc-400 border-zinc-100 hover:border-emerald-200'
                                                        }`}
                                                >
                                                    {f}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                                        <button
                                            onClick={() => setLogistics({ ...logistics, elevator: !logistics.elevator })}
                                            className={`relative p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-2 text-left transition-all duration-300 group overflow-hidden active:scale-95 ${logistics.elevator
                                                ? 'border-emerald-500 bg-emerald-50 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]'
                                                : 'border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${logistics.elevator ? 'bg-emerald-500 text-white scale-110 rotate-0 shadow-lg shadow-emerald-500/30' : 'bg-zinc-100 text-zinc-400 rotate-0'
                                                    }`}>
                                                    {logistics.elevator ? '✨' : '🪜'}
                                                </div>
                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${logistics.elevator
                                                    ? 'border-emerald-500 bg-emerald-500 text-white scale-100 opacity-100'
                                                    : 'border-zinc-200 bg-transparent text-transparent scale-90 opacity-50'
                                                    }`}>
                                                    <Check size={16} strokeWidth={4} />
                                                </div>
                                            </div>

                                            <h4 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${logistics.elevator ? 'text-emerald-950' : 'text-zinc-900'}`}>
                                                {logistics.elevator ? 'Com Elevador' : 'Sem Elevador'}
                                            </h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                                {logistics.elevator
                                                    ? 'Agiliza o transporte e reduz o tempo.'
                                                    : 'Necessário prever esforço extra.'}
                                            </p>
                                        </button>

                                        <button
                                            onClick={() => setLogistics({ ...logistics, parking: !logistics.parking })}
                                            className={`relative p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-2 text-left transition-all duration-300 group overflow-hidden active:scale-95 ${logistics.parking
                                                ? 'border-emerald-500 bg-emerald-50 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]'
                                                : 'border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${logistics.parking ? 'bg-emerald-500 text-white scale-110 rotate-0 shadow-lg shadow-emerald-500/30' : 'bg-zinc-100 text-zinc-400 rotate-0'
                                                    }`}>
                                                    {logistics.parking ? '🚛' : '🏃'}
                                                </div>
                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${logistics.parking
                                                    ? 'border-emerald-500 bg-emerald-500 text-white scale-100 opacity-100'
                                                    : 'border-zinc-200 bg-transparent text-transparent scale-90 opacity-50'
                                                    }`}>
                                                    <Check size={16} strokeWidth={4} />
                                                </div>
                                            </div>

                                            <h4 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${logistics.parking ? 'text-emerald-950' : 'text-zinc-900'}`}>
                                                {logistics.parking ? 'Estacionamento' : 'Difícil Acesso'}
                                            </h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                                {logistics.parking
                                                    ? 'Vaga disponível próxima à porta.'
                                                    : 'Distância maior que 50m do imóvel.'}
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === Step.Schedule && (
                            <div className="animate-reveal">
                                <h3 className="text-5xl md:text-6xl font-medium mb-6 text-zinc-950 tracking-tighter">Quando <br /><span className="font-serif italic text-emerald-600 underline decoration-1 underline-offset-8">chegamos?</span></h3>
                                <p className="text-zinc-400 text-lg mb-16 max-w-xl font-light">Selecione o seu horário de preferência. Confirmaremos a disponibilidade em minutos.</p>

                                <div className="grid lg:grid-cols-2 gap-16">
                                    <div className="bg-zinc-50 rounded-[50px] p-12 border border-zinc-100 shadow-inner">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6 block">Data da Visita/Trabalho</label>
                                        <input
                                            type="date"
                                            className="w-full bg-white p-8 rounded-[30px] outline-none border border-zinc-100 font-bold text-zinc-900 text-2xl shadow-sm focus:border-emerald-500 transition-colors"
                                            onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-6 block">Janela de Horário</label>
                                        <div className="grid grid-cols-1 gap-4">
                                            {['08:00 - 10:00 (Manhã cedo)', '10:00 - 12:00 (Fim da manhã)', '14:00 - 16:00 (Início tarde)', '16:00 - 18:00 (Final do dia)'].map(t => (
                                                <button
                                                    key={t}
                                                    onClick={() => setSchedule({ ...schedule, time: t })}
                                                    className={`p-8 rounded-[30px] font-bold transition-all border-2 text-left flex justify-between items-center cursor-pointer ${schedule.time === t ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xl scale-[1.02]' : 'bg-zinc-50 text-zinc-400 border-zinc-100 hover:border-emerald-100'
                                                        }`}
                                                >
                                                    <span className="text-lg">{t}</span>
                                                    {schedule.time === t && (
                                                        <div className="bg-white/20 p-2 rounded-full">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === Step.Finalize && (
                            <div className="animate-reveal">
                                <h3 className="text-5xl md:text-6xl font-medium mb-6 text-zinc-950 tracking-tighter">Último passo, <br /><span className="font-serif italic text-emerald-600 underline decoration-1 underline-offset-8">quem é você?</span></h3>
                                <p className="text-zinc-400 text-lg mb-16 max-w-xl font-light">Para onde devemos enviar o orçamento formal e as informações de agendamento?</p>

                                <div className="max-w-2xl space-y-8">
                                    <div className="group relative">
                                        <input
                                            placeholder="Nome Completo"
                                            className="w-full p-8 bg-zinc-50 rounded-[35px] outline-none focus:bg-white border-2 border-transparent focus:border-emerald-500 transition-all font-medium text-xl shadow-inner group-hover:bg-zinc-100/50"
                                            onChange={(e) => setContact({ ...contact, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <input
                                            placeholder="Telemóvel"
                                            className="w-full p-8 bg-zinc-50 rounded-[35px] outline-none focus:bg-white border-2 border-transparent focus:border-emerald-500 transition-all font-medium text-xl shadow-inner group-hover:bg-zinc-100/50"
                                            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                        />
                                        <input
                                            placeholder="E-mail"
                                            type="email"
                                            className="w-full p-8 bg-zinc-50 rounded-[35px] outline-none focus:bg-white border-2 border-transparent focus:border-emerald-500 transition-all font-medium text-xl shadow-inner group-hover:bg-zinc-100/50"
                                            onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="p-8 rounded-[40px] bg-emerald-50 border border-emerald-100 flex items-start gap-5">
                                        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shrink-0">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <p className="text-emerald-800 text-sm leading-relaxed">
                                            Ao enviar, você receberá uma cópia deste resumo no seu e-mail e um especialista entrará em contato via WhatsApp para os passos finais.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer de Navegação da Página */}
                <footer className="p-4 md:p-12 border-t border-zinc-50 flex justify-between items-center bg-white shrink-0 sticky bottom-0 z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:shadow-none">
                    <div className="hidden md:flex gap-10">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Resumo</span>
                            <span className="text-sm font-bold text-zinc-950">{totalItems} Itens • {logistics.floor} Piso</span>
                        </div>
                        <div className="flex flex-col border-l border-zinc-100 pl-10">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Data Estimada</span>
                            <span className="text-sm font-bold text-zinc-950">{schedule.date || 'A definir'}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        {step > 0 && (
                            <button
                                onClick={back}
                                className="px-6 md:px-10 py-4 md:py-6 rounded-full text-zinc-400 font-bold hover:text-zinc-950 transition-colors uppercase tracking-widest text-xs cursor-pointer bg-zinc-50 md:bg-transparent"
                            >
                                Voltar
                            </button>
                        )}
                        <button
                            onClick={step === Step.Finalize ? handleSubmit : next}
                            disabled={step === Step.Finalize && (!contact.name || !contact.phone)}
                            className="flex-grow md:flex-none bg-zinc-950 text-white px-8 md:px-14 py-4 md:py-6 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] uppercase tracking-widest text-xs disabled:opacity-30 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                        >
                            {step === Step.Finalize ? 'Enviar' : 'Próximo'}
                        </button>
                    </div>
                </footer>
            </main>
        </div>
    );
};
