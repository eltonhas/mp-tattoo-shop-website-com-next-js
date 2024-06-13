'use client'
import classNames from 'classnames'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

import Whatsapp from '@/assets/whatsapp.svg'

interface LinkNavigationProps extends LinkProps {
  title: string
  contact?: string
  className?: string
}

export function LinkNavigation({
  title,
  contact,
  href,
  className,
  ...rest
}: LinkNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={classNames(['flex flex-col items-end', className])}>
      <Link
        href={href}
        className={`font-londrina text-lg text-headings transition-opacity hover:opacity-50 md:text-3xl ${pathname === href ? 'underline' : null}`}
        {...rest}
      >
        {title}
      </Link>
      {contact && (
        <p className="hidden text-xs md:flex md:justify-end">
          <Image src={Whatsapp} className="size-4" alt="whatsapp" />
          {contact}
        </p>
      )}
    </div>
  )
}
