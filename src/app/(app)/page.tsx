import Image from 'next/image'

import Man from '@/assets/portrait.png'

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-268px)] w-full flex-col items-start justify-center overflow-hidden font-black text-muted md:min-h-[calc(100vh-256px)]">
      <div className="z-20">
        <p className="absolute top-[-100px] -z-50 hidden font-londrina text-[400px] text-bg-text opacity-40 lg:block">
          TATTOO
        </p>
        <p className="text-5xl font-black lg:text-8xl">INSPIRE-SE</p>
        <p className="text-5xl font-black lg:text-8xl">EXPRESSE-SE</p>
        <p className="text-5xl font-black text-brand-color lg:text-8xl">
          TATUE-SE
        </p>
      </div>
      <Image
        src={Man}
        alt="homem"
        className="absolute left-52 top-1 h-[750px] max-w-md object-contain lg:left-[830px] lg:z-50"
      />
    </div>
  )
}
