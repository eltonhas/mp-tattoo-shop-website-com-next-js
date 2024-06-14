export default function Services() {
  return (
    <main className="flex w-full flex-col items-center md:items-start">
      <h1 className="mt-16 text-2xl font-black text-brand-color md:text-3xl">
        Serviços
      </h1>
      <section className="mx-10 mt-8 flex flex-col items-center gap-9 pb-32 md:mx-0 md:flex-row md:items-start md:gap-20">
        <div className="flex w-60 flex-col items-center gap-4 md:items-start">
          <h2 className="text-lg font-black text-headings">
            Tatuagens Personalizadas
          </h2>
          <p className="text-center text-base font-extralight leading-6 text-typography md:text-start">
            Oferecemos a criação de tatuagens personalizadas, onde cada design é
            desenvolvido em colaboração direta com o cliente. A partir de uma
            ideia inicial, trabalhamos juntos para criar uma obra de arte única
            que reflete sua personalidade e sentimentos.
          </p>
        </div>
        <div className="flex w-60 flex-col items-center gap-4 md:items-start">
          <h2 className="text-lg font-black text-headings">Cover-Up</h2>
          <p className="text-center text-base font-extralight leading-6 text-typography md:text-start">
            Especializamo-nos em transformar tatuagens antigas ou indesejadas em
            novas obras de arte. Se você tem uma tatuagem que não representa
            mais quem você é, nós podemos ajudá-lo a reformulá-la com um design
            criativo e original.
          </p>
        </div>
        <div className="flex w-60 flex-col items-center gap-4 md:items-start">
          <h2 className="text-lg font-black text-headings">Restauração</h2>
          <p className="text-center text-base font-extralight leading-6 text-typography md:text-start">
            Com o tempo, algumas tatuagens podem desbotar ou perder a definição.
            Oferecemos serviços de restauração para revitalizar sua tatuagem
            antiga, realçando as cores e contornos para que ela volte a ter a
            aparência de quando foi feita pela primeira vez.
          </p>
        </div>
        <div className="flex w-60 flex-col items-center gap-4 md:items-start">
          <h2 className="text-lg font-black text-headings">Henna</h2>
          <p className="text-center text-base font-extralight leading-6 text-typography md:text-start">
            Para aqueles que não estão prontos para um compromisso permanente ou
            desejam testar um design antes de tatuá-lo definitivamente,
            oferecemos tatuagens temporárias de alta qualidade que duram de
            algumas semanas a alguns meses.
          </p>
        </div>
      </section>
    </main>
  )
}
