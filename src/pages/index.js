import Image from 'next/image';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>
            A hamburgueria <span>preferida</span> da Cidade.
          </h1>

          <h4>
            Sabor autêntico em cada mordida: a arte dos hambúrgueres na sua
            melhor versão!
          </h4>
          <div className={styles.snack}>
            <div className={styles.snackPhoto}>
              <Image
                src='/images/nuggets.png'
                width={1280}
                height={1280}
                alt=''
              />
            </div>
            <div>
              <h1>Nossos petiscos:</h1>
              <p>
                Delicie-se com os petiscos irresistíveis da melhor hamburgueria
                da cidade. Compartilhe saborosos momentos de prazer com cada
                mordida.
              </p>
              <button>Fazer Pedido</button>
            </div>
          </div>
        </div>
        <div className={styles.demo}>
          <h1>COM REFRI</h1>
          <h1>TOTALMENTE</h1>
          <h1>ILIMITADO</h1>
          <Image
            src='/images/refri.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.refri}
          />
        </div>
      </div>
    </>
  );
}
