'use client'

import React from 'react';
import { motion } from 'framer-motion';

const skills = ['Confiante', 'Detalhista', 'Calmo', 'Esforçado', 'Liderante', 'Criativo', 'Determinado'];

export default function About() {
    return (
        <section className="bg-gradient-to-br from-TwoGray/30 via-OneGray/20 to-TwoGray/30 py-24 px-6 flex justify-center items-center">
            <div className="max-w-5xl w-full text-center space-y-24">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <h2 className="text-MainWhite text-3xl font-extrabold tracking-wide mb-6 drop-shadow-xl">Quem sou?</h2>
                    <p className="text-MainWhite text-lg leading-relaxed max-w-3xl mx-auto">
                        Desde cedo, fui fascinado pela maneira como a tecnologia transforma tudo ao nosso redor, e desde então venho explorando e me aprofundando no vasto universo da tecnologia.
                    </p>
                </motion.div>

                {/* Habilidades */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <h3 className="text-primaryblue text-3xl font-bold mb-8">Habilidades Pessoais</h3>
                    <motion.ul
                        className="flex flex-wrap justify-center gap-4 p-6 border-2 border-primaryblue/70 rounded-3xl shadow-md bg-white/5 backdrop-blur"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.li
                                key={index}
                                className="text-primaryblue font-semibold px-6 py-3 border border-primaryblue/50 rounded-full hover:bg-primaryblue hover:text-white transition-all duration-300 cursor-pointer"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Objetivos */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <h3 className="text-MainWhite text-3xl font-extrabold mb-6">Objetivos</h3>
                    <motion.div
                        className="border-2 border-primaryblue/70 rounded-3xl max-w-3xl bg-white/5 backdrop-blur p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-MainWhite text-lg leading-relaxed">
                            Busco aprimorar minhas habilidades em qualidade de software, obtendo certificações relevantes, aplicando experiência prática e desenvolvendo no mercado de trabalho. Quero construir uma base sólida, alcançar grandes empresas e me tornar um líder respeitado na indústria tech.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
