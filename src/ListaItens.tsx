import React from 'react';
import { ItemEstoque } from './type';

interface ListaItemProps {
  listaItens: ItemEstoque[];
  handleDelItem: (id: number) => void;
}

const ListaItens: React.FC<ListaItemProps> = ({ listaItens, handleDelItem }) => {
  return (
    <div className="lista-itens">
      <h2>Lista de Itens do Estoque</h2>
      <ul>
        {listaItens?.map(item => (
          <li key={item.id} className="item">
            <h3>{item.nome}</h3>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: R${item.preco.toFixed(2)}</p>
            <button onClick={() => handleDelItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
