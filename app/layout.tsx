import '../styles/bootstrap.scss'
import '../styles/globals.css'
import { Inter_Tight } from '@next/font/google'
import Navbar from '../components/navBar'
import Footer from '../components/footer'
const interTight = Inter_Tight({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese"
  ]
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={interTight.className}>
        <div className='dark:bg-neutral-900 dark:text-white'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
