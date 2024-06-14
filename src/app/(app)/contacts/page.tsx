import Image from 'next/image'

import Tatoo from '@/assets/contact.jpg'
import Whatsapp from '@/assets/whatsapp.svg'

export default function Contacts() {
  return (
    <main className="flex w-full flex-col items-center gap-10 lg:flex-row">
      <section className="mt-8 flex flex-col items-center gap-9 lg:mt-0 lg:items-start lg:gap-8">
        <h1 className="mt-16 text-2xl font-black text-headings lg:mt-0 lg:text-3xl">
          Entre em <span className="text-brand-color">Contato</span>
        </h1>
        <p className="mr-8 text-center text-base font-light leading-6 text-typography lg:text-start">
          Clique no botão abaixo e envie uma mensagem. Vamos conversar!
        </p>
        <a
          href="https://wa.me/5579999999999"
          className="flex min-w-64 cursor-pointer items-center justify-center gap-8 rounded-lg bg-muted p-4 transition-all hover:scale-110 hover:opacity-85"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={Whatsapp}
            className="size-9 text-headings"
            alt="whatsapp"
          />
          <div className="flex flex-col text-headings">
            <span className="text-lg">Enviar Whatsapp</span>
            <span className="text-xs text-footer-text">
              (+55 11) 99999 9999
            </span>
          </div>
        </a>
      </section>
      <Image
        src={Tatoo}
        alt="Cara fazendo tatuagem"
        className="max-w-1/2 hidden h-[500px] w-full object-cover md:block"
      />
    </main>
  )
}
