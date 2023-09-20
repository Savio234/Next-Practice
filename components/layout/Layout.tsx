import React, { ReactElement, ReactNode } from 'react'
import Header from '@/shared/Header/Header'
import Footer from '@/shared/Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({children}: any) => {
  return (
    <div className={styles.layout}>
        <Header />
        <main className={styles.layout_background}>
            <div className={styles.layout_content}>
                {children}
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout