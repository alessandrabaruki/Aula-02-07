import React from 'react';
import { ItemEstoque } from './type';

interface ListaItensProps {
  listaItens: ItemEstoque[];
  handleDelItem: (id: number) => void;
}

const ListaItens: React.FC<ListaItensProps> = ({ listaItens, handleDelItem }) => {
  return (
    <div>
      <h1>Lista de Itens do Estoque</h1>
      <ul>
        {listaItens?.map(item => (
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: R${item.preco.toFixed(2)}</p>
            <button onClick={() => handleDelItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
