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
    <html lang={(await params).lang}>


      <body>
        <Navbar></Navbar>
        
        {children}
      <Footer></Footer>
        
        </body>

    </html>
  )
}