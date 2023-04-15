import styles from "../styles/Home.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <hr size="1" width="90%"></hr>
        <div className={styles.autoscroll}>
          <p
            onClick={() => {
              const locationElement = document.getElementById("about");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Quem somos
          </p>
          <hr />
          <p
            onClick={() => {
              const locationElement = document.getElementById("invite");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Cardápios
          </p>
          <hr />
          <p
            onClick={() => {
              const locationElement = document.getElementById("location");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Localização
          </p>
        </div>
        <div className={styles.wave}></div>
        <div className={styles.about} id="about">
          <h2>Sobre nós:</h2>
          <p>
            Você é apaixonado por hambúrgueres artesanais? Então não pode deixar
            de conhecer a nossa hamburgueria! Preparamos com todo carinho e
            dedicação os mais deliciosos hambúrgueres artesanais que você já
            provou. Nossos hambúrgueres são feitos com carne de primeira
            qualidade e ingredientes selecionados, para garantir um sabor
            inigualável. Além disso, nossos pães são assados diariamente, para
            que você possa desfrutar de um hambúrguer fresquinho e crocante. Mas
            não é só isso! Nossa hamburgueria possui um ambiente descontraído e
            acolhedor, ideal para desfrutar de um bom hambúrguer com amigos ou
            familiares. E se você quiser, pode acompanhar seu hambúrguer com
            nossas deliciosas batatas fritas artesanais e uma cerveja gelada.
            Então, o que está esperando? Venha conhecer a nossa hamburgueria
            artesanal e saborear os melhores hambúrgueres da cidade! Estamos
            ansiosos para recebê-lo e proporcionar uma experiência incrível para
            você. Esperamos por você na Hamburgueria.
          </p>
        </div>

        <div className={styles.invite} id="invite">
          <h2>Nosso cardápio digial:</h2>
          <p>
            Descubra os sabores únicos dos nossos hambúrgueres artesanais! Em
            nosso menu, você encontrará opções clássicas e criativas, todas
            preparadas com ingredientes frescos e de qualidade. Não deixe de
            conferir nosso cardápio e escolher o hambúrguer que mais combina com
            você. Estamos ansiosos para recebê-lo em nossa Hamburgueria!
          </p>
          <Link href="/Cardapio" legacyBehavior>
            <a>Menu digital</a>
          </Link>
          <Image
            src="/images/cardapio.jpg"
            width={1080}
            height={720}
            className={styles.cardapio}
          />
        </div>

        <div>
          <div className={styles.location} id="location">
            <Image
              src="/images/burguer.png"
              width={1280}
              height={1280}
              className={styles.logo}
            />
            <div className={styles.infolocation}>
              <h2>Onde ficamos:</h2>
              <p>
                Não sabe onde estamos localizados? Não tem problema! Clique no
                botão abaixo e descubra onde fica nossa hamburgueria artesanal.
                Não perca mais tempo e venha desfrutar dos nossos hambúrgueres
                deliciosos e feitos com ingredientes selecionados. Esperamos por
                você!
              </p>
              <p>
                <Link href="" legacyBehavior>
                  <a>📍R. da hamburgueria, n.123</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
