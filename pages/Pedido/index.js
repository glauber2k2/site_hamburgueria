import styles from "./Pedido.module.css";
import { useState } from "react";

import { menu } from "../Cardapio/menu";

export default function Pedido() {
  const [itens, setItens] = useState([]);
  const [price, setPrice] = useState(0);

  //cria a função handleItensAdd, que é chamada sempre que um item é selecionado no formulário
  const handleItensAdd = (e) => {
    const value = e.target.value; //pega o valor do item selecionado (no caso o nome do produto)
    const category = e.target.name; //pega o nome do array {} (hamburgueres)

    e.target.value = ""; // Atualiza o valor selecionado para "Selecione

    const item = menu[category].find((item) => item.nome === value); //buscando em 'menu' aquele que tem a propriedade 'nome' igual ao valor de 'value'.
    setItens([...itens, item]); //adiciona o novo item a lista de compras
    handlePrice(item.preco); //chama o handlePrince, passando o preco do produto.
  };

  //cria uma função recebendo como paramentro um novo preço
  const handlePrice = (precoDoProdutoSelecionado) => {
    setPrice(price + precoDoProdutoSelecionado); //pega novo preço, e soma ao preço total.
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label>Burguers</label>
        <select name="hamburgueres" onChange={handleItensAdd}>
          <option key="selecione" value="">
            Selecione
          </option>

          {menu.hamburgueres.map((item) => (
            <option key={item.id} value={item.nome}>
              {item.nome}
            </option>
          ))}
        </select>

        <label>Acompanhamentos</label>
        <select name="Acompanhamentos" onChange={handleItensAdd}>
          <option key="selecione" value="">
            Selecione
          </option>

          {menu.Acompanhamentos.map((item) => (
            <option key={item.id} value={item.nome}>
              {item.nome}
            </option>
          ))}
        </select>
      </form>
      <p>Burgers selecionados: {itens.map((item) => item.nome).join(" - ")}</p>
      <p>Preço total: R$ {price.toFixed(2)}</p>
    </div>
  );
}
