import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import style from '@/styles/NavBar.module.css';

import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={style.nav}>

                    <div className={style.navItem}>
                        <Link href="/">
                            <h1 className={style.navItemText}>Home</h1>
                        </Link>
                    </div>

                    <div className={style.navItem}>
                        <Link href="/products">
                            <h1 className={style.navItemText}>Products</h1>
                        </Link>
                    </div>

                    <div className={style.navItem}>
                        <Link href="/about">
                            <h1 className={style.navItemText}>About</h1>
                        </Link>
                    </div>

                    <div className={style.navItem}>
                        <div className={style.navDropdown} data-cy="dropDown">
                            <h1 className={`${style.navItemText} ${style.navDropBtn}`}>Learn &#8681;</h1>
                            <div className={style.navDropdownContent} data-cy="dropDownContent">
                                <Link href="/javascript">
                                    <h2 className={style.navDropdownItem}>JavaScript</h2>
                                </Link>
                                <Link href="/react">
                                    <h2 className={style.navDropdownItem}>React</h2>
                                </Link>
                                <Link href="/python">
                                    <h2 className={style.navDropdownItem}>Python</h2>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}
