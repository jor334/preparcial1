import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import '../globals.css';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({
  children,
  params,
}:  LayoutProps<'/[lang]'>) {
  return (
    <html lang={(await params).lang} className="bg-white">
      

      <body className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        
        <main className="flex-1">{children}</main>

        <Footer></Footer>
      </body>

    </html>
  )
}