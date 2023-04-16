import Head from "next/head";
import Link from "next/link";
import styles from "./Cardapio.module.css";

import { menu } from "./menu";

export default function Cardapio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cardápio - Hamburgueria Artesanal</title>
        <meta name="description" content="Cardápio da Hamburgueria Artesanal" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cardápio - Hamburgueria Artesanal</h1>

        <div className={styles.tabs}>
          <Link href="/Pedido">
            <button className={styles.tab}>Fazer o pedido!</button>
          </Link>
        </div>

        <ul className={styles.list}>
          {menu.hamburgueres.map((item) => (
            <li key={item.nome} className={styles.item}>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <p>R$ {item.preco.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
