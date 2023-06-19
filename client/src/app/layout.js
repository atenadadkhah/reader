import './globals.scss'
import localFont from 'next/font/local';
import Navbar from "@/app/components/navbar/navbar.component";
import Footer from "@/app/components/footer/footer.component";
import Provider from "@/utils/provider";

const iranYekanFont = localFont({
    src: '../../public/fonts/IranYekan/IranYekan.ttf',
    display: 'swap',
});

export const metadata = {
    title: 'Reader',
}

export default function RootLayout({children}) {
    return (
        <html lang="fa" className={iranYekanFont.className}>
        <body>
        <Navbar/>
        <Provider>
            {children}
        </Provider>
        <Footer/>
        </body>
        </html>
    )
}
