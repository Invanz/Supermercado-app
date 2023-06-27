// import { data } from '../data';

export const AddProduct = () => {

	return (
            <div className="productFormulary">
                <h3>Agregar productos</h3>
                <div className="formulary">
                    <label htmlFor="nombre">Nombre del producto</label>
                    <input id="nombre" type="text" placeholder='Nombre del producto'/><br />
                    <input type="text" placeholder='Precio del producto'/><br />
                    <input type="text" placeholder='Cantidad del producto'/>
                </div>
            </div>
    );
};