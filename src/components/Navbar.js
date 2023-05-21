import { Info, PaperPlaneTilt, List } from 'phosphor-react';

import Image from 'next/image';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoBox}>
        <Image src='/images/logo.png' width={1280} height={1280} alt='' />
        <h1>NiceBurguer</h1>
      </div>

      <div className={styles.links}>
        <a
          onClick={() => {
            const div = document.getElementById('suaDiv');
            div.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <List weight='fill' size={32} />
          Cardápio
        </a>

        <a
          onClick={() => {
            const div = document.getElementById('suaDiv');
            div.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <PaperPlaneTilt weight='fill' size={32} />
          Contato
        </a>

        <a
          onClick={() => {
            const div = document.getElementById('suaDiv');
            div.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Info weight='fill' size={32} />
          Sobre
        </a>
      </div>
    </nav>
  );
}
