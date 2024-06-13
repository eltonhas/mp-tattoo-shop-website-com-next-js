'use client'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logo.svg'

import { LinkNavigation } from './link-navigation'

export function Header() {
  return (
    <header className="flex w-full max-w-7xl flex-col px-8 pt-10 font-sans text-xs text-footer-text md:mx-auto md:flex-row md:justify-between md:px-8">
      <Link href={'/'}>
        <Image
          src={Logo}
          className="size-32 md:size-40"
          alt="Sandro Luz Tatoo Shop"
        />
      </Link>
      <nav className="flex flex-row items-center">
        <LinkNavigation
          title="Serviços"
          href={'/services'}
          className="pr-[30px]"
        />
        <LinkNavigation
          title="Sobre nós"
          href={'/about'}
          className="pr-[30px] md:pr-0"
        />
        <LinkNavigation
          title="Contatos"
          href={'/contacts'}
          contact="(+55 11) 99999 9999"
          className="md:pt-4"
        />
      </nav>
    </header>
  )
}
