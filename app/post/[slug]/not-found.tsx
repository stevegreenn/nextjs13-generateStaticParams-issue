import { Inter } from 'next/font/google'
import styles from '../../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function PostNotFound() {
  return <p className={inter.className}>Uh oh! This post could not be found.</p>
}
