import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import CharacterList from '../components/CharacterList'

 
export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
 
  if (!hasLocale(lang)) notFound()
 
  await getDictionary(lang)



  return (
    <div className="flex flex-col items-center  h-screen  bg-[#e0e0e0]">
      <h1 className='text-amber-300 text-2xl font-bold'>Personajes de harry potter</h1>
      <p className='mb-2 text-black'>explora el universo magico de harry potter: un listado completo de personajes con su casa, especie y datos especiales</p>
      <CharacterList></CharacterList>
    </div>
  )
}
