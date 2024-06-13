import Image from 'next/image'

import Whatsapp from '@/assets/whatsapp.svg'

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-footer-background px-8 py-5 font-sans text-xs text-footer-text md:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between md:mx-auto md:justify-start md:gap-3">
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <p>Sandro Luz Tattoo Shop</p>
          <div className="hidden size-1 rounded-full bg-brand-color md:flex" />
          <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        </div>

        <div className="size-1 rounded-full bg-brand-color" />
        <div className="flex items-center gap-0.5">
          <Image src={Whatsapp} className="size-4" alt="whatsapp" />
          <p>(+55 11) 99999 9999</p>
        </div>
      </div>
    </footer>
  )
}
