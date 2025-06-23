// src/components/Navbar.tsx (ou onde preferir)
"use client"; // Necessário se estiver usando Next.js App Router com hooks (useState, useEffect)

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Use Link do Next.js para navegação interna se apropriado

// Importando ícones de exemplo do React Icons (Font Awesome)
import {
    FaBars, // Hamburger
    FaTimes, // Close (X)
    FaUserAlt, // Sobre mim
    FaLaptopCode, // Tecnologias
    FaCertificate, // Certificações / Formações
    FaBrain, // Experiências e Conquistas (ou FaBrain, FaTasks)
    FaUsers, // Redes Sociais (ou FaShareAlt, FaEnvelope)
    FaDev, // Ícone genérico para o Logo (substitua pelo seu logo real)
} from 'react-icons/fa';
import SvgLogo from '../SvgLogo';

// Itens do menu mobile (poderiam vir de props ou um array de configuração)
const mobileMenuItems = [
    { href: "#about", text: "Sobre mim", icon: <FaUserAlt /> },
    { href: "#technologies", text: "Tecnologias", icon: <FaLaptopCode /> },
    { href: "#certification", text: "Formações", icon: <FaCertificate /> },
    { href: "#skill", text: "Experiências", icon: <FaBrain /> }, // Atualizado
    { href: "#contact", text: "Redes Sociais", icon: <FaUsers /> }, // Atualizado
];

// Itens do menu desktop
const desktopMenuItems = [
    { href: "#about", text: "Sobre Mim" },
    { href: "#technologies", text: "Tecnologias" },
    { href: "#certification", text: "Certificações" },
    // { href: "#jobs", text: "Projetos" },
    { href: "#skill", text: "Experiências" },
    { href: "#contact", text: "Redes" },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null); // Ref para o menu dropdown
    const menuButtonRef = useRef<HTMLButtonElement>(null); // Ref para o botão do menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Efeito para fechar o menu ao clicar fora (mobile)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]); // Executa quando o estado 'isOpen' muda

    // Classes para o fundo com blur e transparência
    // Supondo que 'OneGray' e 'Cardcolor' estão definidos no seu tailwind.config.js
    // Para transparência no bg-OneGray, você pode usar bg-OneGray/80 (Tailwind JIT)
    // ou configurar uma variante com opacidade no seu tema.
    const navbarBgStyle = "bg-OneGray/40 backdrop-blur-lg"; // Ex: 80% opacidade e blur grande
    const mobileMenuBgStyle = "bg-OneGray/100 mt-2 backdrop-blur-md"; // Ex: 95% opacidade e blur médio

    return (
        <div className='flex justify-center items-center print:hidden'> {/* print:hidden para não imprimir a navbar */}
            <div
                className={`mt-4 Navbar rounded-2xl h-20 max-sm:h-16 w-[90%] ${navbarBgStyle} border-b-2 border-Cardcolor shadow-lg flex fixed top-0 z-50 items-center justify-between px-4 sm:px-6 xl:justify-center`}
            >
                {/* Logo e Botão de Menu para Telas Menores (max-xl) */}
                <div className="flex items-center justify-between w-full xl:hidden">
                    <Link href="/" className="text-CDCDCD">

                        <SvgLogo></SvgLogo>

                    </Link>
                    <button
                        ref={menuButtonRef}
                        className="text-[#9c9494] p-2 "
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>

                {/* Menu Dropdown Mobile */}
                {/* Adicionado transition para suavizar a aparição/desaparição */}
                <ul
                    id="mobile-menu"
                    ref={menuRef}
                    className={`xl:hidden fixed left-0 right-0 top-16 max-sm:top-[3.8rem] mx-auto w-[calc(90%-8px)] max-w-md ${mobileMenuBgStyle} rounded-xl shadow-2xl flex flex-col items-center gap-2 py-4 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                        }`}
                >
                    {mobileMenuItems.map((item) => (
                        <li key={item.href} className="w-full px-2">
                            <Link
                                href={item.href}
                                onClick={toggleMenu} // Fecha o menu ao clicar
                                className="flex items-center gap-4 text-CDCDCD p-3 border-primaryblue border-2 rounded-xl hover:bg-primaryblue/20 hover:scale-[1.03] ease-in duration-200 w-full"
                            >
                                <span className="text-xl text-primaryblue">{item.icon}</span>
                                <p className="text-primaryblue font-semibold text-lg w-full">{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Navegação Desktop (xl e acima) */}
                <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
                    <Link href="/" className="text-CDCDCD mr-6 flex-shrink-0">

                        <SvgLogo></SvgLogo>

                    </Link>
                    {desktopMenuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[#9c9494] px-3 py-2 rounded-xl text-base hover:font-medium hover:bg-Cardcolor/30 hover:text-white transition-all ease-in duration-200 hover:scale-[1.03]"
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;