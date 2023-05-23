import Image from 'next/image';
import { WhatsappLogo } from 'phosphor-react';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>
            A hamburgueria <span>preferida</span> da cidade.
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
              <button>
                <WhatsappLogo size={32} weight='duotone' />
                Fazer Pedido
              </button>
            </div>
          </div>
        </div>
        <div className={styles.demo}>
          <h1>REFRI</h1>
          <h1>SEM</h1>
          <h1>LIMITE</h1>
          <Image
            src='/images/refri.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.refri}
          />
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.burguerMenu}>
          <h1>
            Nossos <span>burguers</span>
          </h1>
          <p>
            Burguers totalmente artesanais, e com aquele molho especial que a
            cidade inteira ama! se você não conhece ainda, venha experimentar o
            Nice Burguer que mais combina com você.
          </p>
          <div className={styles.burguers}>
            <h1>VENHA HOJE PROVAR ESSA INCRIVEL DESCOBERTA CULINARIA!</h1>

            <Image
              src='/images/burguer.png'
              width={1280}
              height={1280}
              alt=''
              className={styles.burguer1}
            />
            <Image
              src='/images/burguer.png'
              width={1280}
              height={1280}
              alt=''
              className={styles.burguer2}
            />
            <Image
              src='/images/burguer.png'
              width={1280}
              height={1280}
              alt=''
              className={styles.burguer3}
            />
          </div>
        </div>
        <div className={styles.menuList}>
          <h1>Burguer Menu: </h1>
          <ul>
            <li>
              <p>01.Nice Cheddar</p>
              <span>R$ 9.99</span>
            </li>
            <li>
              <p>02.Classic Cheeseburger</p>
              <span>R$ 9.99</span>
            </li>
            <li>
              <p>03.Smoky BBQ Burger</p>
              <span>R$ 10.99</span>
            </li>
            <li>
              <p>04.Mushroom Swiss Burger</p>
              <span>R$ 11.99</span>
            </li>
            <li>
              <p>05.Spicy Jalapeno Burger</p>
              <span>R$ 10.49</span>
            </li>
            <li>
              <p>06.Blue Cheese Bacon Burger</p>
              <span>R$ 12.99</span>
            </li>
            <li>
              <p>07.Avocado Turkey Burger</p>
              <span>R$ 11.49</span>
            </li>
            <li>
              <p>08.Gourmet Truffle Burger</p>
              <span>R$ 13.99</span>
            </li>
            <li>
              <p>09.Hawaiian Teriyaki Burger</p>
              <span>R$ 10.99</span>
            </li>
            <li>
              <p>10.Vegan Beyond Burger</p>
              <span>R$ 12.49</span>
            </li>
          </ul>

          <h1>Bebidas: </h1>
          <ul>
            <li>
              <p>11.Refrigerante</p>
              <span>R$ 2.99</span>
            </li>
            <li>
              <p>12.Água Mineral</p>
              <span>R$ 1.99</span>
            </li>
            <li>
              <p>13.Suco Natural</p>
              <span>R$ 3.49</span>
            </li>
            <li>
              <p>14.Milkshake</p>
              <span>R$ 4.99</span>
            </li>
            <li>
              <p>15.Smoothie</p>
              <span>R$ 3.99</span>
            </li>
            <li>
              <p>16.Coquetel Especial</p>
              <span>R$ 5.99</span>
            </li>
          </ul>

          <h1>Petiscos</h1>
          <ul>
            <li>
              <p>17.Onion Rings</p>
              <span>R$ 4.99</span>
            </li>
            <li>
              <p>18.Batata Frita</p>
              <span>R$ 3.99</span>
            </li>

            <li>
              <p>19.Chicken Wings</p>
              <span>R$ 6.99</span>
            </li>

            <li>
              <p>20.Coxinha de Frango</p>
              <span>R$ 3.49</span>
            </li>

            <li>
              <p>21.Bolinho de Carne</p>
              <span>R$ 4.99</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
