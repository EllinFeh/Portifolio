import React from 'react'

export default function Footer() {
    return (
        < div className='flex justify-center items-center' >
            <div className='bg-primaryblue w-full flex flex-col items-center justify-center'>
                <svg className='m-4' width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.8631 0C12.0262 0 0 12.0262 0 26.8631C0 29.835 0.48375 32.6944 1.37437 35.3662C6.07125 32.535 10.2675 30.5494 13.9575 29.28C9.77437 29.9362 6.1875 32.0456 1.10625 29.745C4.79812 26.4975 11.3644 22.0425 17.3137 21.3619C20.4244 18.8325 25.2844 16.2187 27.8044 17.0006C31.3725 13.8562 35.7581 9.85312 40.4531 6.96937C41.7019 8.85937 42.4556 11.175 41.9212 13.7419C32.5181 16.1062 34.7062 31.1662 43.5 21.6319C44.2425 23.16 44.6006 24.75 44.5631 26.4769C40.74 30.435 36.7275 33.8531 32.6362 36.765C32.6906 39.5719 31.9781 42.9562 30.4106 46.6875C29.7506 48.2569 29.5537 50.9456 33.0862 53.0006C44.9194 50.1919 53.7244 39.5569 53.7244 26.8631C53.7244 12.0262 41.6962 0 26.8612 0H26.8631Z" fill="#1B1E23" />
                </svg>

                <p className='text-OneGray text-sm w-full text-center pb-8 '> Desenvolvido por <span className='font-extrabold'>Elison Felipe Santos.</span></p>
                <p className='text-OneGray text-xs font-bold max-md:mx-8 text-center max-w-screen-xl'>
                    © 2024 O conteúdo deste site, incluindo textos, imagens, vídeos e gráficos, é protegido por leis de direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição ou utilização não autorizada do conteúdo sem permissão prévia por escrito.
                    O objetivo deste site é servir como um portfólio pessoal, oferecendo uma plataforma para exibir e destacar o trabalho criativo e as realizações do tal. Com uma variedade de projetos, designs ou qualquer outra forma de expressão criativa, este site é projetado para oferecer aos visitantes uma visão abrangente do talento e da experiência do tal.
                    Para mais informações, entre em contato através do email: elisonfelipe16@gmail.com </p>
                <p className='text-OneGray text-xs font-extrabold w-full text-center py-8 '>Recife Pernambuco Brasil.</p>
            </div>
        </div >)
}
