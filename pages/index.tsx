import Image from 'next/image'
import Head from 'next/head'
import MainLayout from '@/layout/Main/MainLayout'
import styles from '@/styles/page.module.css'

function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
    </MainLayout>
  )
}
export default Home