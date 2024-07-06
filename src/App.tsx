import React, { useState } from "react";
import { Item } from "./types";
import ListaItens from "./components/ListaItens";
import FormularioItem from "./components/FormularioItem";
import seedData from "./seedData";

const App: React.FC = () => {
	const [itens, setItens] = useState<Item[]>(seedData);
	const [itemEditando, setItemEditando] = useState<Item | null>(null);

	const adicionarOuEditarItem = (item: Item) => {
		if (item.id === 0) {
			setItens([...itens, { ...item, id: Math.random() }]);
		} else {
			setItens(itens.map((i) => (i.id === item.id ? { ...item } : i)));
		}
		setItemEditando(null);
	};

	const editarItem = (item: Item) => {
		setItemEditando(item);
	};

	const deletarItem = (item: Item) => {
		setItens(itens.filter((i) => i.id !== item.id));
	};

	const cancelarEdicao = () => {
		setItemEditando(null);
	};

	return (
		<div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
			<h1 className="text-3xl font-bold mb-6">Gerenciamento de Itens</h1>
			<FormularioItem
				itemAtual={itemEditando}
				salvarItem={adicionarOuEditarItem}
				cancelarEdicao={cancelarEdicao}
			/>
			<ListaItens
				itens={itens}
				editarItem={editarItem}
				deletarItem={deletarItem}
			/>
		</div>
	);
};

export default App;
