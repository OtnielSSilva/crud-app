import { ChangeEvent, useEffect, useState } from "react";
import { Item } from "../types";

interface FormularioItemProps {
	itemAtual?: Item | null;
	salvarItem: (item: Item) => void;
	cancelarEdicao: () => void;
}

const FormularioItem: React.FC<FormularioItemProps> = ({
	itemAtual,
	salvarItem,
	cancelarEdicao,
}) => {
	const [item, setItem] = useState<Item>({
		id: 0,
		nome: "",
		descricao: "",
	});

	useEffect(() => {
		if (itemAtual) {
			setItem(itemAtual);
		}
	}, [itemAtual]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setItem({ ...item, [name]: value });
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		salvarItem(item);
		setItem({ id: 0, nome: "", descricao: "" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
		>
			<div className="mb-4">
				<label className="block text-gray-700 font-bold mb-2">Nome:</label>
				<input
					type="text"
					name="nome"
					value={item.nome}
					onChange={handleChange}
					className="mt-1 p-2 w-full border rounded-md"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 font-bold mb-2">Descrição:</label>
				<textarea
					name="descricao"
					value={item.descricao}
					onChange={handleChange}
					className="mt-1 p-2 w-full border rounded-md"
				/>
			</div>
			<div className="flex space-x-4">
				<button
					type="submit"
					className="mt-4 p-2 bg-blue-500 text-white rounded-md"
				>
					Salvar
				</button>
				{itemAtual && (
					<button
						onClick={cancelarEdicao}
						className="mt-4 p-2 bg-gray-500 text-white rounded-md"
					>
						Cancelar
					</button>
				)}
			</div>
		</form>
	);
};

export default FormularioItem;
