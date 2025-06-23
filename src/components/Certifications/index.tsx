import React from 'react';
import Image from 'next/image'; // Supondo que você use Next.js pela sintaxe do Image
import { motion } from 'framer-motion';

// 1. Centralize os dados dos certificados em um array de objetos.
// Isso torna o código mais limpo e fácil de manter.
const certificationsData = [
  {
    href: "https://portal.ifpe.edu.br/igarassu/",
    imageSrc: "/images/IFPE.png",
    imageWidth: 178,
    imageHeight: 140,
    imageMargin: 'm-4',
    title: "IFPE - Recife",
    description: "Análise e Desenvolvimento de Sistemas",
    status: "Graduando",
    hours: null, // Sem horas específicas
  },
  {
    href: "https://www.instagram.com/ete_pastorisaacof/",
    imageSrc: "/images/ETE.png",
    imageWidth: 178,
    imageHeight: 140,
    imageMargin: 'm-4 my-12',
    title: "ETE - PIMR",
    description: "Técnico em Redes de Computadores",
    status: "Concluído",
    hours: "1000H+",
  },
  {
    href: "https://www.instagram.com/datasulcursos/",
    imageSrc: "/images/DATASUL.png",
    imageWidth: 120,
    imageHeight: 120,
    imageMargin: 'm-4 my-6',
    title: "Data Sul Cursos",
    description: "Design Gráfico",
    status: "Concluído",
    hours: "144H",
  },
  {
    href: "https://www.instagram.com/datasulcursos/",
    imageSrc: "/images/DATASUL.png",
    imageWidth: 120,
    imageHeight: 120,
    imageMargin: 'm-4 my-6',
    title: "Data Sul Cursos",
    description: "Manutenção de Micro Computadores",
    status: "Concluído",
    hours: "144H",
  },
  {
    href: "https://www.dio.me/users/elisonfelipe16",
    imageSrc: "/images/DIO.png",
    imageWidth: 200,
    imageHeight: 200,
    imageMargin: 'm-4 my-12',
    title: "DIO.ME",
    description: "+ de 90 Certificados",
    status: "", // Sem status
    hours: null,
  },
];

// Componente do ícone de relógio para reutilização
const ClockIcon = () => (
  <svg width="25" height="25" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_68_7)"><path d="M59.5 28C59.5 43.1877 47.1877 55.5 32 55.5C16.8122 55.5 4.5 43.1877 4.5 28C4.5 12.8122 16.8122 0.5 32 0.5C47.1877 0.5 59.5 12.8122 59.5 28ZM9.51707 28C9.51707 40.417 19.583 50.483 32 50.483C44.417 50.483 54.483 40.417 54.483 28C54.483 15.583 44.417 5.51707 32 5.51707C19.583 5.51707 9.51707 15.583 9.51707 28Z" fill="white" /><path d="M32 10.5C30.6192 10.5 29.5 11.6193 29.5 13V29.1667C29.5 29.1667 29.5 29.8185 29.8168 30.3088C30.0288 30.7245 30.3592 31.0858 30.7935 31.3365L42.343 38.0047C43.5387 38.695 45.0677 38.2853 45.758 37.0895C46.4482 35.8938 46.0387 34.3648 44.843 33.6745L34.5 27.703V13C34.5 11.6193 33.3807 10.5 32 10.5Z" fill="white" /></g><defs><filter id="filter0_d_68_7" x="0.5" y="0.5" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_7" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_7" result="shape" /></filter></defs>
  </svg>
);


export default function Certification() {
  // 2. Defina as variantes da animação
  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Container para os cards, para animá-los em sequência
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Atraso de 0.2s entre cada card
      }
    }
  };

  // Animação para cada card individual
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id='certification'>
      <div className="AboutMe bg-gradient-to-r from-TwoGray/20 via-OneGray/20 to-TwoGray/20 py-20 px-4 flex justify-center items-center">
        <div className='max-w-[1100px] '>
          <motion.p
            className='text-MainWhite text-3xl font-bold mb-20 text-center'
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            Principais Certificações
          </motion.p>

          {/* 3. Aplique as variantes de animação ao container dos cards */}
          <motion.div
            className='flex flex-wrap justify-center items-center gap-8'
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* 4. Use .map() para renderizar cada card com sua animação */}
            {certificationsData.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer" // Boa prática de segurança para links externos
                variants={cardVariant} // Anima cada card individualmente
                className='mb-10' // Adicionado para espaçamento inferior
              >
                <div className='Card bg-Cardcolor w-80 h-96 rounded-3xl flex flex-col items-center p-4 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-500/10'>
                  <div className='flex-shrink-0 h-40 flex items-center'>
                    <Image className={cert.imageMargin} src={cert.imageSrc} alt={`${cert.title} Logo`} width={cert.imageWidth} height={cert.imageHeight} />
                  </div>
                  <div className='flex flex-col justify-between flex-grow w-full'>
                    <div>
                      <p className='text-MainWhite text-xl font-bold pt-2 pb-2'>{cert.title}</p>
                      <p className='text-MainWhite text-md font-extralight min-h-[48px]'>{cert.description}</p>
                    </div>
                    <div className='mt-auto'>
                      {cert.hours && (
                        <div className='flex justify-center items-center gap-2 mb-3'>
                          <ClockIcon />
                          <span className='font-semibold text-MainWhite'>{cert.hours}</span>
                        </div>
                      )}
                      {cert.status && (
                        <p className='text-MainWhite text-md font-bold'>{cert.status}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}