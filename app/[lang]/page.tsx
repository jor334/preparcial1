import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import CharacterList from '../components/CharacterList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Listado de personajes - HarryPotterApp',
  description: 'Explora el universo mágico de Harry Potter: un listado completo de personajes con su casa, especie y datos principales.',
}

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
 
  if (!hasLocale(lang)) notFound()
 
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col items-center  bg-[#e0e0e0]">
      <h1 className='text-amber-300 text-3xl mt-10 font-bold'>{dict.pageTitle}</h1>
      <p className='mb-8 text-black mt-8'>{dict.pageDescription}</p>
      <CharacterList></CharacterList>
    </div>
  )
}
