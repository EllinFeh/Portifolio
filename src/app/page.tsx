import 'animate.css';
import Button from './button';
import Image from 'next/image';

export default function AllPage() {
  <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  return (
    //A main pega todo o conteudo da página, e serve apenas para animação geral de aparição
    <main className='animate__animated animate__fadeIn animate__slow'>
      {/* Nav bar completa */}
      <div className='max-xl:hidden Navbar animate__animated animate__fadeInDown animate__delay-700ms h-20 bg-OneGray flex justify-center'>
        <nav className='flex items-center '>
          <Button text="Sobre Mim" />
          <Button text="Tecnologias" />
          <Button text="Certificações" />
          <Button text="Projetos" />
          <Button text="Experiências" />
          <Button text="Redes" />
        </nav>
      </div>
      {/* Fundo animado com formas*/}
      <svg className='opacity-20 animate__animated animate__pulse animate__infinite animate__slow fixed top-22 left-2' width="255" height="238" viewBox="0 0 255 238" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="189.5" y="57.5" width="62" height="64" rx="31" stroke="#5CC6FF" stroke-width="7" />
        <path d="M51.4166 60.6978L110.54 30.5371L107.098 96.8197L51.4166 60.6978Z" stroke="#5CC6FF" stroke-width="7" />
        <path d="M10.3937 159.533L42.1515 182.238L42.721 181.997L48.5515 143.396L58.9452 139L51.6028 185.535L90.1067 212.681L79.713 217.077L48.1986 194.949L47.6291 195.189L41.5552 233.215L31.1615 237.611L39.0734 190.834L0 163.929L10.3937 159.533Z" fill="#5CC6FF" />
      </svg>

      {/*Organizador para conteudos centralizarem*/}
      <div className='flex justify-between items-center'>


        {/*Coluna invisível Esquerda*/}
        <div className="min-w-1/4 max-sm:min-w-4"></div>


        <div className=' max-w-6xl w-full mt-32'>
          <div className='Content-ONE flex items-center justify-evenly'>
            <div>
              <p className='text-MainWhite text-2xl max-md:text-sm'>Bem vind@, meu nome é</p>
              <p className='text-primaryblue font-bold text-5xl max-md:text-4xl'> Elison <span className='font-thin'>Felipe</span> </p>
            </div>
            {/*Frescurinha para deixar bordas com cara bonitinha*/}
            <div className="photo"> <div className='w-56 h-56 rounded-3xl border-2 border-solid rounded-tl-full rounded-tr-lg rounded-br-full rounded-bl-lg	border-MainWhite max-sm:w-32 max-sm:h-32'><Image className='rounded-full border-2 border-solid	border-MainWhite' src="/images/my-photo.jpeg" alt="Photo" width={220} height={220} /></div> </div>
          </div>

          <div className='Content-TWO flex justify-center items-center'>
            <div className='my-52 text-center p-6 px-12 border-2 border-solid	border-MainWhite rounded-tl-full rounded-tr-lg rounded-br-full rounded-bl-lg '>
              <p className='text-MainWhite text-xl font-bold'>Desenvolvedor Web <span className='font-thin'>|</span> Técnico em redes <span className='font-thin'>|</span> UI UX </p>
              <p className='text-MainWhite text-lg font-extralight'>Graduando Tecnologia em Sistemas para internet</p>
            </div>
          </div>

        </div>

        {/*Coluna invisível Direita*/}
        <div className='min-w-1/4 max-sm:min-w-4'></div>

      </div>

      {/*Sobre Mim*/}

      <div className='flex justify-center items-center'>

        
         {/*Coluna invisível Esquerda*/}
         <div className="min-w-1/4 max-sm:min-w-4"></div>

        <div className='max-w-6xl w-full mt-32'>

            <div className="AboutMe flex justify-center items-center bg-gradient-to-r from-TwoGray via-OneGray to-TwoGray">
              <div>
                <div>
                  <p className='text-MainWhite text-3xl font-bold my-40 flex justify-center items-center' >Quem sou?</p>
                </div>
                <div> <p className='text-MainWhite text-center mb-28'>Desde cedo, fui fascinado pela maneira como a tecnologia transforma tudo ao nosso redor, e desde então venho explorando e me aprofundando no vasto universo da tecnologia. <br />
                  Atualmente, estou em uma jornada de aprendizado contínuo, completando diversos cursos para aprimorar minhas habilidades e conhecimentos. <br />
                  Uma das minhas paixões fora do mundo da tecnologia são os carros, e minha trilogia favorita é Velozes e Furiosos, sou fascinado pela mecânica automotiva e pela emoção da velocidade.</p>
                </div>
              </div>
            </div>
      
        </div>

          {/*Coluna invisível Esquerda*/}
          <div className="min-w-1/4 max-sm:min-w-4"></div>
       
      </div>

    </main>
  );
}
