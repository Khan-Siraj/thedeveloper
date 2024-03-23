import {Ubuntu, IBM_Plex_Mono, Inter} from 'next/font/google'

export const inter = Inter({ subsets: ["latin"] });

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: '300'
})

export const ibm_plex_mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: '400'
})