import "../../styles/globals.css";
import 'bootstrap/scss/bootstrap-reboot.scss'
import Navbar from "../../components/navBar"
import Footer from "../../components/footer";
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

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />

            <body className={interTight.className}>
                <div className="dark:bg-neutral-900 dark:text-white">
                    <Navbar />
                    <div
                        id="page-top-spacer"
                        className="h-12"
                    ></div>
                    {children}
                    <div id="page-bottom-spacer" className="h-16"></div>
                    <div className="">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}