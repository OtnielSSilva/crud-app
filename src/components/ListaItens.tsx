import React from "react";
import { Item } from "../types";

interface ListaItensProps {
	itens: Item[];
	editarItem: (item: Item) => void;
	deletarItem: (item: Item) => void;
}

const ListaItens: React.FC<ListaItensProps> = ({
	itens,
	editarItem,
	deletarItem,
}) => {
	return (
		<div className="max-w-2xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4">Lista de Itens</h2>
			<div className="space-y-4">
				{itens.map((item) => (
					<div
						key={item.id}
						className="p-6 bg-white border border-gray-200 rounded-lg shadow-md"
					>
						<h3 className="text-xl font-semibold text-gray-800">{item.nome}</h3>
						<p className="text-gray-600 mb-4">{item.descricao}</p>
						<div className="flex space-x-4">
							<button
								onClick={() => editarItem(item)}
								className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition duration-200"
							>
								Editar
							</button>
							<button
								onClick={() => deletarItem(item)}
								className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
							>
								Deletar
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListaItens;
