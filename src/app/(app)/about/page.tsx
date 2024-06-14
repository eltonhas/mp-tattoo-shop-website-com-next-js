import Image from 'next/image'

import Man from '@/assets/portrait.png'

export default function About() {
  return (
    <main className="flex w-full flex-col items-center gap-10 md:flex-row">
      <section className="mt-8 flex flex-col items-center gap-9 md:mt-0 md:items-start md:gap-8">
        <h1 className="mt-16 text-2xl font-black text-headings md:mt-0 md:text-3xl">
          Prazer, sou <span className="text-brand-color">Sandro Luz</span>
        </h1>
        <p className="mr-8 text-start text-base font-light leading-6 text-typography">
          Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se
          imprime na pele. Com mais de 10 anos de experiência no mundo da
          tatuagem, dedico-me a transformar visões e emoções em arte corporal
          que expressa quem você é e o que você ama.
        </p>
        <p className="mr-8 text-start text-base font-light leading-6 text-typography">
          Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
          atentamente os desejos e as histórias de meus clientes para que cada
          peça seja única e pessoal. Especializo-me em vários estilos, desde o
          delicado traço fino até composições mais robustas e coloridas,
          garantindo que cada design não só atenda, mas supere as expectativas.
        </p>
        <p className="mr-8 text-start text-base font-light leading-6 text-typography">
          Além da dedicação à arte, a segurança e o conforto são prioridades no
          meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
          qualidade, e sou rigoroso quanto aos protocolos de higiene e
          segurança, garantindo uma experiência segura e confortável para todos.
        </p>
        <p className="mr-8 text-start text-base font-light leading-6 text-typography">
          Visite meu estúdio e veja como a arte pode se manifestar em sua pele.
          Estou aqui para ajudá-lo a contar sua história de uma maneira única e
          eterna. Agende sua consulta e vamos juntos criar algo extraordinário!
        </p>
        <h2 className="font-island text-4xl text-typography">Sandro Luz</h2>
      </section>
      <Image
        src={Man}
        alt="Sandro Luz"
        className="h-96 w-full object-scale-down md:min-h-[calc(100vh-200px)] md:object-cover"
      />
    </main>
  )
}
