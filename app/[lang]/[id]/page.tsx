import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import CharacterDetail from '../../components/CharacterDetail'
import type { Metadata } from 'next'


export default async function Page({ params }: PageProps<'/[lang]/[id]'>) {
    const { lang, id } = await params

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang)

    return <CharacterDetail id={id} dict={dict} />
}
