import Image from 'next/image'
import Head from 'next/head'
import MainLayout from '@/layout/Main/MainLayout'
import styles from '@/styles/page.module.css'
import { Slider } from '@/shared'

function Home() {
  const slides = [1, 2, 3, 4]
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <Slider slides={slides} />
    </MainLayout>
  )
}
export default Home