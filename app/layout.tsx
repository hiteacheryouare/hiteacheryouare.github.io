import 'bootstrap/scss/bootstrap-reboot.scss'
import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.css'
import { Inter_Tight } from '@next/font/google'
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
      <body className={interTight.className}>{children}</body>
    </html>
  )
}
