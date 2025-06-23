import React from 'react';
import { motion } from 'framer-motion';

// 1. Centralizamos os dados em um array para facilitar a manutenção e a renderização.
const experiencesData = [
    {
        id: 1,
        href: "https://www.qca.adv.br/",
        iconType: 'image',
        iconSrc: './images/qca.png',
        title: "Queiroz Cavalcanti Advocacia",
        subtitle: "Estagiário em Desenvolvimento",
        description: "Desenvolvimento de aplicações e Machine Learning.",
        status: "Contrato Ativo",
        statusColor: "text-lime-600"
    },
    {
        id: 2,
        href: "https://www.qca.adv.br/",
        iconType: 'image',
        iconSrc: './images/qca.png',
        title: "Queiroz Cavalcanti Advocacia",
        subtitle: "Jovem Aprendiz",
        description: "Suporte ao usuário, administração de sistemas, atendimento à chamados, configuração de máquinas etc...",
        status: null
    },
    {
        id: 3,
        href: null, // Sem link para a conquista
        iconType: 'svg',
        iconSrc: '', 
        title: "Demoweek",
        subtitle: "Campeão - 1º Lugar",
        description: "Capitão do campeonato de carro seguidor de linha usando C++ e hardware Arduino. Docentes: David Cavalcanti & Ramon Motta.",
        status: null
    }
];

// Componente para o ícone SVG, para manter o JSX principal limpo.
const DemoWeekIcon = () => (
    <svg className='mt-4' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3581 67L26.2838 52.4629" stroke="#CDCDCD" strokeWidth="4.775" strokeMiterlimit="10" />
        <path d="M14.6419 67H55.3581" stroke="#CDCDCD" strokeWidth="4.775" strokeMiterlimit="10" />
        <path d="M61.1791 3H8.82095C5.60613 3 3 5.60612 3 8.82093V46.6417C3 49.8566 5.60613 52.4627 8.82095 52.4627H61.1791C64.3939 52.4627 67 49.8566 67 46.6417V8.82093C67 5.60612 64.3939 3 61.1791 3Z" stroke="#CDCDCD" strokeWidth="4.775" strokeMiterlimit="10" />
        <path d="M46.4286 67L43.5333 52.4629" stroke="#CDCDCD" strokeWidth="4.775" strokeMiterlimit="10" />
    </svg>
);


export default function Jobs() {

    // 2. Definimos as mesmas variantes de animação para manter a consistência.
    const titleVariant = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Efeito cascata para os cards
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };


    return (
        <section id='skill'>
            {/* Removi a classe 'animate__wobble' para usar a animação mais suave da framer-motion */}
            <div className="AboutMe pt-20 pb-40 px-4">
                <motion.p
                    className='text-MainWhite text-3xl font-bold mb-20 text-center'
                    variants={titleVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Experiências e Conquistas
                </motion.p>

                <motion.div
                    className='flex flex-wrap justify-center items-stretch gap-8' // items-stretch faz os cards terem a mesma altura
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* 3. Mapeamos os dados para renderizar cada card de forma dinâmica. */}
                    {experiencesData.map((item) => {
                        const CardContent = (
                            <motion.div
                                key={item.id}
                                variants={cardVariant}
                                className='h-full w-80 border-2 border-solid rounded-3xl border-primaryblue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primaryblue/20 flex flex-col'
                            >
                                <div className='flex flex-col justify-start items-center p-4 text-center flex-grow'>
                                    <div className="h-24 flex items-center">
                                        {item.iconType === 'image' ? (
                                            <img className='my-6 w-[100px]' src={item.iconSrc} alt={`${item.title} Logo`} />
                                        ) : (
                                            <DemoWeekIcon />
                                        )}
                                    </div>
                                    <p className='text-MainWhite text-xl pt-4 font-bold'>{item.title}</p>
                                    <p className='text-MainWhite text-sm pt-2 font-light'>{item.subtitle}</p>
                                    <p className='text-MainWhite text-md my-6 font-extralight mx-4 flex-grow'>{item.description}</p>
                                    {item.status && (
                                        <p className={`${item.statusColor} text-md font-bold mt-auto`}>{item.status}</p>
                                    )}
                                </div>
                            </motion.div>
                        );

                        // Renderiza o card dentro de uma tag <a> se houver um link
                        return item.href ? (
                            <a key={item.id} href={item.href} target='_blank' rel="noopener noreferrer">
                                {CardContent}
                            </a>
                        ) : (
                            <div key={item.id}>
                                {CardContent}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}