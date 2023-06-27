import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MenuCategorias = ({
	
}) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
		  const response = await axios.get('/api/categorias');
		  setData(response.data);
		} catch (error) {
		  console.error('Error al obtener datos:', error);
		}
	};


	return (
		<div className='side-bar'>
		<h2>Categorías</h2>
		<br></br>
		<div className='side-bar-list'>
			<h3>Aseo</h3>
			<h3>Alimentos</h3>
			<h3>Bebidas</h3>
			<h3>Carnes</h3>
			<h3>Frutas y Verduras</h3>
			<h3>Lácteos</h3>
			<h3>Otras Categorías</h3>

			
			{data.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
		</div>	
	);
};