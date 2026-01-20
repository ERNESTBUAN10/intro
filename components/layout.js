// components/layout.js

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

// TODO: REPLACE THIS WITH YOUR FULL NAME
const name = 'Ernest Benedict Y. Buan'; 
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  // ... (keep the rest of the file exactly as it is)
  return (
    <div className={styles.container}>
      {/* ... code ... */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
             {/* ... code ... */}
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