import Head from 'next/head';
import Image from 'next/image'
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Logo from './logo';

const name ='Dr Meleks Hemlandsfond';
export const siteTitle='Stiftelsen Dr Meleks Hemlandsfond'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Lär dig mer om stiftelsen om Dr Meleks Hemlandsfond"
                />
                <meta
                     property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                     )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                    <Logo />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                    <Link href="/">
                        <Logo className={utilStyles.borderCircle} />
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </Link>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}